import ServiceCard from '@/app/(home)/components/service-card'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { CircleDollarSign } from 'lucide-react'
import Image from 'next/image'

const SERVICES = [
  {
    title: 'Soluções digitais',
    description:
      'Websites, sistemas e apps personalizados para impulsionar sua empresa.',
  },
  {
    title: 'Sistemas Embarcados',
    description: 'Soluções IoT inteligentes para conectar tecnologias.',
  },
]

export function Services() {
  return (
    <Section>
      <SectionHeader.Root>
        <SectionHeader.Label Icon={CircleDollarSign}>
          Faça o seu orçamento
        </SectionHeader.Label>
        <SectionHeader.Title>Conheça nossos serviços</SectionHeader.Title>
        <SectionHeader.Description>
          Estamos aqui para oferecer soluções que atendam às suas necessidades e
          superem suas expectativas.
        </SectionHeader.Description>
      </SectionHeader.Root>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {SERVICES.map((item, i) => {
          return (
            <ServiceCard
              title={item.title}
              description={item.description}
              key={i}
            >
              <div className="flex h-full items-center justify-center">
                <Image
                  src="/images/service-placeholder.png"
                  alt="service"
                  width={500}
                  height={500}
                />
              </div>
            </ServiceCard>
          )
        })}
      </div>
    </Section>
  )
}
