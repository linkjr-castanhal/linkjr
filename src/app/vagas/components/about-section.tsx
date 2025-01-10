import { Section } from '@/components/section'
import { buttonVariants } from '@/components/shadcn-ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <Section
      className="flex-col-reverse gap-8 lg:flex-row lg:gap-16"
      background="background"
    >
      <div className="space-y-4 text-center lg:text-start">
        <h1>Sobre o processo</h1>
        <p className="text-base text-muted-foreground">
          O processo seletivo da LinkJR é composto por etapas que avaliam tanto
          habilidades técnicas quanto comportamentais. Nosso objetivo é garantir
          que todos os candidatos tenham a oportunidade de demonstrar seu
          potencial e alinhar suas expectativas com as atividades da nossa
          empresa júnior. O processo inclui inscrição, testes práticos e
          entrevistas para conhecermos melhor quem se juntará à nossa equipe.
        </p>

        <Link
          href="https://forms.gle/YKcuVLQddevQyKBc9"
          target="_blank"
          className={buttonVariants()}
        >
          Quero fazer parte dessa história &rarr;
        </Link>
      </div>

      <div className="flex w-1/2 flex-shrink-0 items-center justify-center">
        <Image
          src="/images/mockup.png"
          alt="placeholder"
          width={400}
          height={400}
          className="rounded-2xl border"
        />
      </div>
    </Section>
  )
}
