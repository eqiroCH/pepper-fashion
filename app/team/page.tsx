import Image from 'next/image'

export const metadata = {
  title: 'Team – Pepper Fashion',
  description: 'Lernen Sie das Team von pepper-fashion kennen.',
}

const team = [
  {
    rolle: 'Inhaberin',
    beschreibung: 'Professional Farb-, Stil- und Image Beraterin',
    name: 'Laura Sanchez Porzi',
  },
  {
    rolle: 'Modeberaterin',
    beschreibung: 'Detailhandelsfachfrau, Lehrlingsausbildnerin',
    name: 'Laura Pirro',
  },
  {
    rolle: 'Modeberaterin',
    beschreibung: 'Modeberatung mit Herz und Erfahrung.',
    name: 'Doris Moroni-Hüppin',
  },
]

export default function TeamPage() {
  return (
    <div className="section-padding bg-white pt-8 md:pt-12">
      <div className="container-custom">
        <div className="mb-4 md:mb-8 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-normal tracking-tight text-gray-900 mb-2 md:mb-3">
            Unser Team
          </h1>
          <p className="text-sm md:text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            Unser Team in Siebnen hat grosse Erfahrung und nimmt sich genügend Zeit um Sie zu beraten.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] md:aspect-[21/10] overflow-hidden rounded-xl md:rounded-2xl mb-6 md:mb-10 border border-gray-200/60">
            <Image
              src="/images/team/team-gruppe.jpeg"
              alt="Das Team von Pepper Fashion: Laura Sanchez Porzi, Laura Pirro und Doris Moroni-Hüppin"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>

          <section id="team-pepper-fashion">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-gray-200/60 rounded-lg md:rounded-2xl p-4 md:p-6 text-center"
                >
                  <div className="inline-flex items-center rounded-full px-2.5 py-1 md:px-3 md:py-1 bg-primary/10 mb-2 md:mb-3">
                    <span className="text-[10px] md:text-xs tracking-wider uppercase text-primary font-medium">
                      {member.rolle}
                    </span>
                  </div>
                  <h2 className="text-base md:text-xl lg:text-2xl font-display font-normal tracking-tight text-gray-900 mb-1 md:mb-2">
                    {member.name}
                  </h2>
                  <p className="text-xs md:text-sm text-gray-600 font-light leading-relaxed">
                    {member.beschreibung}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
