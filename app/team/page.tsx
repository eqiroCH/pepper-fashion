export const metadata = {
  title: 'Team – pepper-fashion',
  description: 'Lernen Sie das Team von pepper-fashion kennen.',
}

const teamMembers = [
  {
    rolle: 'Inhaberin',
    beschreibung: 'Professional Farb-, Stil- und Image Beraterin',
    name: 'Laura Sanchez Porzi',
  },
  {
    rolle: 'Modeberaterin',
    beschreibung: 'Detailhandelsfachfrau\nLehrlingsausbildnerin',
    name: 'Laura Pirro',
  },
  {
    rolle: 'Modeberaterin',
    beschreibung: '',
    name: 'Doris Moroni-Hüppin',
  },
]

export default function TeamPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Unser Team</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Unser Team in Siebnen hat grosse Erfahrung und nimmt sich genügend Zeit um Sie zu beraten.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <section id="team-pepper-fashion" className="space-y-5 md:space-y-6">
            {teamMembers.map((m) => (
              <div
                key={`${m.rolle}-${m.name}`}
                className="bg-white border border-gray-200/60 rounded-2xl p-5 md:p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-7 md:gap-8 items-start">
                  <div className="space-y-3">
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-fashion-cream/40 px-2.5 py-1">
                      <span className="text-[11px] tracking-[0.18em] uppercase text-gray-600 font-light">
                        {m.rolle}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-normal tracking-tight text-gray-900">
                      {m.name}
                    </h2>

                    {m.beschreibung ? (
                      <p className="text-sm leading-relaxed text-gray-600 font-light whitespace-pre-line">
                        {m.beschreibung}
                      </p>
                    ) : (
                      <p className="text-sm leading-relaxed text-gray-500 font-light">
                        Modeberatung mit Herz und Erfahrung.
                      </p>
                    )}
                  </div>

                  {/* Bild-Platzhalter (PNG folgt) */}
                  <div className="w-full">
                    <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-fashion-cream/20 flex items-center justify-center">
                      <span className="text-sm text-gray-500 font-light tracking-wide">Bild folgt</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

