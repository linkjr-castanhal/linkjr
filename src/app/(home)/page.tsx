import { Cases } from '@/app/(home)/components/cases'
import { FAQ } from './components/faq'
import { HeroSection } from './components/hero-section'
import { Services } from './components/services'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Cases />
      <FAQ />
    </>
  )
}
