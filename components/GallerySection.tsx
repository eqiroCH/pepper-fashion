'use client'

import { useState } from 'react'

interface GalleryItem {
  id: string
  title: string
  category: 'events' | 'boutique' | 'collections'
  year?: string
  aspectRatio: 'portrait' | 'landscape' | 'square'
  gradient: string
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Modeschau Horgen 2024',
    category: 'events',
    year: '2024',
    aspectRatio: 'portrait',
    gradient: 'from-rose-900 via-rose-800 to-rose-950',
  },
  {
    id: '2',
    title: 'Boutique Siebnen',
    category: 'boutique',
    aspectRatio: 'landscape',
    gradient: 'from-amber-900 via-amber-800 to-amber-950',
  },
  {
    id: '3',
    title: 'Frühjahr/Sommer Kollektion',
    category: 'collections',
    year: '2024',
    aspectRatio: 'square',
    gradient: 'from-sky-900 via-sky-800 to-sky-950',
  },
  {
    id: '4',
    title: 'Fashion Opening Apéro',
    category: 'events',
    year: '2023',
    aspectRatio: 'landscape',
    gradient: 'from-violet-900 via-violet-800 to-violet-950',
  },
  {
    id: '5',
    title: 'Showroom Horgen',
    category: 'boutique',
    aspectRatio: 'portrait',
    gradient: 'from-emerald-900 via-emerald-800 to-emerald-950',
  },
  {
    id: '6',
    title: 'Herbst/Winter Kollektion',
    category: 'collections',
    year: '2024',
    aspectRatio: 'square',
    gradient: 'from-slate-800 via-slate-700 to-slate-900',
  },
  {
    id: '7',
    title: 'Modetage März 2025',
    category: 'events',
    year: '2025',
    aspectRatio: 'landscape',
    gradient: 'from-pink-900 via-pink-800 to-pink-950',
  },
  {
    id: '8',
    title: 'Little Italy Fashion',
    category: 'events',
    year: '2023',
    aspectRatio: 'portrait',
    gradient: 'from-orange-900 via-orange-800 to-orange-950',
  },
  {
    id: '9',
    title: 'Accessoires & Details',
    category: 'collections',
    aspectRatio: 'square',
    gradient: 'from-teal-900 via-teal-800 to-teal-950',
  },
]

const categories = [
  { id: 'all', label: 'Alle' },
  { id: 'events', label: 'Events' },
  { id: 'boutique', label: 'Boutique' },
  { id: 'collections', label: 'Kollektionen' },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const getAspectClass = (ratio: string) => {
    switch (ratio) {
      case 'portrait': return 'aspect-[3/4]'
      case 'landscape': return 'aspect-[4/3]'
      case 'square': return 'aspect-square'
      default: return 'aspect-square'
    }
  }

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'events': return 'Events'
      case 'boutique': return 'Boutique'
      case 'collections': return 'Kollektion'
      default: return cat
    }
  }

  return (
    <>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/40 hover:text-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry-Style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="break-inside-avoid"
            style={{
              opacity: 0,
              animation: `fadeInUp 0.6s ease forwards`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div
              className={`relative ${getAspectClass(item.aspectRatio)} overflow-hidden rounded-2xl cursor-pointer group`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setSelectedItem(item)}
            >
              {/* Gradient Background with Pattern */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`pattern-${item.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#pattern-${item.id})`} />
                  </svg>
                </div>
                
                {/* Diagonal Lines */}
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                  }}
                />
              </div>

              {/* Fashion Icon Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="text-white/20 transition-all duration-500"
                  style={{
                    transform: hoveredItem === item.id ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                  }}
                >
                  {item.category === 'events' && (
                    <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  )}
                  {item.category === 'boutique' && (
                    <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                  )}
                  {item.category === 'collections' && (
                    <svg className="w-20 h-20 md:w-24 md:h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6"
                style={{
                  opacity: hoveredItem === item.id ? 1 : 0.9,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {/* Category Tag */}
                <span className="inline-flex self-start items-center px-3 py-1 rounded-full text-[10px] tracking-wider uppercase bg-white/20 text-white/90 font-medium backdrop-blur-sm mb-3">
                  {getCategoryLabel(item.category)}
                </span>
                
                {/* Title */}
                <h3 
                  className="text-lg md:text-xl font-display text-white leading-tight"
                  style={{
                    transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(4px)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  {item.title}
                </h3>
                
                {/* Year */}
                {item.year && (
                  <span className="text-white/60 text-sm font-light mt-1">{item.year}</span>
                )}

                {/* View Button */}
                <div 
                  className="mt-4 flex items-center gap-2 text-white/80 text-xs uppercase tracking-wider font-medium"
                  style={{
                    opacity: hoveredItem === item.id ? 1 : 0,
                    transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span>Ansehen</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 border-white/0 transition-all duration-300"
                style={{
                  borderColor: hoveredItem === item.id ? 'rgba(255,255,255,0.3)' : 'transparent',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${selectedItem.gradient}`}>
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="modal-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="5" cy="5" r="0.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#modal-pattern)" />
                </svg>
              </div>

              <div className="relative aspect-[16/10] flex items-center justify-center p-8 md:p-16">
                {/* Large Icon */}
                <div className="text-white/15">
                  {selectedItem.category === 'events' && (
                    <svg className="w-32 h-32 md:w-48 md:h-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  )}
                  {selectedItem.category === 'boutique' && (
                    <svg className="w-32 h-32 md:w-48 md:h-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                  )}
                  {selectedItem.category === 'collections' && (
                    <svg className="w-32 h-32 md:w-48 md:h-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  )}
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs tracking-wider uppercase bg-white/20 text-white font-medium backdrop-blur-sm mb-4">
                    {getCategoryLabel(selectedItem.category)}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-display text-white mb-2">
                    {selectedItem.title}
                  </h2>
                  {selectedItem.year && (
                    <span className="text-white/70 text-lg font-light">{selectedItem.year}</span>
                  )}
                  <p className="text-white/60 text-sm md:text-base font-light mt-4 max-w-xl">
                    Bilder folgen in Kürze. Entdecken Sie bald unsere Impressionen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
