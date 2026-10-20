import { LocationsGrid } from '@/components/LocationsGrid'

export const metadata = {
  title: 'Standorte – Pepper Fashion',
  description: 'Besuchen Sie uns in der Boutique Siebnen oder im Showroom in Horgen bei Salottino.',
}

export default function StandortePage() {
  return (
    <div className="section-padding bg-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="mb-6 md:mb-10 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-3">Standorte</h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Besuchen Sie uns an unseren beiden Standorten
          </p>
        </div>
        <LocationsGrid />
      </div>
    </div>
  )
}
