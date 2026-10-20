import Image from 'next/image'

interface Modelabel {
  name: string
  image: string
  scale?: number
  // Logo-Dateien sind teils weiss auf transparent oder weiss auf schwarz – so werden sie dunkel dargestellt
  tone?: 'invert' | 'silhouette'
}

const modelabels: Modelabel[] = [
  { name: 'ONLY', image: '/modelabel-logos/01_ONLY.png', scale: 0.8 },
  { name: 'GARCIA', image: '/modelabel-logos/02_GARCIA.png' },
  { name: 'b.young', image: '/modelabel-logos/03_b-young.png', scale: 1.05 },
  { name: 'Glücksstern', image: '/modelabel-logos/04_Gluecksstern.png', tone: 'silhouette', scale: 1.05 },
  { name: 'M.O.D Miracle of Denim', image: '/modelabel-logos/05_MOD.png', scale: 0.85 },
  { name: 'Red Button', image: '/modelabel-logos/06_Red_Button.png', scale: 1.05 },
  { name: 'Freaky Nation', image: '/modelabel-logos/07_Freaky_Nation.jpg', tone: 'invert', scale: 0.8 },
  { name: 'Tamaris', image: '/modelabel-logos/08_Tamaris.png', scale: 1.05 },
  { name: 'ICHI', image: '/modelabel-logos/09_ICHI.png', scale: 0.8 },
  { name: 'monari', image: '/modelabel-logos/10_Monari.png' },
  { name: 'ZHRILL', image: '/modelabel-logos/11_Zhrill.png', scale: 1.05 },
  { name: '#VDR Via delle Rose', image: '/modelabel-logos/12_VDR_schwarz.png', scale: 1.05 },
  { name: 'ipsy', image: '/modelabel-logos/13_Ipsy.png', scale: 0.85 },
]

export function ModelabelsCarousel() {
  const loop = [...modelabels, ...modelabels]

  return (
    <div className="relative overflow-hidden py-4 md:py-12">
      <div className="container-custom">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-normal tracking-tight text-gray-900 mb-6 md:mb-12 text-center">
          Unsere Modelabels
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-r from-fashion-beige to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-l from-fashion-beige to-transparent z-10 pointer-events-none" />

        <ul className="marquee flex w-max items-center" aria-label="Modelabels">
          {loop.map((label, index) => (
            <li
              key={`${label.name}-${index}`}
              className="flex-shrink-0 w-[130px] h-14 md:w-[220px] md:h-24 mx-3 md:mx-8"
              aria-hidden={index >= modelabels.length}
            >
              <div
                className="relative w-full h-full opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500"
                style={{ transform: label.scale ? `scale(${label.scale})` : undefined }}
              >
                <Image
                  src={label.image}
                  alt={label.name}
                  fill
                  className={`object-contain ${label.tone === 'invert' ? 'invert' : ''} ${label.tone === 'silhouette' ? 'brightness-0' : ''}`}
                  sizes="(max-width: 768px) 130px, 220px"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
