'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryCategory {
  id: string
  title: string
  images: {
    src: string
    alt: string
    thumbnail: string
  }[]
}

const galleryCategories: GalleryCategory[] = [
  {
    id: 'modeschau-2016-horgen',
    title: 'Modeschau 2016 Horgen',
    images: [
      {
        src: '/images/gallery/modeschau-1-thumb.jpg',
        alt: 'Modeschau 2016 Horgen',
        thumbnail: '/images/gallery/modeschau-1-thumb.jpg',
      },
    ],
  },
  {
    id: 'verkaufsgeschafte',
    title: 'Verkaufsgeschäfte',
    images: [
      {
        src: '/images/gallery/verkauf-1-thumb.jpg',
        alt: 'Verkaufsgeschäfte',
        thumbnail: '/images/gallery/verkauf-1-thumb.jpg',
      },
    ],
  },
  {
    id: 'mavi',
    title: 'MAVI',
    images: [
      {
        src: '/images/gallery/mavi-1-thumb.jpg',
        alt: 'MAVI',
        thumbnail: '/images/gallery/mavi-1-thumb.jpg',
      },
    ],
  },
  {
    id: 'only',
    title: 'ONLY',
    images: [
      {
        src: '/images/gallery/only-1-thumb.jpg',
        alt: 'ONLY',
        thumbnail: '/images/gallery/only-1-thumb.jpg',
      },
    ],
  },
  {
    id: 'cipo-baxx',
    title: 'Cipo & Baxx',
    images: [
      {
        src: '/images/gallery/cipo-baxx-1-thumb.jpg',
        alt: 'Cipo & Baxx',
        thumbnail: '/images/gallery/cipo-baxx-1-thumb.jpg',
      },
    ],
  },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {galleryCategories.map((category) => (
          <div
            key={category.id}
            className="group cursor-pointer"
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-fashion-cream/20 border border-gray-200/50 hover:border-primary/30 transition-all duration-300 mb-4">
              {category.images[0] ? (
                <Image
                  src={category.images[0].thumbnail || category.images[0].src}
                  alt={category.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{category.title}</span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-serif font-normal text-gray-900 group-hover:text-primary transition-colors duration-300">
              {category.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Schließen"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Category Detail View */}
      {selectedCategory && !selectedImage && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container-custom py-12">
            <div className="flex justify-between items-center mb-8">
              <h2 className="heading-2">
                {galleryCategories.find((c) => c.id === selectedCategory)?.title}
              </h2>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Zurück"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryCategories
                .find((c) => c.id === selectedCategory)
                ?.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.thumbnail || image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

