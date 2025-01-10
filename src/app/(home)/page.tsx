import { CallToAction } from './components/call-to-action'
import { FAQ } from './components/faq'
import { HeroSection } from './components/hero-section'
import { Services } from './components/services'
import { Team } from './components/team'

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
