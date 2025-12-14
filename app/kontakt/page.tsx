import { ContactForm } from '@/components/ContactForm'

export const metadata = {
  title: 'Kontakt – pepper-fashion',
  description: 'Kontaktieren Sie pepper-fashion für Ihre Modeberatung.',
}

export default function KontaktPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="heading-1 mb-6">Kontakt</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-fashion-cream/10 border border-gray-200/50 p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

