'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Modelabel {
  name: string
  image: string
  alt: string
  url?: string
  scale?: number // Individuelle Skalierung für Logo-Grössen-Anpassung
}

const modelabels: Modelabel[] = [
  { name: 'NÜ DENMARK', image: '/images/modelabels/nu-denmark-logo.png', alt: 'NÜ DENMARK', url: 'https://www.nu-denmark.com' },
  { name: 'CIPO & BAXX', image: '/images/modelabels/cipo-paxx-2.png', alt: 'CIPO & BAXX', url: 'https://cipoandbaxx.com/', scale: 2.0 },
  { name: 'ONLY', image: '/images/modelabels/Only-logo.png', alt: 'ONLY', url: 'https://www.only.com' },
  { name: 'mavi', image: '/images/modelabels/Mavi_logo.svg.png', alt: 'mavi', url: 'https://www.mavi.com', scale: 0.75 },
  { name: 'BLUE MONKEY', image: '/images/modelabels/bluemonkey.png', alt: 'BLUE MONKEY JEANSWEAR', url: 'https://www.bluemonkey.de/' },
  { name: 'FUNKY STAFF', image: '/images/modelabels/image-removebg-preview.png', alt: 'FUNKY STAFF' },
  { name: 'Cream', image: '/images/modelabels/cache_17296346.jpg', alt: 'Cream', url: 'https://www.cream-clothing.com/' },
]

export function ModelabelsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const logoWidth = 300 + 80 // 300px width + 80px gap (gap-20 = 5rem = 80px)
    const singleSetWidth = modelabels.length * logoWidth
    let currentIndex = 0

    const scrollToNext = () => {
      currentIndex++
      const targetScroll = currentIndex * logoWidth

      // Prüfe, ob wir am Ende einer Reihe sind und springe nahtlos zur nächsten
      if (targetScroll >= singleSetWidth * 3) {
        // Am Ende der dritten Reihe: Springe nahtlos zurück zum Anfang
        container.scrollLeft = 0
        currentIndex = 0
      } else if (targetScroll >= singleSetWidth * 2) {
        // Am Ende der zweiten Reihe: Springe nahtlos zum Anfang der dritten
        container.scrollLeft = targetScroll - (singleSetWidth * 2)
      } else if (targetScroll >= singleSetWidth) {
        // Am Ende der ersten Reihe: Springe nahtlos zum Anfang der zweiten
        container.scrollLeft = targetScroll - singleSetWidth
      } else {
        // Normales smooth scrolling innerhalb einer Reihe
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        })
      }
    }

    // Starte das automatische Scrolling alle 2 Sekunden
    const interval = setInterval(scrollToNext, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  // Dupliziere die Logos für nahtloses Scrolling
  const duplicatedLabels = [...modelabels, ...modelabels, ...modelabels]

  return (
    <div className="relative overflow-hidden bg-fashion-cream/20 py-16">
      <div className="container-custom">
        <h2 className="heading-2 mb-12 text-center">Modelabels</h2>
        
        <div className="relative">
          {/* Fade-Effekte links und rechts */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-fashion-cream/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-fashion-cream/20 to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollContainerRef}
            className="flex gap-20 items-center overflow-x-hidden scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedLabels.map((label, index) => (
              <div
                key={`${label.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '300px', height: '160px', padding: '20px' }}
              >
                {label.url ? (
                  <a
                    href={label.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-full block cursor-pointer group"
                    onClick={(e) => {
                      // Verhindere, dass der Klick das Karussell stoppt
                      e.stopPropagation()
                    }}
                  >
                    <div 
                      className="relative w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100 group-hover:scale-105"
                      style={{ transform: label.scale ? `scale(${label.scale})` : undefined }}
                    >
                      <Image
                        src={label.image}
                        alt={label.alt}
                        fill
                        className="object-contain"
                        sizes="260px"
                        onError={(e) => {
                          // Fallback wenn Bild nicht existiert
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                    </div>
                  </a>
                ) : (
                  <div 
                    className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-105"
                    style={{ transform: label.scale ? `scale(${label.scale})` : undefined }}
                  >
                    <Image
                      src={label.image}
                      alt={label.alt}
                      fill
                      className="object-contain"
                      sizes="260px"
                      onError={(e) => {
                        // Fallback wenn Bild nicht existiert
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

