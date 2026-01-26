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
    <div className="section-padding bg-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="mb-4 md:mb-6 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-3">Unser Team</h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Unser Team in Siebnen hat grosse Erfahrung und nimmt sich genügend Zeit um Sie zu beraten.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <section id="team-pepper-fashion">
            {/* Alle 3 Teammitglieder - 2 pro Reihe auf Mobile, 3 auf Desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
              {/* Inhaberin */}
              <div className="relative bg-white border border-gray-200/60 rounded-lg md:rounded-2xl overflow-hidden">
                {/* Bild-Platzhalter */}
                <div className="aspect-[3/4] bg-fashion-cream/20 flex items-center justify-center">
                  <span className="text-[8px] md:text-sm text-gray-500 font-light tracking-wide">Bild folgt</span>
                </div>
                
                {/* Text-Overlay unten */}
                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-5 bg-white/90 backdrop-blur-sm">
                  <div className="space-y-0.5 md:space-y-1.5">
                    <div className="inline-flex items-center rounded-full px-1.5 py-0.5 md:px-3 md:py-1 bg-primary/10">
                      <span className="text-[7px] md:text-xs tracking-wider uppercase text-primary font-medium">
                        {inhaberin.rolle}
                      </span>
                    </div>

                    <h2 className="text-[10px] md:text-xl lg:text-2xl font-display font-normal tracking-tight text-gray-900 leading-tight">
                      {inhaberin.name}
                    </h2>

                    <p className="text-[8px] md:text-sm leading-tight md:leading-relaxed text-gray-600 font-light hidden md:block">
                      {inhaberin.beschreibung}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modeberaterinnen */}
              {modeberaterinnen.map((m) => (
                <div
                  key={m.name}
                  className="relative bg-white border border-gray-200/60 rounded-lg md:rounded-2xl overflow-hidden"
                >
                  {/* Bild-Platzhalter */}
                  <div className="aspect-[3/4] bg-fashion-cream/20 flex items-center justify-center">
                    <span className="text-[8px] md:text-sm text-gray-500 font-light tracking-wide">Bild folgt</span>
                  </div>
                  
                  {/* Text-Overlay unten */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-5 bg-white/90 backdrop-blur-sm">
                    <div className="space-y-0.5 md:space-y-1.5">
                      <div className="inline-flex items-center rounded-full px-1.5 py-0.5 md:px-3 md:py-1 bg-primary/10">
                        <span className="text-[7px] md:text-xs tracking-wider uppercase text-primary font-medium">
                          {m.rolle}
                        </span>
                      </div>

                      <h2 className="text-[10px] md:text-xl lg:text-2xl font-display font-normal tracking-tight text-gray-900 leading-tight">
                        {m.name}
                      </h2>

                      <p className="text-[8px] md:text-sm leading-tight md:leading-relaxed text-gray-600 font-light hidden md:block">
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

