import { Section } from '@/components/section'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '../../../components/shadcn-ui/button'

export function Timeline() {
  return (
    <Section background="primary">
      <h2>Cronograma</h2>

      <Image
        src="/images/timeline.png"
        alt="Diagrama do cronograma do processo seletivo"
        width={1160}
        height={304}
        className="hidden sm:block"
      />

      <Image
        src="/images/timeline-mob.webp"
        alt="Diagrama do cronograma do processo seletivo"
        width={304}
        height={1160}
        className="w-fulll block sm:hidden"
      />
      <Link
        href="https://forms.gle/YKcuVLQddevQyKBc9"
        target="_blank"
        className={buttonVariants({ variant: 'secondary' })}
      >
        Inscreva-se no Processo Seletivo &rarr;
      </Link>
    </Section>
  )
}
