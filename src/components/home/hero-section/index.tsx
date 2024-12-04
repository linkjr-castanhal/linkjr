import { Section } from '@/components/section'
import Link from 'next/link'
import { buttonVariants } from '../../shadcn-ui/button'

export function HeroSection() {
  return (
    <Section padding="lg">
      <div className="max-w-3xl space-y-6 md:space-y-8">
        <h1 className="text-center" data-aos="fade-up">
          Conectando ideias,
          <br />
          Impulsionando soluções
        </h1>
        <p
          className="text-lg text-muted-foreground md:text-2xl"
          data-aos="fade-up"
        >
          Entre em contato conosco para discutir como podemos ajudar a
          transformar sua presença online!
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-6"
          data-aos="fade-down"
        >
          <Link href="/contato" className={buttonVariants()}>
            Solicite seu orçamento
          </Link>

          <Link
            href="#servicos"
            className={buttonVariants({ variant: 'secondary' })}
          >
            Ver serviços &rarr;
          </Link>
        </div>
      </div>
    </Section>
  )
}
