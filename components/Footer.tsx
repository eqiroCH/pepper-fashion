import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs text-white/60 font-light tracking-wider uppercase">
              &copy; 2025 loosli-design gmbh
            </p>
          </div>
          
          <div>
            <nav>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/kontakt" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="#rechtliche-hinweise" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    Rechtliche Hinweise
                  </Link>
                </li>
                <li>
                  <Link href="#inhaltsverzeichnis" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    Inhaltsverzeichnis
                  </Link>
                </li>
                <li>
                  <Link href="#impressum" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="#anmelden" className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide">
                    Anmelden
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-sm text-white/80 hover:text-white transition-colors duration-300 font-light tracking-wide"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

