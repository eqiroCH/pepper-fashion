import { GallerySection } from '@/components/GallerySection'

export const metadata = {
  title: 'Bildergalerie – pepper-fashion',
  description: 'Bildergalerie von pepper-fashion mit Modeschauen, Verkaufsgeschäften und Modelabels.',
}

export default function BildergaleriePage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Bildergalerie</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Entdecken Sie unsere Modeschauen, Verkaufsgeschäfte und Modelabels
          </p>
        </div>
        <GallerySection />
      </div>
    </div>
  )
}





