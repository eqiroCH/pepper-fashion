export const metadata = {
  title: 'Team – pepper-fashion',
  description: 'Lernen Sie das Team von pepper-fashion kennen.',
}

// Inhaberin - wird gross angezeigt
const inhaberin = {
  rolle: 'Inhaberin',
  beschreibung: 'Professional Farb-, Stil- und Image Beraterin',
  name: 'Laura Sanchez Porzi',
}

// Modeberaterinnen - werden nebeneinander angezeigt
const modeberaterinnen = [
  {
    rolle: 'Modeberaterin',
    beschreibung: 'Detailhandelsfachfrau, Lehrlingsausbildnerin',
    name: 'Laura Pirro',
  },
  {
    rolle: 'Modeberaterin',
    beschreibung: 'Modeberatung mit Herz und Erfahrung.',
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
        <div className="max-w-6xl mx-auto">
          <section id="team-pepper-fashion">
            {/* Alle 3 Teammitglieder nebeneinander */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Inhaberin */}
              <div className="relative bg-white border border-gray-200/60 rounded-2xl overflow-hidden">
                {/* Bild-Platzhalter */}
                <div className="aspect-[3/4] bg-fashion-cream/20 flex items-center justify-center">
                  <span className="text-sm text-gray-500 font-light tracking-wide">Bild folgt</span>
                </div>
                
                {/* Text-Overlay unten */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-white/90 backdrop-blur-sm">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center rounded-full px-3 py-1 bg-primary/10">
                      <span className="text-xs tracking-wider uppercase text-primary font-medium">
                        {inhaberin.rolle}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-display font-normal tracking-tight text-gray-900">
                      {inhaberin.name}
                    </h2>

                    <p className="text-sm leading-relaxed text-gray-600 font-light">
                      {inhaberin.beschreibung}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modeberaterinnen */}
              {modeberaterinnen.map((m) => (
                <div
                  key={m.name}
                  className="relative bg-white border border-gray-200/60 rounded-2xl overflow-hidden"
                >
                  {/* Bild-Platzhalter */}
                  <div className="aspect-[3/4] bg-fashion-cream/20 flex items-center justify-center">
                    <span className="text-sm text-gray-500 font-light tracking-wide">Bild folgt</span>
                  </div>
                  
                  {/* Text-Overlay unten */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-white/90 backdrop-blur-sm">
                    <div className="space-y-1.5">
                      <div className="inline-flex items-center rounded-full px-3 py-1 bg-primary/10">
                        <span className="text-xs tracking-wider uppercase text-primary font-medium">
                          {m.rolle}
                        </span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-display font-normal tracking-tight text-gray-900">
                        {m.name}
                      </h2>

                      <p className="text-sm leading-relaxed text-gray-600 font-light">
                        {m.beschreibung}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

