import ScrollReveal from './ScrollReveal'

const TEAM = [
  { name: 'Graziele (Grazi)', role: 'Atendimento e recepção' },
  { name: 'Luana', role: 'Atendimento e recepção' },
  { name: 'Pâmela', role: 'Atendimento e recepção' },
  { name: 'Jaylane', role: 'Atendimento e recepção' },
  { name: 'Cindy', role: 'Orientação e suporte ao paciente' },
  { name: 'Letícia', role: 'Auxiliar odontológica' },
  { name: 'Dra. Ludimila', role: 'Odontologia' },
  { name: 'Lucyan e Rômulo', role: 'Protéticos' },
]

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => w.length > 2 || /^[A-ZÀ-Ú]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Team() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Quem vai te receber</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Uma equipe que os pacientes fazem questão de elogiar
          </h2>
          <p className="mt-4 leading-relaxed text-navy-600">
            Esses são alguns dos nomes que mais aparecem, com carinho, nas avaliações reais dos nossos
            pacientes no Google.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger="[data-card]" className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member) => (
            <div
              key={member.name}
              data-card
              className="scroll-reveal-item flex flex-col items-center gap-2.5 rounded-2xl border border-navy-200 bg-navy-50 px-3 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft sm:gap-3 sm:px-4 sm:py-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold-400/40 bg-navy-900 font-display text-base font-semibold text-gold-300 sm:h-14 sm:w-14 sm:text-lg">
                {initials(member.name)}
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">{member.name}</p>
                <p className="mt-0.5 text-xs text-navy-500">{member.role}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
