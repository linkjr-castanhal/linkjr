import { CaseCard } from '@/app/(home)/components/case-card'
import { Section } from '@/components/section'
import { SectionHeader } from '@/components/section-header'
import { Rocket } from 'lucide-react'

const CASES = [
  {
    category: 'Website',
    title: 'Portal de Informações do Campus',
    description: 'Universidade Federal do Pará (UFPA)',
    image: '/images/case-placeholder.png',
  },
  {
    category: 'Website',
    title: 'Portal de Informações do Campus',
    description: 'Universidade Federal do Pará (UFPA)',
    image: '/images/case-placeholder.png',
  },
  {
    category: 'Website',
    title: 'Portal de Informações do Campus',
    description: 'Universidade Federal do Pará (UFPA)',
    image: '/images/case-placeholder.png',
  },
]

export function Cases() {
  return (
    <Section>
      <SectionHeader.Root>
        <SectionHeader.Label Icon={Rocket}>Nosso portfólio</SectionHeader.Label>
        <SectionHeader.Title>
          Cases que atestam nossa excelência
        </SectionHeader.Title>
        <SectionHeader.Description>
          Veja como nós estamos moldando o futuro digital com inovação,
          criatividade e tecnologia de ponta
        </SectionHeader.Description>
      </SectionHeader.Root>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CASES.map((item, i) => (
          <CaseCard
            key={i}
            category={item.category}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  )
}
