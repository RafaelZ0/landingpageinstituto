import { ClipboardText, Cpu, HandHeart, SealCheck, Snowflake, ShieldStar, Tooth, UsersThree, type Icon } from '@phosphor-icons/react'
import { GOOGLE_RATING } from '../lib/constants'
import ScrollReveal from './ScrollReveal'

const ITEMS: { icon: Icon; title: string; text: string; featured?: boolean }[] = [
  {
    icon: Tooth,
    title: 'Especialistas em implante dentário',
    text: 'Implantodontia é a nossa maior especialidade, liderada pelo Dr. Pablo, com mais de 20 anos de experiência.',
    featured: true,
  },
  {
    icon: Cpu,
    title: 'Tecnologia de ponta',
    text: 'Estrutura e equipamentos entre os mais avançados da América Latina, para diagnósticos precisos e tratamentos mais seguros.',
  },
  {
    icon: HandHeart,
    title: 'Atendimento humanizado',
    text: 'Do primeiro contato no WhatsApp até a recepção, cuidado e atenção em cada etapa — é o que mais elogiam sobre a gente.',
  },
  {
    icon: UsersThree,
    title: 'Equipe multidisciplinar',
    text: 'Implantodontia, ortodontia, prótese e clínica geral sob o mesmo teto, com profissionais dedicados a cada área.',
  },
  {
    icon: Snowflake,
    title: 'Ambiente climatizado e acolhedor',
    text: 'Uma clínica pensada para o seu conforto do início ao fim da consulta, sem pressa e sem desconforto.',
  },
  {
    icon: ShieldStar,
    title: 'Dedicação 100% ao paciente particular',
    text: 'Não trabalhamos com convênios ou SUS — isso nos permite dedicar tempo e atenção total a cada tratamento.',
  },
  {
    icon: ClipboardText,
    title: 'Planejamento 100% personalizado',
    text: 'Cada tratamento começa com uma avaliação detalhada, para um plano feito sob medida para o seu caso.',
  },
  {
    icon: SealCheck,
    title: 'Aprovação real dos pacientes',
    text: `Nota ${GOOGLE_RATING} no Google com mais de 200 avaliações — a prova de que nosso cuidado faz diferença.`,
  },
]

export default function Differentiators() {
  return (
    <section id="diferenciais" className="bg-navy-50/50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Por que o Instituto Dr. Pablo Santos</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Cuidado, tecnologia e experiência em um só lugar
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger="[data-card]" className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              data-card
              className={`scroll-reveal-item group rounded-2xl border p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-7 ${
                item.featured
                  ? 'col-span-2 border-navy-800 bg-navy-900 text-white'
                  : i === ITEMS.length - 1
                    ? 'col-span-2 border-navy-200 bg-white hover:border-gold-300 lg:col-span-1'
                    : 'col-span-1 border-navy-200 bg-white hover:border-gold-300'
              }`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl sm:h-11 sm:w-11 ${
                  item.featured ? 'bg-gold-500/15 text-gold-300' : 'bg-navy-100 text-navy-700 group-hover:bg-gold-50 group-hover:text-gold-500'
                } transition-colors`}
              >
                <item.icon size={20} weight="light" className="sm:hidden" />
                <item.icon size={22} weight="light" className="hidden sm:block" />
              </div>
              <h3 className={`mt-3 font-display text-base font-semibold sm:mt-5 sm:text-lg ${item.featured ? 'text-white' : 'text-navy-900'}`}>
                {item.title}
              </h3>
              <p className={`mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm ${item.featured ? 'text-navy-100/80' : 'text-navy-600'}`}>
                {item.text}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
