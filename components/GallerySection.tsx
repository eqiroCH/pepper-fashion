'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

type Category = 'siebnen' | 'horgen' | 'accessoires'

interface GalleryItem {
  src: string
  alt: string
  category: Category
  w: number
  h: number
}

const s = (n: string, alt: string, category: Category = 'siebnen', w = 1536, h = 2048): GalleryItem => ({
  src: `/images/siebnen/siebnen-${n}.jpeg`,
  alt,
  category,
  w,
  h,
})
const h = (n: string, alt: string, category: Category = 'horgen'): GalleryItem => ({
  src: `/images/horgen/horgen-${n}.jpeg`,
  alt,
  category,
  w: 1536,
  h: 2048,
})

const galleryItems: GalleryItem[] = [
  s('05', 'Boutique Siebnen – Verkaufsraum'),
  s('01', 'Boutique Siebnen – Herbstfarben auf dem Tisch', 'siebnen', 2000, 1500),
  h('02', 'Showroom Horgen – Wildlederjacke und Strohhut'),
  s('03', 'Boutique Siebnen – Outfits am Schaufenster'),
  s('17', 'Boutique Siebnen – Sommerfarben'),
  h('01', 'Showroom Horgen – Schmuck', 'accessoires'),
  s('07', 'Boutique Siebnen – Tücher und Accessoires', 'siebnen', 2048, 1366),
  s('04', 'Boutique Siebnen – Schaufensterpuppen'),
  s('15', 'Boutique Siebnen – Verkaufsraum mit Vespa'),
  h('03', 'Showroom Horgen – Tuch, Korbtasche und Sneaker', 'accessoires'),
  s('14', 'Boutique Siebnen – ONLY Kollektion'),
  s('06', 'Boutique Siebnen – Schmuck und Portemonnaies', 'accessoires'),
  s('09', 'Boutique Siebnen – Herbstkollektion', 'siebnen', 1152, 2048),
  s('16', 'Boutique Siebnen – Tischauslage'),
  h('04', 'Showroom Horgen – Kollektion'),
  s('12', 'Boutique Siebnen – Kleiderstange', 'siebnen', 1536, 2048),
  s('13', 'Boutique Siebnen – Grün und Khaki'),
  s('02', 'Boutique Siebnen – Auslage', 'siebnen', 2000, 1500),
  s('18', 'Boutique Siebnen – Kollektion'),
  s('21', 'Boutique Siebnen – Grüntöne'),
  s('11', 'Boutique Siebnen – Kleiderstange'),
  s('08', 'Boutique Siebnen – Neue Kollektion', 'siebnen', 1152, 2048),
]

const categories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'siebnen', label: 'Boutique Siebnen' },
  { id: 'horgen', label: 'Showroom Horgen' },
  { id: 'accessoires', label: 'Accessoires' },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Category>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filteredItems =
    selectedCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const close = useCallback(() => setActiveIndex(null), [])
  const step = useCallback(
    (dir: 1 | -1) =>
      setActiveIndex((i) => (i === null ? i : (i + dir + filteredItems.length) % filteredItems.length)),
    [filteredItems.length]
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIndex, close, step])

  const active = activeIndex !== null ? filteredItems[activeIndex] : null

  return (
    <>
      <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="columns-2 lg:columns-3 gap-2 md:gap-5">
        {filteredItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full mb-2 md:mb-5 overflow-hidden rounded-lg md:rounded-xl break-inside-avoid bg-fashion-beige"
            aria-label={`${item.alt} vergrössern`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 px-3 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-sm text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
        >
          <button onClick={close} className="absolute top-4 right-4 text-white/80 hover:text-white p-2" aria-label="Schliessen">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1) }}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2"
            aria-label="Nächstes Bild"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={active.src} alt={active.alt} fill className="object-contain" sizes="100vw" priority />
            <p className="absolute bottom-0 inset-x-0 text-center text-white/80 text-sm font-light py-2">{active.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
