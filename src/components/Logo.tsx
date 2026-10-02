import iconLight from '../assets/logo-icon-light.png'

/** Real brand symbol + a legible typographic wordmark (the script lettering of the
 *  full logo gets unreadable at header size, so the full logo lives in the footer). */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={iconLight} alt="" width={240} height={379} className="h-10 w-auto sm:h-11" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold italic tracking-tight text-white sm:text-2xl">
          Dr. Pablo Santos
        </span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold-300">
          Instituto Odontológico
        </span>
      </div>
    </div>
  )
}
