import { HandHeart, HeartStraight, Medal, Stethoscope, UsersThree, WhatsappLogo, type Icon } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'

const TEAM: { icon: Icon; title: string; text: string }[] = [
  {
    icon: HandHeart,
    title: 'Recepção acolhedora',
    text: 'Simpatia e atenção desde a chegada — um dos pontos mais elogiados pelos pacientes.',
  },
  {
    icon: WhatsappLogo,
    title: 'Atendimento no WhatsApp',
    text: 'Dúvidas esclarecidas com clareza e paciência, do primeiro contato ao agendamento.',
  },
  {
    icon: Stethoscope,
    title: 'Dentistas especialistas',
    text: 'Profissionais que explicam cada etapa do tratamento e transmitem segurança.',
  },
  {
    icon: UsersThree,
    title: 'Auxiliares dedicadas',
    text: 'Apoio atencioso durante todo o atendimento, para você se sentir tranquilo na cadeira.',
  },
  {
    icon: Medal,
    title: 'Protéticos especializados',
    text: 'Próteses de alta precisão, com trabalho impecável e acabamento cuidadoso.',
  },
  {
    icon: HeartStraight,
    title: 'Acompanhamento pós-cirúrgico',
    text: 'Orientação e contato próximo depois do procedimento, para saber como você está.',
  },
]

export default function Team() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-gold-500">Quem vai te receber</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Uma equipe que os pacientes fazem questão de elogiar
          </h2>
          <p className="mt-4 leading-relaxed text-navy-600">
            Cuidado humanizado em cada etapa — é o que mais aparece, com carinho, nas avaliações reais dos
            nossos pacientes no Google.
          </p>
        </ScrollReveal>

        <ScrollReveal
          stagger="[data-card]"
          className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {TEAM.map((item) => (
            <div
              key={item.title}
              data-card
              className="scroll-reveal-item group flex items-start gap-4 rounded-2xl border border-navy-200 bg-navy-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft sm:p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300">
                <item.icon size={22} weight="light" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-navy-900 sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-600">{item.text}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
