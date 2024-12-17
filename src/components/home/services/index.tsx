import { Section } from '@/components/section'
import { MonitorSmartphone, Server, Users } from 'lucide-react'

const SERVICES = [
  {
    Icon: MonitorSmartphone,
    label: 'Soluções digitais',
    description:
      'Desenvolvimento de websites, sistemas e apps personalizados para impulsionar sua empresa com soluções digitais inovadoras.',
  },
  {
    Icon: Users,
    label: 'Consultoria em TI',
    description:
      'Com o apoio de especialistas na área, otimize processos, implemente tecnologias e impulsione a inovação na sua empresa.',
  },
  {
    Icon: Server,
    label: 'Sistemas embarcados',
    description:
      'Desenvolvemos sistemas embarcados baseados em IoT para conectar suas soluções tecnológicas de forma inteligente.',
  },
]

export function Services() {
  return (
    <Section>
      <h2 data-aos="fade-up">Conheça nossos serviços</h2>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((item) => {
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
            >
              <div className="flex size-16 items-center justify-center rounded-lg bg-orange-300">
                <item.Icon className="size-8 text-primary" />
              </div>

              <h3 className="mt-4 text-xl font-semibold">{item.label}</h3>
              <p className="mt-2 text-lg text-muted-foreground">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
