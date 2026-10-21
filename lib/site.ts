export const SITE = {
  name: 'Pepper Fashion',
  company: 'Pepper Fashion GmbH',
  email: 'info@pepperfashion.ch',
  whatsapp: '41795760922',
  whatsappDisplay: '+41 79 576 09 22',
  instagram: 'https://www.instagram.com/pepper_fashion_gmbh/',
  facebook: 'https://www.facebook.com/pepperfashiongmbh/',
}

export interface OpeningHours {
  closed: string
  weekdays: string
  saturday: string
}

export interface Location {
  slug: 'siebnen' | 'horgen'
  name: string
  badge: string
  street: string
  city: string
  phone: string
  phoneHref: string
  note?: string
  hours: OpeningHours
  description: string
  image: string
  imageAlt: string
}

export const LOCATIONS: Location[] = [
  {
    slug: 'siebnen',
    name: 'Boutique Siebnen',
    badge: 'Hauptstandort',
    street: 'Bahnhofstrasse 1',
    city: '8854 Siebnen',
    phone: '+41 55 525 88 88',
    phoneHref: 'tel:+41555258888',
    hours: {
      closed: 'Montag geschlossen',
      weekdays: 'Di–Fr: 9–12 | 14–18:30 Uhr',
      saturday: 'Sa: 9–16 Uhr',
    },
    description:
      'Unsere Boutique im Herzen von Siebnen. Hier finden Sie Kleider, Schuhe und Accessoires unserer angesagten Modelabels – in entspannter Atmosphäre und mit persönlicher Beratung.',
    image: '/images/siebnen/siebnen-15.jpeg',
    imageAlt: 'Boutique Pepper Fashion in Siebnen',
  },
  {
    slug: 'horgen',
    name: 'Showroom Horgen',
    badge: 'Showroom',
    street: 'Seestrasse 159',
    city: '8810 Horgen',
    phone: '+41 79 576 09 22',
    phoneHref: 'tel:+41795760922',
    note: 'bei Salottino',
    // Zeiten gemäss Salottino
    hours: {
      closed: 'Montag geschlossen',
      weekdays: 'Di–Fr: 10–12 | 15–18 Uhr',
      saturday: 'Sa: 10–15 Uhr',
    },
    description:
      'Unser Showroom in Horgen bei Salottino bietet Ihnen eine exklusive Einkaufserfahrung in ruhiger Atmosphäre – ideal für individuelle Beratungstermine.',
    image: '/images/horgen/horgen-02.jpeg',
    imageAlt: 'Showroom Pepper Fashion in Horgen bei Salottino',
  },
]

export const mapsLink = (l: Location) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.street}, ${l.city}`)}`

export const mapsEmbed = (l: Location) =>
  `https://www.google.com/maps?q=${encodeURIComponent(`${l.street}, ${l.city}`)}&hl=de&z=16&output=embed`
