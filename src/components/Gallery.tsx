import { Armchair, Buildings, DoorOpen, type Icon } from '@phosphor-icons/react'
import PhotoPlaceholder from './PhotoPlaceholder'
import ScrollReveal from './ScrollReveal'

const SPOTS: { label: string; icon: Icon }[] = [
  { label: 'Fachada do Instituto', icon: Buildings },
  { label: 'Recepção', icon: DoorOpen },
  { label: 'Sala de atendimento', icon: Armchair },
]

export default function Gallery() {
  return (
    <section id="clinica" className="bg-navy-50/50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Conheça o Instituto</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Um ambiente pensado para o seu conforto
          </h2>
          <p className="mt-4 leading-relaxed text-navy-600">
            Estrutura climatizada, moderna e organizada em Cachoeiro de Itapemirim, do momento em que você
            chega até o final do seu tratamento.
          </p>
        </ScrollReveal>

        <p className="mt-3 text-xs text-navy-400 sm:hidden">Deslize para o lado →</p>

        <ScrollReveal
          stagger="[data-card]"
          className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {SPOTS.map((s) => (
            <div key={s.label} data-card className="scroll-reveal-item w-[72vw] max-w-[280px] shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink">
              <PhotoPlaceholder label={s.label} hint="Envie uma foto profissional para substituir este espaço" className="aspect-[4/3] w-full" />
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
