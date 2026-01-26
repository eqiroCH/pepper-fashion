'use client'

import { useState } from 'react'

export function ContactFormMobile() {
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
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label htmlFor="name-mobile" className="block text-[10px] font-light text-gray-700 mb-0.5">
          Name *
        </label>
        <input
          type="text"
          id="name-mobile"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-xs"
        />
      </div>

      <div>
        <label htmlFor="firma-mobile" className="block text-[10px] font-light text-gray-700 mb-0.5">
          Firma (optional)
        </label>
        <input
          type="text"
          id="firma-mobile"
          name="firma"
          value={formData.firma}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-xs"
        />
      </div>

      <div>
        <label htmlFor="email-mobile" className="block text-[10px] font-light text-gray-700 mb-0.5">
          E-Mail *
        </label>
        <input
          type="email"
          id="email-mobile"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-xs"
        />
      </div>

      <div>
        <label htmlFor="bemerkung-mobile" className="block text-[10px] font-light text-gray-700 mb-0.5">
          Bemerkung *
        </label>
        <textarea
          id="bemerkung-mobile"
          name="bemerkung"
          required
          rows={2}
          value={formData.bemerkung}
          onChange={handleChange}
          className="w-full px-2 py-1.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-vertical font-light text-xs"
        />
      </div>

      <div className="flex gap-4 pt-1">
        <button type="submit" className="btn-primary w-full text-xs py-1.5">
          Absenden
        </button>
      </div>
    </form>
  )
}

