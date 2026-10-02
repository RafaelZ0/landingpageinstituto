import { useEffect, useState } from 'react'
import { List, WhatsappLogo, X } from '@phosphor-icons/react'
import Logo from './Logo'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/constants'

const LINKS = [
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#clinica', label: 'A Clínica' },
  { href: '#depoimentos', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/85 shadow-soft backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#topo" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-100/80 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-gold transition-transform hover:scale-105 sm:flex"
          >
            <WhatsappLogo size={17} weight="fill" />
            Agendar
          </a>
          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-900/95 px-5 py-5 backdrop-blur-lg lg:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-navy-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-white"
            >
              <WhatsappLogo size={18} weight="fill" />
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
