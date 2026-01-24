import Link from 'next/link'

export const metadata = {
  title: 'Impressum – pepper-fashion',
  description: 'Impressum von pepper-fashion GmbH.',
}

export default function ImpressumPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <nav className="text-sm text-gray-500 font-light mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">Impressum</span>
          </nav>
        </div>
        
        <div className="max-w-4xl">
          <h1 className="heading-1 mb-12">Impressum</h1>
          
          <div className="space-y-8 text-body">
            <div>
              <p className="text-gray-700">
                Verantwortlich für Inhalt, Konzeption &amp; Realisierung des Onlineportals:
              </p>
              <div className="mt-6">
                <p className="font-medium text-gray-900">pepper-fashion gmbh</p>
                <p>Bahnhofstrasse 1</p>
                <p>8854 Siebnen</p>
                <p>Schweiz</p>
              </div>
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

