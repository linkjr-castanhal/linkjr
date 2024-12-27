import { Section } from '@/components/section'
import { Card } from '@/components/shadcn-ui/card'
import {
  CircleDollarSign,
  CodeXml,
  Database,
  LaptopMinimal,
  Megaphone,
  User,
} from 'lucide-react'
import Link from 'next/link'

const TRAILS = [
  {
    label: 'Áreas de Negócio',
    trails: [
      {
        title: 'Administrativo',
        description:
          'Responsável pela organização financeira e logística da empresa, cuidando de contratos, orçamento e documentação.',
        Icon: CircleDollarSign,
      },
      {
        title: 'Marketing',
        description:
          'Área de comunicação da empresa. Cria campanhas de marketing, administra redes sociais e elabora conteúdo visual.',
        Icon: Megaphone,
      },
      {
        title: 'Gestão de Pessoas',
        description:
          'Focada no desenvolvimento da equipe, recrutamento e no bem-estar dos membros, aderente às metodologias da empresa.',
        Icon: User,
      },
    ],
  },
  {
    label: 'Áreas de Tecnologia',
    trails: [
      {
        title: 'Desenvolvimento',
        description:
          'Envolve a criação e manutenção de sistemas e sites, com foco em programação e implementação de soluções tecnológicas.',
        Icon: CodeXml,
      },
      {
        title: 'UI/UX',
        description:
          'Foco na experiência e interface dos usuários, desenhando layouts funcionais e intuitivos que melhoram a usabilidade dos projetos',
        Icon: LaptopMinimal,
      },
      {
        title: 'Data Science',
        description:
          'Análise e interpretação de dados para insights estratégicos, construção de modelos preditivos e otimização de processos.',
        Icon: Database,
      },
    ],
  },
]

export function Trails() {
  return (
    <Section background="primary">
      <div className="max-w-3xl space-y-4">
        <h2>Trilhas de trabalho</h2>
        <p className="text-lg">
          Escolha até duas áreas para sua possível atuação na empresa
        </p>
      </div>

      <div className="space-y-8">
        {TRAILS.map((item) => (
          <div key={item.label}>
            <div className="flex w-full items-center gap-8">
              <h3 className="flex-shrink-0 flex-grow text-start text-2xl font-bold">
                {item.label}
              </h3>
              <div className="h-0.5 w-full bg-background"></div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {item.trails.map((trail) => (
                <Card
                  key={trail.title}
                  className="flex flex-col-reverse items-center gap-4 md:flex-row"
                >
                  <div className="space-y-1 text-center md:text-start">
                    <h4 className="text-xl font-semibold">{trail.title}</h4>
                    <p className="text-sm">{trail.description}</p>
                  </div>
                  <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-orange-300">
                    <trail.Icon className="size-8 text-primary" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg">
          Ainda não sabe qual área quer atuar?{' '}
          <Link
            className="font-bold underline"
            href="https://drive.google.com/file/d/1OLtDR7Dkj-t8ilb0EuNEfGWk8ft5RMF_/view?usp=sharing"
            target="_blank"
          >
            Confira o guia completo no nosso edital
          </Link>
          !
        </p>
      </div>
    </Section>
  )
}
