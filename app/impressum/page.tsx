import Link from 'next/link'

export const metadata = {
  title: 'Impressum – Pepper Fashion',
  description: 'Impressum von Pepper Fashion GmbH.',
}

export default function ImpressumPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-6 md:mb-12">
          <nav className="text-xs md:text-sm text-gray-500 font-light mb-4 md:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-1 md:mx-2">›</span>
            <span className="text-gray-700">Impressum</span>
          </nav>
        </div>

        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6 md:mb-12">Impressum</h1>

          <div className="space-y-6 md:space-y-10 text-body">
            <div>
              <h2 className="heading-2 mb-4">Unternehmen</h2>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium text-gray-900">Pepper Fashion GmbH</p>
                <p>Bahnhofstrasse 1</p>
                <p>CH-8854 Siebnen</p>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-4">Kontakt</h2>
              <div className="space-y-1 text-gray-700">
                <p>
                  Telefon:{' '}
                  <a href="tel:+41555258888" className="hover:text-primary transition-colors">
                    +41 55 525 88 88
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:info@pepperfashion.ch" className="hover:text-primary transition-colors">
                    info@pepperfashion.ch
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-2 mb-4">Inhaberin</h2>
              <p className="text-gray-700">Laura Sanchez Porzi</p>
            </div>

            <div>
              <h2 className="heading-2 mb-4">UID</h2>
              <p className="text-gray-700">CHE-148.484.855</p>
            </div>

            <div>
              <h2 className="heading-2 mb-4">Gewährleistung</h2>
              <p className="leading-relaxed">
                Wir bemühen uns um möglichst korrekte und aktuelle Information. Die Inhalte wurden sorgfältig
                erarbeitet. Trotzdem können Fehler auftreten. Autoren und Herausgeber übernehmen keine Gewähr
                und Haftung für die Richtigkeit, Zuverlässigkeit, Vollständigkeit und Aktualität der Information.
                Die Verwendung der Website und der darin enthaltenen Informationen erfolgt auf eigene Gefahr.
                Änderungen können jederzeit vorgenommen werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
