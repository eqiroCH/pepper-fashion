import { LocationsGrid } from '@/components/LocationsGrid'

export const metadata = {
  title: 'Standorte – pepper-fashion',
  description: 'Besuchen Sie uns in Siebnen oder im Showroom in Horgen bei Salottino.',
}

export default function StandortePage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Standorte</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Besuchen Sie uns an unseren beiden Standorten
          </p>
        </div>
        <LocationsGrid />
      </div>
    </div>
  )
}

