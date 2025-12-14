export const metadata = {
  title: 'Team – pepper-fashion',
  description: 'Lernen Sie das Team von pepper-fashion kennen.',
}

export default function TeamPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Team</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Lernen Sie unser Team kennen
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-fashion-cream/20 border border-gray-200/50 p-12 md:p-16">
            <h2 className="heading-2 mb-8 text-center md:text-left">Pepper Fashion</h2>
            <p className="text-body text-lg leading-relaxed">
              Unser Team steht Ihnen mit kompetenter Modeberatung zur Seite und hilft Ihnen dabei, 
              Ihren individuellen Stil zu finden und zu entwickeln.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

