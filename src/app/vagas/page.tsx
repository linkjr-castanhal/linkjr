import { Section } from '@/components/section'
import { AboutSection } from '@/app/vagas/components/about-section'
import { Benefits } from '@/app/vagas/components/benefits'
import { Prerequisites } from '@/app/vagas/components/prerequisites'
import { Timeline } from '@/app/vagas/components/timeline'
import { Trails } from '@/app/vagas/components/trails'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Vagas',
  description:
    'Venha crescer com a gente! Descubra nossas vagas e conecte-se com um ambiente de aprendizado e crescimento.',
}

export default function Vagas() {
  return (
    <>
      <Section background="primary" padding="none">
        <Image
          src="/images/banner.png"
          alt="Banner do  processo seletivo"
          width={1920}
          height={370}
          className="hidden w-full md:block"
        />

        <Image
          src="/images/banner-mob.png"
          alt="Banner do processo seletivo"
          width={400}
          height={400}
          className="mb-4 block md:hidden"
        />
      </Section>
      <AboutSection />
      <Trails />
      <Prerequisites />
      <Benefits />
      <Timeline />
    </>
  )
}
