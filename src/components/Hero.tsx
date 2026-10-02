import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Star, WhatsappLogo } from '@phosphor-icons/react'
import doctorHero from '../assets/doctor-hero.webp'
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, IMPLANT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/constants'
import { ensureGsap, prefersReducedMotion } from '../lib/gsapSetup'

export default function Hero() {
  const scope = useRef<HTMLElement>(null)

  // Decorative-only: if this never runs (e.g. throttled tab), the orbs just
  // stay static — nothing here gates content visibility.
  useGSAP(
    () => {
      if (prefersReducedMotion() || !scope.current) return
      const gsap = ensureGsap()
      gsap.to('[data-hero="orb-1"]', { x: 30, y: -20, duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('[data-hero="orb-2"]', { x: -24, y: 24, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    },
    { scope },
  )

  const headline = 'Recupere seu sorriso com quem mais entende de implante dentário'
  const words = headline.split(' ')

  return (
    <section
      ref={scope}
      id="topo"
      className="relative overflow-hidden bg-navy-900 pb-14 pt-24 sm:pb-20 sm:pt-28 lg:pb-32 lg:pt-40"
    >
      <div className="absolute inset-0 bg-mesh-navy" aria-hidden="true" />
      <div
        data-hero="orb-1"
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-navy-600/40 blur-[100px]"
        aria-hidden="true"
      />
      <div
        data-hero="orb-2"
        className="absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-gold-500/20 blur-[110px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:px-8">
        <div>
          <div
            className="hero-anim inline-flex max-w-full items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-300 sm:px-4 sm:text-xs"
          >
            Referência em Implantes em Cachoeiro de Itapemirim
          </div>

          <h1 className="mt-5 font-display text-[2.1rem] font-semibold leading-[1.15] text-white sm:mt-6 sm:text-5xl lg:text-[3.3rem]">
            {words.map((word, i) => (
              <span
                key={i}
                className="hero-anim inline-block"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <p
            className="hero-anim mt-4 max-w-xl text-base leading-relaxed text-navy-100/80 sm:mt-6 sm:text-lg"
            style={{ animationDelay: '0.5s' }}
          >
            O Instituto Odontológico Dr. Pablo Santos une tecnologia de ponta, uma equipe humanizada e
            décadas de experiência para devolver sua confiança para sorrir. Agende sua avaliação hoje mesmo.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(IMPLANT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-anim inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-soft transition-transform active:scale-95 sm:w-auto sm:hover:scale-[1.03]"
              style={{ animationDelay: '0.6s' }}
            >
              <WhatsappLogo size={20} weight="fill" />
              Agendar avaliação pelo WhatsApp
            </a>
            <a
              href="#tratamentos"
              className="hero-anim inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition-colors active:bg-white/15 sm:w-auto sm:hover:bg-white/10"
              style={{ animationDelay: '0.68s' }}
            >
              Ver tratamentos
            </a>
          </div>

          <div
            className="hero-anim mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-4 sm:pt-7"
            style={{ animationDelay: '0.75s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">
                {GOOGLE_RATING} no Google · {GOOGLE_REVIEW_COUNT} avaliações
              </span>
            </div>
            <div className="text-sm text-navy-100/70">+20 anos de experiência do Dr. Pablo</div>
            <div className="text-sm text-navy-100/70">Tecnologia entre as mais avançadas da América Latina</div>
          </div>
        </div>

        <div
          className="hero-anim relative mx-auto w-full max-w-sm lg:mx-0"
          style={{ animationDelay: '0.35s' }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-500/20 to-navy-600/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-800/60 shadow-soft backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5]">
              <img
                src={doctorHero}
                alt="Dr. Pablo Santos de Oliveira, implantodontista"
                width={760}
                height={950}
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-display text-lg font-semibold text-white sm:text-xl">Dr. Pablo Santos de Oliveira</p>
                <p className="mt-1 text-sm text-navy-100/90">Doutor em Implantodontia · Mestre em Ortodontia</p>
                <p className="mt-0.5 text-xs text-gold-300">CRO-ES 005206</p>
              </div>
            </div>
            <p className="p-5 font-display text-base italic leading-snug text-white sm:p-7 sm:text-lg">
              "Nosso objetivo é trazer para você as tecnologias mais avançadas da odontologia."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
