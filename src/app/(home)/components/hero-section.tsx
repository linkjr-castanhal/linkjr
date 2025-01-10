import Link from 'next/link'
import { buttonVariants } from '@/components/shadcn-ui/button'
import { Badge } from '@/components/shadcn-ui/badge'
import { LinkJrIcon, Star } from '../../../../public/icons'
import { Section } from '@/components/section'

export function HeroSection() {
  return (
    <div className="relative flex h-[calc(100vh-4rem)] flex-col justify-center bg-gradient-to-b from-[#FFF7ED]/30 to-[#FFEDD5]/30">
      <Section>
        <Star
          color="#EA580C"
          className="absolute right-1/3 top-0 animate-spin-slow"
        />
        <Star
          color="#ea580c"
          className="absolute bottom-0 right-1/4 animate-spin-slow"
        />
        <Star
          color="#ea580c"
          className="absolute bottom-0 left-1/4 animate-spin-slow"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <Badge className="flex gap-1" data-aos="fade-up">
            <LinkJrIcon />
            Seja bem-vind@ à LinkJr!
          </Badge>

          <h1 className="text-center" data-aos="fade-up">
            <p className="font-extrabold text-primary">Conectando ideias,</p>
            <p className="font-extrabold text-foreground">
              Impulsionando soluções
            </p>
          </h1>
          <p className="text-center text-lg text-foreground" data-aos="fade-up">
            Entre em contato conosco para discutir como podemos ajudar a
            transformar sua presença online!
          </p>
          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-6"
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
    </div>
  )
}
