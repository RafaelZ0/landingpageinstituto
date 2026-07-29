import { Clock, MapPin, Phone, WhatsappLogo } from '@phosphor-icons/react'
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  DEFAULT_WHATSAPP_MESSAGE,
  GOOGLE_MAPS_EMBED_SRC,
  GOOGLE_MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../lib/constants'
import ScrollReveal from './ScrollReveal'

export default function Location() {
  return (
    <section id="localizacao" className="bg-navy-50/50 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ScrollReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Onde estamos</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Fácil de chegar, fácil de agendar
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal stagger="[data-card]" className="flex flex-col gap-4 sm:gap-5">
            <div data-card className="scroll-reveal-item flex items-start gap-4 rounded-2xl border border-navy-200 bg-white p-5 shadow-sm sm:p-6">
              <MapPin size={22} weight="light" className="mt-0.5 shrink-0 text-gold-500" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Endereço</p>
                <p className="mt-1 text-sm text-navy-600">{ADDRESS_LINE1}</p>
                <p className="text-sm text-navy-600">{ADDRESS_LINE2}</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-navy-700 underline decoration-gold-400 decoration-2 underline-offset-4 hover:text-gold-600"
                >
                  Ver rotas no Google Maps →
                </a>
              </div>
            </div>

            <div data-card className="scroll-reveal-item flex items-start gap-4 rounded-2xl border border-navy-200 bg-white p-5 shadow-sm sm:p-6">
              <Clock size={22} weight="light" className="mt-0.5 shrink-0 text-gold-500" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Horário de funcionamento</p>
                <p className="mt-1 text-sm text-navy-600">Segunda a sexta: 08h às 18h</p>
                <p className="text-sm text-navy-600">Sábado: 08h às 12h</p>
              </div>
            </div>

            <div data-card className="scroll-reveal-item flex items-start gap-4 rounded-2xl border border-navy-200 bg-white p-5 shadow-sm sm:p-6">
              <Phone size={22} weight="light" className="mt-0.5 shrink-0 text-gold-500" />
              <div>
                <p className="text-sm font-semibold text-navy-900">Contato</p>
                <p className="mt-1 text-sm text-navy-600">Telefone: {PHONE_DISPLAY}</p>
                <p className="text-sm text-navy-600">WhatsApp: {WHATSAPP_DISPLAY}</p>
              </div>
            </div>

            <a
              data-card
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal-item flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              <WhatsappLogo size={19} weight="fill" />
              Agendar minha avaliação agora
            </a>
          </ScrollReveal>

          <ScrollReveal className="overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
            <iframe
              src={GOOGLE_MAPS_EMBED_SRC}
              title="Mapa do Instituto Odontológico Dr. Pablo Santos"
              className="h-full min-h-[280px] w-full border-0 sm:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
