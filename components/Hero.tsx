'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  { src: '/images/siebnen/siebnen-01.jpeg', alt: 'Boutique Pepper Fashion Siebnen – Herbstmode auf dem Tisch' },
  { src: '/images/siebnen/siebnen-07.jpeg', alt: 'Boutique Pepper Fashion Siebnen – Accessoires und Tücher' },
  { src: '/images/siebnen/siebnen-15.jpeg', alt: 'Boutique Pepper Fashion Siebnen – Verkaufsraum' },
  { src: '/images/siebnen/siebnen-17.jpeg', alt: 'Boutique Pepper Fashion Siebnen – Sommerfarben' },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Soft fade at the bottom - white fading into the image */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50%]" style={{ background: 'linear-gradient(to top, white 0%, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.3) 60%, rgba(255,255,255,0.1) 80%, transparent 100%)' }} />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-full"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


      {/* Dunkler Verlauf oben, damit Logo und Menü auf dem Foto lesbar bleiben */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
    </section>
  )
}

