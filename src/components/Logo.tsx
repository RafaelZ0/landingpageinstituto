interface Props {
  variant?: 'light' | 'dark'
  className?: string
}

export default function Logo({ variant = 'light', className = '' }: Props) {
  const isLight = variant === 'light'
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <span
        className={`font-display text-xl font-semibold italic tracking-tight sm:text-2xl ${
          isLight ? 'text-white' : 'text-navy-900'
        }`}
      >
        Dr. Pablo Santos
      </span>
      <span className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${isLight ? 'text-gold-300' : 'text-gold-500'}`}>
        Instituto Odontológico
      </span>
    </div>
  )
}
