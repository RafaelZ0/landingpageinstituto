import { CheckCircle } from '@phosphor-icons/react'
import { CRO, EPAO } from '../lib/constants'
import PhotoPlaceholder from './PhotoPlaceholder'
import ScrollReveal from './ScrollReveal'

const CREDENTIALS = [
  'Graduação em Odontologia',
  'Doutor em Implantodontia',
  'Mestre em Ortodontia',
  '+20 anos dedicados à odontologia',
]

export default function About() {
  return (
    <section id="sobre" className="bg-white py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
        <ScrollReveal className="mx-auto w-full max-w-xs lg:mx-0">
          <PhotoPlaceholder
            label="Dr. Pablo Santos de Oliveira"
            hint="Adicione aqui uma foto profissional em alta resolução"
            className="aspect-[3/4] w-full"
          />
        </ScrollReveal>

        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Quem cuida do seu sorriso</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Dr. Pablo Santos de Oliveira
          </h2>
          <p className="mt-2 text-sm font-medium text-navy-400">
            {CRO} · {EPAO}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-navy-600">
            Há mais de 20 anos dedicado à odontologia, o Dr. Pablo fundou o Instituto Odontológico que leva seu
            nome com um objetivo claro: oferecer atendimento de primeira linha e trazer para Cachoeiro de
            Itapemirim as tecnologias mais avançadas da odontologia — com foco especial em implantes dentários,
            sua maior especialidade.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-navy-600">
            Ao lado de uma equipe multidisciplinar e de um dos parques tecnológicos mais avançados da América
            Latina, o Instituto já se tornou referência regional em atendimento odontológico humanizado e de
            alta complexidade.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-3">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-navy-700">
                <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-gold-500" />
                {c}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
