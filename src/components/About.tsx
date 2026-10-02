import { CheckCircle } from '@phosphor-icons/react'
import { CRO, EPAO } from '../lib/constants'
import doctorAbout from '../assets/doctor-about.webp'
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
        <ScrollReveal className="mx-auto w-full max-w-xs pr-4 lg:mx-0 lg:max-w-sm">
          <div className="relative isolate">
            <div className="absolute left-4 top-4 -z-10 h-full w-full rounded-[1.75rem] border border-gold-400/60" aria-hidden="true" />
            <img
              src={doctorAbout}
              alt="Dr. Pablo Santos de Oliveira, doutor em implantodontia e mestre em ortodontia"
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-soft"
            />
          </div>
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
