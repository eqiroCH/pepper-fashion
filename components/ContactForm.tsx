'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

const inputClass =
  'w-full px-3 md:px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300 font-light text-sm md:text-base bg-white'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function buildMessage(f: { name: string; firma: string; email: string; bemerkung: string }) {
  const lines = ['Neue Anfrage über pepperfashion.ch', '', `Name: ${f.name}`]
  if (f.firma.trim()) lines.push(`Firma: ${f.firma}`)
  lines.push(`E-Mail: ${f.email}`, '', f.bemerkung)
  return lines.join('\n')
}

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', firma: '', email: '', bemerkung: '', website: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const openEmail = () => {
    const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${encodeURIComponent(buildMessage(formData))}`
  }

  const openWhatsApp = () => {
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(buildMessage(formData))}`, '_blank', 'noopener,noreferrer')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', firma: '', email: '', bemerkung: '', website: '' })
        return
      }
      // Versand serverseitig nicht eingerichtet → E-Mail-Programm öffnen
      if ([404, 405, 503].includes(res.status)) {
        setStatus('idle')
        openEmail()
        return
      }
      setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="py-10 text-center" role="status">
        <h3 className="text-xl md:text-2xl font-display text-gray-900 mb-2">Vielen Dank!</h3>
        <p className="text-sm md:text-base text-gray-600 font-light">
          Ihre Nachricht ist bei uns angekommen. Wir melden uns so rasch wie möglich bei Ihnen.
        </p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-primary text-sm hover:underline">
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs md:text-sm font-light text-gray-700 mb-1.5">Name *</label>
        <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="firma" className="block text-xs md:text-sm font-light text-gray-700 mb-1.5">Firma (optional)</label>
        <input type="text" id="firma" name="firma" autoComplete="organization" value={formData.firma} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs md:text-sm font-light text-gray-700 mb-1.5">E-Mail *</label>
        <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} />
      </div>
      <div>
        <label htmlFor="bemerkung" className="block text-xs md:text-sm font-light text-gray-700 mb-1.5">Nachricht *</label>
        <textarea id="bemerkung" name="bemerkung" required rows={4} value={formData.bemerkung} onChange={handleChange} className={`${inputClass} resize-y`} />
      </div>

      {/* Honeypot gegen Spam-Bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
      </div>

      <p className="text-[11px] md:text-xs text-gray-500 font-light">
        Mit dem Absenden stimmen Sie der Bearbeitung Ihrer Angaben gemäss unserer{' '}
        <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a> zu.
      </p>

      {status === 'error' && (
        <p className="text-sm text-primary" role="alert">
          Das Senden hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per WhatsApp oder E-Mail.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <button type="submit" disabled={status === 'sending'} className="btn-primary w-full text-sm py-3 disabled:opacity-60">
          {status === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}
        </button>
        <button
          type="button"
          onClick={(e) => {
            if (!e.currentTarget.form?.reportValidity()) return
            openWhatsApp()
          }}
          className="w-full text-sm py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 font-medium tracking-wide uppercase"
        >
          Per WhatsApp
        </button>
      </div>
    </form>
  )
}
