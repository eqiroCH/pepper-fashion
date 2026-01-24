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
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Kontaktinfos */}
            <aside className="bg-fashion-cream/10 border border-gray-200/50 p-8 md:p-10">
              <h2 className="heading-3 mb-6">Unsere Standorte</h2>
              
              {/* Standort Siebnen */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-3">Pepper Fashion Siebnen</h3>
                <div className="space-y-1 text-sm text-gray-600 font-light">
                  <p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+1,+8854+Siebnen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Bahnhofstrasse 1
                    </a>
                  </p>
                  <p>8854 Siebnen</p>
                  <p>
                    <a href="tel:+41555258888" className="hover:text-primary transition-colors">
                      +41 55 525 88 88
                    </a>
                  </p>
                  <p>
                    <a href="mailto:siebnen@pepper-fashion.ch" className="hover:text-primary transition-colors">
                      siebnen@pepper-fashion.ch
                    </a>
                  </p>
                  <div className="pt-2 text-xs text-gray-500">
                    <p>Montag geschlossen</p>
                    <p>DI-FR: 9-12 | 14-18 Uhr</p>
                    <p>SA: 9-16 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Showroom Horgen */}
              <div className="pt-6 border-t border-gray-200/60">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-3">Showroom Horgen</h3>
                <div className="space-y-1 text-sm text-gray-600 font-light">
                  <p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Seestrasse+159,+8810+Horgen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      Seestrasse 159
                    </a>
                  </p>
                  <p>8810 Horgen</p>
                  <p>
                    <a href="tel:+41795760922" className="hover:text-primary transition-colors">
                      +41 79 576 09 22
                    </a>
                  </p>
                  <div className="pt-2 text-xs text-gray-500">
                    <p className="italic text-gray-400">Öffnungszeiten folgen</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 mt-6 border-t border-gray-200/60">
                <h3 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">Folgen Sie uns</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/pepper_fashion_gmbh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/pepperfashiongmbh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>

            {/* Formular (schmaler) */}
            <div className="bg-fashion-cream/10 border border-gray-200/50 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h3l2 5-2 1c1.2 2.4 3.1 4.3 5.5 5.5l1-2 5 2v3c0 1.1-.9 2-2 2C10.1 20 4 13.9 4 6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M4.5 7.5l7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 !text-primary" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32C100.2 32-.2 132.4 0 256.1c.1 39.5 10.5 78 30.2 112.1L0 480l114.9-30.2c33.5 18.3 71.3 27.9 109.1 27.9h.1c123.7 0 224.1-100.4 224.1-224.1c0-59.3-23.1-115-65.1-156.5zM224 438.7h-.1c-33.5 0-66.2-9-94.3-26.1l-6.8-4.1l-68.2 17.9l18.2-66.5l-4.4-6.9C49.7 324.7 39.8 290.8 39.7 256C39.5 154 122.7 70.7 224 70.7c49.2 0 95.4 19.2 130.2 54s54 81 54 130.2c0 101.9-83 184.9-184.2 184.9zm101.7-138.4c-5.6-2.8-33.1-16.3-38.2-18.2c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.4 18.2-17.6 21.9c-3.2 3.7-6.5 4.2-12.1 1.4c-5.6-2.8-23.7-8.7-45.1-27.8c-16.7-14.9-28-33.3-31.3-38.9c-3.2-5.6-.3-8.6 2.4-11.4c2.5-2.5 5.6-6.5 8.4-9.8c2.8-3.2 3.7-5.6 5.6-9.3c1.9-3.7.9-7-0.5-9.8c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.9-9-9.4-12.5-9.6c-3.2-.2-7-.2-10.7-.2c-3.7 0-9.8 1.4-14.9 7c-5.1 5.6-19.5 19.1-19.5 46.5c0 27.4 20 53.9 22.8 57.6c2.8 3.7 39.4 60.2 95.4 84.5c13.3 5.7 23.7 9.2 31.8 11.8c13.4 4.3 25.6 3.7 35.2 2.2c10.7-1.6 33.1-13.5 37.7-26.5c4.6-13 4.6-24.2 3.2-26.5c-1.4-2.3-5.1-3.7-10.7-6.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

