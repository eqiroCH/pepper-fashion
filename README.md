# pepper-fashion Website

Professionelle Next.js Website für pepper-fashion GmbH.

## Tech Stack

- **Next.js 14** – React Framework mit App Router
- **TypeScript** – Type-safe Development
- **Tailwind CSS** – Utility-first CSS Framework
- **React 18** – Moderne React Features

## Features

- ✅ Server-Side Rendering (SSR)
- ✅ TypeScript für Type Safety
- ✅ Responsive Design
- ✅ SEO-optimiert
- ✅ Moderne Komponenten-Architektur
- ✅ Performance-optimiert

## Entwicklung

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

### Build für Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Projektstruktur

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   ├── standorte/         # Standorte Seite
│   ├── team/              # Team Seite
│   └── kontakt/           # Kontakt Seite
├── components/            # React Komponenten
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── NewsSection.tsx
│   ├── ModelabelsSection.tsx
│   ├── LocationsGrid.tsx
│   └── ContactForm.tsx
├── public/                # Statische Assets
└── styles/               # Globale Styles
```

## Inhalte

Die Website verwendet ausschließlich die Inhalte der Original-Website:
- Kompetente Modeberatung für Menschen mit Stil
- Standorte: Showroom Horgen und Pepper-Fashion Siebnen
- News-Bereich
- Team-Informationen
- Kontaktformular

## Deployment

Die Website kann auf folgenden Plattformen deployed werden:
- Vercel (empfohlen für Next.js)
- Netlify
- Eigenes Server mit Node.js
