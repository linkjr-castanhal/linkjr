import { CallToAction } from '@/components/home/call-to-action'
import { FAQ } from '@/components/home/faq'
import { HeroSection } from '@/components/home/hero-section'
import { Services } from '@/components/home/services'
import { Team } from '@/components/home/team'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CallToAction />
      <Services />
      <Team />
      <FAQ />
    </>
  )
}
