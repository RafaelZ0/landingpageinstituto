import { useEffect, useRef, type ReactNode } from 'react'
import { prefersReducedMotion } from '../lib/gsapSetup'

interface Props {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  /** selector for children to reveal individually (staggered via CSS nth-child) instead of the wrapper itself */
  stagger?: string
}

export default function ScrollReveal({ children, className, as = 'div', stagger }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets: Element[] = stagger ? Array.from(el.querySelectorAll(stagger)) : [el]

    if (prefersReducedMotion()) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const reveal = () => targets.forEach((t) => t.classList.add('is-visible'))

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)

    // Absolute last resort so content is never permanently stuck invisible.
    const failsafe = window.setTimeout(reveal, 4000)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [stagger])

  const Tag = as
  const selfClass = stagger ? '' : ' scroll-reveal-item'
  return (
    <Tag ref={ref as never} className={`${className ?? ''}${selfClass}`.trim()}>
      {children}
    </Tag>
  )
}
