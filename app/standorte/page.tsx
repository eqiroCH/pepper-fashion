import { Suspense } from 'react'
import { LocationsGrid } from '@/components/LocationsGrid'

export const metadata = {
  title: 'Standorte – pepper-fashion',
  description: 'Besuchen Sie uns in Siebnen oder im Showroom in Horgen bei Salottino.',
}

export default function StandortePage() {
  return (
    <div className="section-padding bg-white min-h-[calc(100vh-200px)] pb-32 md:pb-48">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Standorte</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Besuchen Sie uns an unseren beiden Standorten
          </p>
        </div>
        <Suspense fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 md:p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 md:p-8 animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        }>
          <LocationsGrid />
        </Suspense>
        <div className="h-48 md:h-64"></div>
      </div>
    </div>
  )
}

