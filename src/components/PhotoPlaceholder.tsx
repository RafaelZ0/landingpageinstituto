import { Camera } from '@phosphor-icons/react'

interface Props {
  label: string
  hint?: string
  className?: string
  variant?: 'light' | 'dark'
}

export default function PhotoPlaceholder({ label, hint = 'Espaço reservado para foto', className = '', variant = 'light' }: Props) {
  const dark = variant === 'dark'
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 border-dashed px-6 py-14 text-center shadow-sm ${
        dark
          ? 'border-gold-400/40 bg-navy-800 text-navy-100'
          : 'border-gold-400/60 bg-white text-navy-500'
      } ${className}`}
    >
      <div className={`absolute inset-0 opacity-40 ${dark ? 'bg-mesh-navy' : ''}`} aria-hidden="true" />

      <span className="relative inline-flex items-center rounded-full bg-gold-500/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold-600">
        Foto pendente
      </span>

      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-full ${
          dark ? 'bg-white/10 text-gold-300' : 'bg-navy-900 text-gold-400'
        }`}
      >
        <Camera size={26} weight="fill" />
      </div>

      <div className="relative">
        <p className={`text-base font-bold ${dark ? 'text-white' : 'text-navy-900'}`}>{label}</p>
        <p className={`mt-1 text-xs ${dark ? 'text-navy-200' : 'text-navy-500'}`}>{hint}</p>
      </div>
    </div>
  )
}
