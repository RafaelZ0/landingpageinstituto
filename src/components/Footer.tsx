import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import Logo from './Logo'
import {
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  CRO,
  EPAO,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
} from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10 text-navy-200 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-navy-300">
              Referência em implantes dentários e odontologia de alta tecnologia em Cachoeiro de Itapemirim - ES.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Instituto"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gold-500/20 hover:text-gold-300"
              >
                <InstagramLogo size={18} weight="light" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Instituto"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-gold-500/20 hover:text-gold-300"
              >
                <FacebookLogo size={18} weight="light" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm sm:flex sm:gap-16">
            <div>
              <p className="font-semibold text-white">Contato</p>
              <p className="mt-3 text-navy-300">{ADDRESS_LINE1}</p>
              <p className="text-navy-300">{ADDRESS_LINE2}</p>
              <p className="mt-3 text-navy-300">Tel: {PHONE_DISPLAY}</p>
              <p className="text-navy-300">WhatsApp: {WHATSAPP_DISPLAY}</p>
            </div>
            <div>
              <p className="font-semibold text-white">Navegação</p>
              <ul className="mt-3 space-y-2 text-navy-300">
                <li><a href="#tratamentos" className="hover:text-gold-300">Tratamentos</a></li>
                <li><a href="#diferenciais" className="hover:text-gold-300">Diferenciais</a></li>
                <li><a href="#clinica" className="hover:text-gold-300">A Clínica</a></li>
                <li><a href="#depoimentos" className="hover:text-gold-300">Avaliações</a></li>
                <li><a href="#localizacao" className="hover:text-gold-300">Localização</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Dr. Pablo Santos de Oliveira · {CRO} · {EPAO}</p>
          <p>© {new Date().getFullYear()} Instituto Odontológico Dr. Pablo Santos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
