import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { StandortePreview } from '@/components/StandortePreview'
import { NewsSection } from '@/components/NewsSection'
import { ModelabelsSection } from '@/components/ModelabelsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <StandortePreview />
      <NewsSection />
      <ModelabelsSection />
    </>
  )
}

