'use client'

import Link from 'next/link'

export function InstagramSection() {
  return (
    <section className="bg-fashion-beige/50 section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-normal tracking-tight text-gray-900 text-center mb-4 md:mb-6">
            Folge uns auf Instagram
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-light max-w-2xl mx-auto text-center">
            Entdecke die neuesten Trends, Behind-the-Scenes und exklusive Einblicke in unsere Modewelt.
          </p>
        </div>
        
        {/* Instagram Link */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-4 md:w-8 h-px bg-primary" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-primary font-medium">
              @pepper_fashion_gmbh
            </span>
          </div>
          <Link 
            href="/instagram" 
            className="inline-flex items-center gap-1 md:gap-2 text-primary font-medium tracking-wide uppercase text-[10px] md:text-sm hover:gap-4 transition-all duration-300"
          >
            Mehr ansehen
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Elfsight Instagram Widget */}
        <div className="elfsight-app-da48961a-4999-4548-88a0-19b4bc717629" data-elfsight-app-lazy></div>
      </div>
    </section>
  )
}
