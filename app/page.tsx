import { Hero } from '@/components/Hero'
import { Intro } from '@/components/Intro'
import { StandortePreview } from '@/components/StandortePreview'
import { InstagramSection } from '@/components/InstagramSection'
import { ModelabelsSection } from '@/components/ModelabelsSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <InstagramSection />
      <StandortePreview />
      <ModelabelsSection />
    </>
  )
}

