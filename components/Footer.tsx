export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 md:mt-20">
      <div className="border-t border-gray-800">
        <div className="container-custom py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3">
            <div className="flex items-center gap-2 md:gap-3">
              <a href="/" aria-label="Zur Startseite" className="block shrink-0">
                <img
                  src="/PepperLogoNew.png"
                  alt="Pepper Fashion Logo"
                  className="h-5 md:h-7 w-auto"
                />
              </a>
              <p className="text-[10px] md:text-sm text-gray-400 font-light">
                &copy; 2026 pepper-fashion GmbH
              </p>
            </div>
            <nav aria-label="Footer Links">
              <ul className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-1 md:gap-y-2">
                {[
                  { name: 'Kontakt', href: '/kontakt' },
                  { name: 'Datenschutz', href: '/datenschutz' },
                  { name: 'Impressum', href: '/impressum' },
                  { name: 'Anmelden', href: '/anmelden' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[10px] md:text-sm text-gray-300 hover:text-primary transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

