import { Section } from '@/components/section'
import Link from 'next/link'
import { buttonVariants } from '../../shadcn-ui/button'

export function CallToAction() {
  return (
    <Section className="">
      <div
        className="flex w-full flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-primary to-orange-400 p-8 lg:flex-row lg:justify-between lg:p-16"
        data-aos="fade-up"
      >
        <div className="space-y-2 lg:space-y-4 lg:text-start">
          <h2 className="text-white" data-aos="fade-right">
            Deseja entrar no nosso time?
          </h2>
          <p
            className="text-base font-medium text-primary-foreground md:text-lg"
            data-aos="fade-right"
          >
            Junte-se ao nosso time e faça parte da mudança!
          </p>
        </div>
        <Link
          data-aos="fade-left"
          className={buttonVariants({ variant: 'secondary' })}
          href="/vagas"
        >
          Ver processo seletivo
        </Link>
      </div>
    </Section>
  )
}
