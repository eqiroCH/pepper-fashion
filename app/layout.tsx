import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'pepper-fashion – Kompetente Modeberatung für Menschen mit Stil',
  description: 'pepper-fashion bietet kompetente Modeberatung in Siebnen und Horgen. Entdecken Sie aktuelle Fashiontrends und lassen Sie sich professionell beraten.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

