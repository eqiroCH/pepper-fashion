'use client'

import { useState } from 'react'

export function ContactForm() {
  const initialFormData = {
    name: '',
    firma: '',
    email: '',
    bemerkung: '',
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs md:text-sm font-light text-gray-700 mb-1 md:mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-sm md:text-base"
        />
      </div>

      <div>
        <label htmlFor="firma" className="block text-xs md:text-sm font-light text-gray-700 mb-1 md:mb-2">
          Firma (optional)
        </label>
        <input
          type="text"
          id="firma"
          name="firma"
          value={formData.firma}
          onChange={handleChange}
          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-sm md:text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs md:text-sm font-light text-gray-700 mb-1 md:mb-2">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-sm md:text-base"
        />
      </div>

      <div>
        <label htmlFor="bemerkung" className="block text-xs md:text-sm font-light text-gray-700 mb-1 md:mb-2">
          Bemerkung *
        </label>
        <textarea
          id="bemerkung"
          name="bemerkung"
          required
          rows={3}
          value={formData.bemerkung}
          onChange={handleChange}
          className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-vertical font-light text-sm md:text-base md:rows-5"
        />
      </div>

      <div className="flex gap-4 pt-2 md:pt-4">
        <button type="submit" className="btn-primary w-full text-sm md:text-base py-2 md:py-3">
          Absenden
        </button>
      </div>
    </form>
  )
}

