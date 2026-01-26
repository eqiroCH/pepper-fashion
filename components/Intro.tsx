import Image from 'next/image'

export function Intro() {
  return (
    <section className="pt-8 md:section-padding bg-white relative -mt-32 md:mt-0">
      {/* Gradient Overlay am oberen Rand für Mobile */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/80 to-white z-0 md:hidden" />
      
      <div className="container-custom relative z-10">
        {/* Header with Logo */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="relative w-96 md:w-[500px] h-40 md:h-52 mx-auto mb-8 z-10">
            <Image
              src="/PepperLogoNew.png"
              alt="Pepper Fashion - Siebnen & Horgen"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 384px, 500px"
              priority
            />
          </div>
          <h1 className="sr-only">pepper-fashion</h1>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            {/* Mobile: Kürzerer Text */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light md:hidden">
              Mode, die zu Ihnen passt – persönlich beraten.
            </p>
            
            {/* Desktop: Vollständiger Text */}
            <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed text-gray-700 font-light hidden md:block">
              Mode, die zu Ihnen passt – persönlich beraten, stilvoll kombiniert.
            </p>
            
            <div className="flex justify-center">
              <div className="w-16 h-px bg-primary/40" />
            </div>
            
            {/* Mobile: Kürzerer Text */}
            <p className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed text-gray-600 font-light md:hidden">
              Wir ergänzen Ihre Garderobe mit ausgewählten Kleidern und Accessoires.
            </p>
            
            {/* Desktop: Vollständiger Text */}
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 font-light hidden md:block">
              Gemeinsam holen wir das Beste aus Ihrer Garderobe heraus und ergänzen sie mit
              ausgewählten Kleidern, Schuhen und Accessoires unserer Modelabels.
            </p>
            
            {/* Mobile: Entfernt */}
            {/* Desktop: Vollständiger Text */}
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 font-light hidden md:block">
              In entspannter Atmosphäre – gerne mit Kaffee oder einem Glas Prosecco.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

