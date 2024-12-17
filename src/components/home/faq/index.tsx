import { Section } from '@/components/section'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn-ui/accordion'

const QUESTIONS = [
  {
    title: 'O que é a LinkJr',
    description:
      'A LinkJr é uma empresa júnior vinculada à Universidade Federal do Pará (UFPA), Campus Castanhal. Nosso objetivo é oferecer serviços de qualidade em tecnologia e inovação, desenvolvendo projetos para empresas e empreendedores que buscam soluções digitais eficientes.',
  },
  {
    title: 'Por que escolher a LinkJr?',
    description:
      'Ao escolher a LinkJr, você investe em soluções tecnológicas criadas sob medida para o seu negócio, além de contribuir para a formação de futuros profissionais. Nossos serviços são inovadores, de alta qualidade e a preços acessíveis.',
  },
  {
    title: 'Quem realiza os projetos da LinkJr?',
    description:
      'Nossos projetos são conduzidos por estudantes universitários da UFPA especializados em áreas de tecnologia e inovação. Eles trabalham sob a supervisão de professores e profissionais experientes, garantindo a qualidade e o compromisso com os resultados.',
  },
]

export function FAQ() {
  return (
    <Section>
      <div className="max-w-3xl space-y-4 ">
        <h2>FAQ</h2>
        <p className="text-lg text-muted-foreground">
          Aqui você encontrará respostas para as duvidas mais frequentes sobre a
          LinkJr
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl text-start"
      >
        {QUESTIONS.map((item, i) => (
          <AccordionItem
            className={'mb-3 rounded-2xl border px-4 last:mb-0 hover:bg-border'}
            value={`item-${i}`}
            key={i}
          >
            <AccordionTrigger className={'text-start'}>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
