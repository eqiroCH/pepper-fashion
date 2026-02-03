'use client'

import Link from 'next/link'

export default function InstagramPage() {
  return (
    <div className="section-padding bg-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 md:mb-10 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-3 md:mb-4">
              Folge uns auf Instagram
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-light max-w-2xl mx-auto mb-4 md:mb-6">
              Entdecke die neuesten Trends, Behind-the-Scenes und exklusive Einblicke in unsere Modewelt.
            </p>
            
          </div>

          {/* Elfsight Instagram Widget */}
          <div className="elfsight-app-da48961a-4999-4548-88a0-19b4bc717629" data-elfsight-app-lazy></div>

          {/* Back Link */}
          <div className="mt-8 md:mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary font-medium tracking-wide uppercase text-sm hover:gap-4 transition-all duration-300"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
