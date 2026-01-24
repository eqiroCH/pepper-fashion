import { GallerySection } from '@/components/GallerySection'

export const metadata = {
  title: 'Bildergalerie – pepper-fashion',
  description: 'Bildergalerie von pepper-fashion mit Modeschauen, Boutique-Impressionen und Kollektionen.',
}

export default function BildergaleriePage() {
  return (
    <div className="section-padding bg-gradient-to-b from-fashion-cream/30 to-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <span className="text-xs tracking-widest uppercase text-primary font-medium">
              Impressionen
            </span>
            <div className="w-12 h-px bg-primary/40" />
          </div>
          <h1 className="heading-1 mb-6">Bildergalerie</h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Entdecken Sie unsere Events, Boutique-Eindrücke und die neuesten Kollektionen
          </p>
        </div>
        <GallerySection />
      </div>
    </div>
  )
}





