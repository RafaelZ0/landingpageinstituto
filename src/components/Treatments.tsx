import { Bandaids, Medal, PuzzlePiece, Smiley, Sparkle, Sun, Tooth, SprayBottle, WhatsappLogo, type Icon } from '@phosphor-icons/react'
import { IMPLANT_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/constants'
import ScrollReveal from './ScrollReveal'

const OTHER_TREATMENTS: { icon: Icon; title: string; text: string }[] = [
  {
    icon: Sparkle,
    title: 'Clareamento Dental',
    text: 'Intensifica o brilho do seu sorriso, seu cartão de visita, com máxima qualidade e segurança.',
  },
  {
    icon: SprayBottle,
    title: 'Limpeza Dental',
    text: 'Cuidado preventivo que remove placa e tártaro, protegendo a saúde da sua boca por completo.',
  },
  {
    icon: Smiley,
    title: 'Aparelho Ortodôntico',
    text: 'Corrige o alinhamento dental e facial, melhora a mastigação, a dicção e a beleza do sorriso.',
  },
  {
    icon: Sun,
    title: 'Lentes de Contato Dental',
    text: 'Cobrem imperfeições e deixam seu sorriso mais branco, brilhante e harmonioso rapidamente.',
  },
  {
    icon: PuzzlePiece,
    title: 'Restauração Dentária',
    text: 'Recupera dentes com cárie ou fraturados, devolvendo função, conforto e estética natural.',
  },
  {
    icon: Medal,
    title: 'Prótese Dentária',
    text: 'Reabilitação com próteses de alta precisão, feitas por protéticos especializados do Instituto.',
  },
  {
    icon: Bandaids,
    title: 'Extração Dentária',
    text: 'Procedimento seguro e cuidadoso, muitas vezes o primeiro passo antes de um implante de qualidade.',
  },
]

export default function Treatments() {
  return (
    <section id="tratamentos" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-gold-500">Tratamentos odontológicos</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Temos o cuidado certo para você
          </h2>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-card]"
          className="mt-8 flex flex-col gap-5 sm:mt-10 lg:grid lg:grid-cols-3 lg:gap-6"
        >
          <div
            data-card
            className="scroll-reveal-item relative overflow-hidden rounded-3xl bg-navy-900 p-6 text-white shadow-soft sm:p-8 lg:col-span-1 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-mesh-navy opacity-60" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-300">
                Nossa especialidade
              </span>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold-300 sm:mt-6">
                <Tooth size={26} weight="light" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold sm:mt-6">Implante Dentário</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-100/80">
                A reposição perfeita de um dente perdido por meio de um pino biocompatível que simula a raiz
                natural, renovando a mastigação, a saúde e a beleza do seu sorriso. Com anos de dedicação
                exclusiva à implantodontia, o Dr. Pablo é referência regional neste tratamento.
              </p>
              <a
                href={whatsappLink(IMPLANT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-transform active:scale-95 sm:mt-7 sm:w-auto sm:hover:scale-105"
              >
                <WhatsappLogo size={17} weight="fill" />
                Avaliar meu caso
              </a>
            </div>
          </div>

          <p className="-mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy-400 lg:hidden">
            Outros tratamentos <span className="font-normal normal-case tracking-normal">· deslize →</span>
          </p>

          {/* mobile: one swipe row · desktop: dissolves into the 3-column grid */}
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 lg:contents">
            {OTHER_TREATMENTS.map((t) => (
              <div
                key={t.title}
                data-card
                className="scroll-reveal-item group w-[72vw] max-w-[280px] shrink-0 snap-start rounded-2xl border border-navy-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft sm:p-6 lg:w-auto lg:max-w-none lg:shrink lg:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-100 text-navy-700 transition-colors group-hover:bg-gold-50 group-hover:text-gold-500">
                  <t.icon size={22} weight="light" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{t.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 text-center sm:mt-10">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-gold-600"
          >
            Não encontrou o que procura? Fale com a gente pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
