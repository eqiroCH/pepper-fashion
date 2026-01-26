import { GallerySection } from '@/components/GallerySection'

export const metadata = {
  title: 'Bildergalerie – pepper-fashion',
  description: 'Bildergalerie von pepper-fashion mit Modeschauen, Boutique-Impressionen und Kollektionen.',
}

export default function BildergaleriePage() {
  return (
    <div className="section-padding bg-gradient-to-b from-fashion-cream/30 to-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="mb-4 md:mb-6 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-3">Bildergalerie</h1>
          <p className="text-xs md:text-lg lg:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Entdecken Sie unsere Events, Boutique-Eindrücke und die neuesten Kollektionen
          </p>
        </div>
        <GallerySection />
      </div>
    </div>
  )
}





