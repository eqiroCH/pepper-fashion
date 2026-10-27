import Link from 'next/link'

export function BackToHome({ align = 'center' }: { align?: 'center' | 'left' }) {
  return (
    <div className={`mt-8 md:mt-12 ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
      >
        <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
        Zurück zur Startseite
      </Link>
    </div>
  )
}
