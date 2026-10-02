import { WhatsappLogo } from '@phosphor-icons/react'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/constants'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-soft transition-transform active:scale-95 sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:px-5 sm:py-3.5 sm:hover:scale-105"
    >
      <WhatsappLogo size={26} weight="fill" className="shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">Agendar avaliação</span>
    </a>
  )
}
