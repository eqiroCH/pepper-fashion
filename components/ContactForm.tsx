'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    nachname: '',
    firma: '',
    email: '',
    bemerkung: '',
    sicherheitscode: '',
  })

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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
        />
      </div>

      <div>
        <label htmlFor="nachname" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          Nachname
        </label>
        <input
          type="text"
          id="nachname"
          name="nachname"
          value={formData.nachname}
          onChange={handleChange}
          className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
        />
      </div>

      <div>
        <label htmlFor="firma" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          Firma
        </label>
        <input
          type="text"
          id="firma"
          name="firma"
          value={formData.firma}
          onChange={handleChange}
          className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
        />
      </div>

      <div>
        <label htmlFor="bemerkung" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          Bemerkung *
        </label>
        <textarea
          id="bemerkung"
          name="bemerkung"
          required
          rows={6}
          value={formData.bemerkung}
          onChange={handleChange}
          className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 resize-vertical font-light"
        />
      </div>

      <div>
        <label htmlFor="sicherheitscode" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
          Sicherheitscode
        </label>
        <p className="text-sm text-gray-600 mb-4 font-light">
          Geben Sie die Zahlen und Buchstaben aus dem unten angezeigten Bild ein.
        </p>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            id="sicherheitscode"
            name="sicherheitscode"
            value={formData.sicherheitscode}
            onChange={handleChange}
            className="px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
          />
          <div className="w-32 h-14 bg-fashion-cream/30 border border-gray-300 flex items-center justify-center">
            <span className="text-xs text-gray-400 font-light">Captcha</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-6">
        <button type="submit" className="btn-primary">
          Absenden
        </button>
        <button type="reset" className="btn-secondary">
          Zurücksetzen
        </button>
      </div>
    </form>
  )
}

