'use client'

import { BackToHome } from '@/components/BackToHome'

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

          <BackToHome />
        </div>
      </div>
    </div>
  )
}
