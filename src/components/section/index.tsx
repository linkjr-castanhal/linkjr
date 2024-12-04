import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const SectionVariants = cva('relative', {
  variants: {
    background: {
      default: '',
      background: 'bg-background',
      primary: 'bg-primary text-background',
      vagas: "bg-[url('/images/banner.png')]",
    },
    padding: {
      default: 'py-20',
      lg: 'py-40',
      none: 'py-0',
    },
  },
  defaultVariants: {
    background: 'default',
    padding: 'default',
  },
})

interface SectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SectionVariants> {}

export function Section({
  children,
  className,
  background,
  padding,
  dataAos,
}: SectionProps & { dataAos?: string }) {
  return (
    <section
      className={SectionVariants({ background, padding })}
      data-aos={dataAos}
    >
      <div
        className={cn(
          'width-wrapper flex flex-col items-center justify-center gap-16 text-center',
          className,
        )}
      >
        {children}
      </div>
    </section>
  )
}
