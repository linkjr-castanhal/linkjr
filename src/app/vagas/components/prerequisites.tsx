import { Section } from '@/components/section'
import { BadgeCheck } from 'lucide-react'

const PREREQUISITES = [
  'Estar regularmente matriculado(a) nos cursos de Sistemas de Informação ou Eng. de Computação da UFPA, Castanhal.',
  'Disponibilidade para atuar 4h/dia de forma híbrida',
  'Disponibilidade para atuar por pelo menos 1 (um) ano na equipe',
  'Disponibilidade para ida presencial à UFPA ou visita aos clientes, conforme demanda',
]

export function Prerequisites() {
  return (
    <Section>
      <h2>Pré-requisitos</h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        {PREREQUISITES.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1 text-center md:flex-row md:gap-3 md:text-start"
          >
            <BadgeCheck className="size-14 flex-shrink-0 text-primary" />
            <p className="text-lg tracking-tight">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
