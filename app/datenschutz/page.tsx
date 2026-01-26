import Link from 'next/link'

export const metadata = {
  title: 'Datenschutz – pepper-fashion',
  description: 'Datenschutzhinweise von pepper-fashion GmbH.',
}

export default function DatenschutzPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-6 md:mb-12">
          <nav className="text-xs md:text-sm text-gray-500 font-light mb-4 md:mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-1 md:mx-2">›</span>
            <span className="text-gray-700">Datenschutz</span>
          </nav>
        </div>

        <div className="max-w-4xl">
          <h1 className="heading-1 mb-6 md:mb-12">Datenschutz</h1>

          <div className="space-y-6 md:space-y-10 text-body">
            <section className="space-y-4">
              <h2 className="heading-2">Allgemein</h2>
              <p className="leading-relaxed">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. In diesen Datenschutzhinweisen informieren wir Sie
                darüber, welche Daten beim Besuch dieser Website verarbeitet werden und zu welchem Zweck.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-2">Kontaktaufnahme</h2>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen übermittelten Angaben
                (z.&nbsp;B. Name, E-Mail-Adresse und Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Eine Weitergabe
                an Dritte erfolgt nicht, ausser dies ist zur Bearbeitung erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-2">Server-Logs</h2>
              <p className="leading-relaxed">
                Beim Besuch dieser Website können technische Daten (z.&nbsp;B. IP-Adresse, Datum/Zeit, aufgerufene Seiten,
                Browserinformationen) in Server-Logdateien verarbeitet werden. Dies dient dem sicheren Betrieb, der
                Fehleranalyse und der Missbrauchsprävention.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-2">Ihre Rechte</h2>
              <p className="leading-relaxed">
                Sie können Auskunft über die zu Ihrer Person gespeicherten Daten verlangen sowie deren Berichtigung oder
                Löschung beantragen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="heading-2">Kontakt</h2>
              <p className="leading-relaxed">
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte über die Kontaktseite.
              </p>
              <p>
                <Link href="/kontakt" className="text-primary hover:underline">
                  Zur Kontaktseite
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}




