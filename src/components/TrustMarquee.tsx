import { Star } from '@phosphor-icons/react'

const ITEMS = [
  '4,9 ★ no Google · 202 avaliações',
  '+20 anos de experiência do Dr. Pablo',
  'Tecnologia entre as mais avançadas da América Latina',
  'Especialistas em Implante Dentário',
  'Atendimento humanizado, do WhatsApp à recepção',
]

export default function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="overflow-hidden border-y border-navy-100 bg-navy-900 py-3.5">
      <div className="marquee-track flex w-max items-center gap-10">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-navy-100/80">
            <Star size={13} weight="fill" className="text-gold-400" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
