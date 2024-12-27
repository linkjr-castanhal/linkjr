import { Section } from '@/components/section'
import { Card } from '@/components/shadcn-ui/card'
import { Briefcase, Building2, GraduationCap } from 'lucide-react'

const BENEFITS = [
  {
    label: 'Crédito de CH Complementar',
    Icon: Briefcase,
  },
  {
    label: 'Jornada de Treinamentos Internos',
    Icon: GraduationCap,
  },
  {
    label: 'Iniciação ao Mercado de Trabalho',
    Icon: Building2,
  },
]

export function Benefits() {
  return (
    <Section>
      <h2>Benefícios</h2>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <Card
            key={benefit.label}
            className="flex flex-col items-center gap-4 bg-primary"
          >
            <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-300 text-primary">
              <benefit.Icon className="size-8" />
            </div>
            <h4 className="text-xl font-bold text-white">{benefit.label}</h4>
          </Card>
        ))}
      </div>
    </Section>
  )
}
