'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Intro() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section 
      className="pt-0 md:section-padding relative -mt-40 md:mt-0 md:overflow-hidden md:bg-white" 
      style={isMobile ? {
        background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.85) 50%, white 60%, white 100%)'
      } : undefined}
    >
      <div className="container-custom relative z-10">
        {/* Header with Logo - im Vordergrund, zentriert */}
        <div className="mb-8 md:mb-16 text-center -mt-20 md:mt-0">
          <div className="relative w-full max-w-[384px] md:w-[500px] h-40 md:h-52 mx-auto mb-6 md:mb-8 z-20 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/PepperLogoNew.png"
                alt="Pepper Fashion - Siebnen & Horgen"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 384px, 500px"
                priority
              />
            </div>
          </div>
          <h1 className="sr-only">pepper-fashion</h1>
        </div>

        {/* Content - nach oben geschoben */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8 text-center">
            {/* Mobile: Kürzerer Text - direkt nach oben */}
            <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 font-light md:hidden -mt-4">
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

