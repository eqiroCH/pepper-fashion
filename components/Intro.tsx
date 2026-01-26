import Image from 'next/image'

export function Intro() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Header with Logo */}
        <div className="mb-16 text-center">
          <div className="relative w-96 md:w-[500px] h-40 md:h-52 mx-auto mb-8">
            <Image
              src="/PepperLogoNew.png"
              alt="Pepper Fashion - Siebnen & Horgen"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 384px, 500px"
              priority
            />
          </div>
          <h1 className="sr-only">pepper-fashion</h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
              Mode, die zu Ihnen passt – persönlich beraten, stilvoll kombiniert.
            </p>
            
            <div className="flex justify-center">
              <div className="w-16 h-px bg-primary/40" />
            </div>
            
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 font-light">
              Gemeinsam holen wir das Beste aus Ihrer Garderobe heraus und ergänzen sie mit
              ausgewählten Kleidern, Schuhen und Accessoires unserer Modelabels.
            </p>
            
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 font-light">
              In entspannter Atmosphäre – gerne mit Kaffee oder einem Glas Prosecco.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

