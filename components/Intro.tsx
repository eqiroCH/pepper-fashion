import Image from 'next/image'

export function Intro() {
  return (
    <section className="section-padding bg-white relative z-10 -mt-16 md:-mt-24 pt-24 md:pt-28">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">pepper-fashion</h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light tracking-wide">
            Kompetente Modeberatung für Menschen mit Stil
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-8">
            <p className="text-lead">
              Entdecken Sie mit unserer Hilfe die Freude am bewussten Umgang mit Mode: 
              Kombinieren Sie aktuelle Farb- und Fashiontrends geschickt mit Ihrem individuellen Kleiderstil.
            </p>
            <p className="text-body">
              Wir zeigen Ihnen gerne, wie Sie Ihre bestehende Garderobe sinnvoll nutzen und 
              clever mit Kleidern, Schuhen und Accessoires unserer angesagten Modelabels ergänzen.
            </p>
            <p className="text-body">
              Ob Spontan-Einkauf oder ausgedehnte Shopping-Tour: boutique pepper-fashion ist eine 
              Wohlfühl-Oase, in der jeder Einkauf zu einem Erlebnis wird. Planen Sie genügend Zeit 
              für Ihren Einkauf ein und lassen Sie sich die neusten Modetrends in aller Ruhe bei 
              einem Glas Prosecco oder bei einer Tasse Kaffee zeigen.
            </p>
            <div className="pt-8 border-t border-gray-200">
              <p className="text-base text-gray-700 font-light">
                <strong className="text-primary font-normal">pepper-fashion</strong> – Kleider und Accessoires im Herzen von Siebnen und 
                Showroom in Horgen bei Salottino.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-fashion-cream/30 p-12 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="pepper-fashion Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
                <p className="text-xs text-gray-500 font-light tracking-wider uppercase">pepper-fashion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

