import fachada from '../assets/fachada.webp'
import recepcao from '../assets/recepcao.webp'
import consultorio from '../assets/consultorio.webp'
import ScrollReveal from './ScrollReveal'

const PHOTOS = [
  {
    src: fachada,
    alt: 'Fachada do Instituto Odontológico Dr. Pablo Santos em Cachoeiro de Itapemirim',
    label: 'Nossa fachada',
    width: 900,
    height: 1339,
    span: 'sm:row-span-2',
  },
  {
    src: recepcao,
    alt: 'Recepção climatizada e acolhedora do Instituto',
    label: 'Recepção',
    width: 720,
    height: 720,
    span: '',
  },
  {
    src: consultorio,
    alt: 'Consultório equipado onde o Dr. Pablo conversa com o paciente sobre o tratamento',
    label: 'Consultório',
    width: 720,
    height: 720,
    span: '',
  },
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
          className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-8 sm:grid sm:h-[560px] sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:h-[680px] lg:gap-6"
        >
          {PHOTOS.map((p) => (
            <figure
              key={p.label}
              data-card
              className={`scroll-reveal-item group relative aspect-[3/4] w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-navy-100 shadow-sm sm:aspect-auto sm:w-auto sm:max-w-none sm:shrink ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-3 left-4 text-sm font-semibold text-white">{p.label}</figcaption>
            </figure>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
