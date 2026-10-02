import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { Quotes, Star } from '@phosphor-icons/react'
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from '../lib/constants'
import { ensureGsap, prefersReducedMotion } from '../lib/gsapSetup'
import ScrollReveal from './ScrollReveal'

const REVIEWS = [
  {
    name: 'Cecília Apolinário',
    text: 'Perfeita a clínica 💓 Médicos maravilhosos. Atendimento humanizado desde o atendimento no WhatsApp até a recepção! Atendente Graziele e Pâmela, parabéns pelo excelente atendimento.',
  },
  {
    name: 'Valdir Pereira da Silva',
    badge: 'Guia Local',
    text: 'Excelente profissional e lugar aconchegante. A Cindy, uma pessoa muito simpática, nos orienta quanto aos cuidados pós-cirurgia e está sempre em contato para saber notícias. As meninas da recepção são uns amores.',
  },
  {
    name: 'Gabriel Bagatol',
    text: 'Atendimento excelente! Fui muito bem recebido desde a recepção até o momento do atendimento. A Dra. Grazi é super atenciosa, explica tudo com clareza. A clínica é limpa, organizada e com equipamentos modernos.',
  },
  {
    name: 'Marcelle Duraes',
    text: 'Fiquei extremamente satisfeita com a experiência. O atendimento foi exemplar, com profissionais educados, atenciosos e preparados, que demonstraram profundo conhecimento e dedicação ao que fazem.',
  },
  {
    name: 'Sergio Leandro',
    text: 'Fui atendido pela profissional Grazi e só tenho elogios! Extremamente atenciosa, gentil e dedicada. Explicou cada etapa do procedimento com clareza, transmitindo segurança e confiança.',
  },
  {
    name: 'Norma Sueli Resende',
    text: 'As recepcionistas Luana, Pâmela e Jaylane são eficientes e muito simpáticas, sempre prontas para atender minhas necessidades. A equipe é formidável, atendimento nota mil!',
  },
  {
    name: 'Leonardo Barrozo Moreira',
    text: 'Ótima experiência, lugar climatizado, profissionais excelentes. A recepção me encantou pela educação e cordialidade da funcionária Jaylane, meus parabéns.',
  },
  {
    name: 'Rafaella Brito',
    text: 'Recomendo muito no geral! Do atendimento à recepção, limpeza... profissionais qualificados. Lucyan e Rômulo, protéticos excelentes, trabalho impecável!',
  },
]

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <figure className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:w-[320px] sm:p-6">
      <Quotes size={28} weight="fill" className="text-gold-400/70" />
      <div className="mt-3 flex text-gold-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} weight="fill" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy-100/85">“{review.text}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-white">
        {review.name}
        {review.badge && <span className="ml-2 text-xs font-normal text-navy-300">· {review.badge}</span>}
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  const scope = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !trackRef.current) return
      const gsap = ensureGsap()
      gsap.registerPlugin(Draggable, InertiaPlugin)

      const track = trackRef.current
      const totalWidth = track.scrollWidth / 2
      const wrap = gsap.utils.wrap(-totalWidth, 0)
      const xTo = gsap.quickSetter(track, 'x', 'px') as (v: number) => void

      let progress = 0
      let hovering = false

      const draggable = Draggable.create(track, {
        type: 'x',
        inertia: true,
        onDrag() {
          progress = wrap(this.x)
          xTo(progress)
        },
        onThrowUpdate() {
          progress = wrap(this.x)
          xTo(progress)
        },
      })[0]

      const ticker = () => {
        if (!draggable.isDragging && !draggable.isThrowing && !hovering) {
          progress -= 0.5
          progress = wrap(progress)
          xTo(progress)
        }
      }
      gsap.ticker.add(ticker)

      const onEnter = () => (hovering = true)
      const onLeave = () => (hovering = false)
      track.addEventListener('mouseenter', onEnter)
      track.addEventListener('mouseleave', onLeave)

      return () => {
        gsap.ticker.remove(ticker)
        track.removeEventListener('mouseenter', onEnter)
        track.removeEventListener('mouseleave', onLeave)
        draggable.kill()
      }
    },
    { scope },
  )

  const loop = [...REVIEWS, ...REVIEWS]

  return (
    <section id="depoimentos" ref={scope} className="relative overflow-hidden bg-navy-900 py-14 sm:py-20 lg:py-28">
      <div className="absolute inset-0 bg-mesh-navy opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-gold-300">Depoimentos reais</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              O que dizem os nossos pacientes
            </h2>
          </div>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-gold-400/40"
          >
            <div className="flex text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} weight="fill" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-semibold text-white">{GOOGLE_RATING} no Google</p>
              <p className="text-xs text-navy-300">{GOOGLE_REVIEW_COUNT} avaliações · ver todas</p>
            </div>
          </a>
        </ScrollReveal>

        <p className="relative z-10 mt-3 text-xs text-navy-400">Arraste para o lado para navegar</p>
      </div>

      <div className="relative mt-6 overflow-hidden sm:mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-900 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-900 to-transparent sm:w-32" />
        <div ref={trackRef} className="flex w-max cursor-grab gap-5 px-5 active:cursor-grabbing lg:px-8">
          {loop.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
