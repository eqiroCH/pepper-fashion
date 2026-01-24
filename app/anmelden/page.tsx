'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AnmeldenPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Login logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <nav className="text-sm text-gray-500 font-light mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          </nav>
        </div>
        
        <div className="max-w-md mx-auto">
          <h1 className="heading-1 mb-12 text-center">Anmelden</h1>
          
          <div className="bg-fashion-cream/10 border border-gray-200/50 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">
                  Passwort
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600 font-light">
                  Merken
                </label>
              </div>

              <button type="submit" className="btn-primary w-full">
                Anmelden
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 space-y-3 text-center">
              <Link href="#passwort-vergessen" className="block text-sm text-gray-600 hover:text-primary transition-colors font-light">
                Passwort vergessen?
              </Link>
              <Link href="#benutzeraccount-erstellen" className="block text-sm text-gray-600 hover:text-primary transition-colors font-light">
                Benutzeraccount erstellen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


