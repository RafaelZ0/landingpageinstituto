import { WhatsappLogo } from '@phosphor-icons/react'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-soft transition-transform hover:scale-105 sm:px-5"
    >
      <WhatsappLogo size={24} weight="fill" className="shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">Agendar avaliação</span>
    </a>
  )
}
