import { NextResponse } from 'next/server'

// Versand über Resend (https://resend.com). Benötigte Umgebungsvariablen:
//   RESEND_API_KEY  – API-Key
//   CONTACT_TO      – Empfängeradresse (z. B. info@pepperfashion.ch)
//   CONTACT_FROM    – verifizierter Absender (z. B. "Pepper Fashion <kontakt@pepperfashion.ch>")
// Ohne diese Variablen antwortet die Route mit 503 und das Formular weicht auf das E-Mail-Programm aus.

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  // Honeypot: Bots füllen das versteckte Feld aus
  if (clean(body.website, 200)) return NextResponse.json({ ok: true })

  const name = clean(body.name, 120)
  const firma = clean(body.firma, 120)
  const email = clean(body.email, 200)
  const bemerkung = clean(body.bemerkung, 5000)

  if (!name || !bemerkung || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Bitte alle Pflichtfelder ausfüllen' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO
  const from = process.env.CONTACT_FROM
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: 'Versand nicht konfiguriert' }, { status: 503 })
  }

  const text = [`Name: ${name}`, ...(firma ? [`Firma: ${firma}`] : []), `E-Mail: ${email}`, '', bemerkung].join('\n')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Kontaktanfrage von ${name}`, text }),
  })

  if (!res.ok) return NextResponse.json({ error: 'Versand fehlgeschlagen' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
