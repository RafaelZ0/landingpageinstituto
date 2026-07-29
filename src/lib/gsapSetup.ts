import { gsap } from 'gsap'

export function ensureGsap() {
  return gsap
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
