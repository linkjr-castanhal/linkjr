import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { LucideIcon } from 'lucide-react'

type SectionHeaderRootProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SectionHeaderRoot({
  children,
  className,
  ...props
}: SectionHeaderRootProps) {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-3xl flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type SectionHeaderTitleProps = {
  children: React.ReactNode
  mainTitle?: boolean
} & React.HTMLAttributes<HTMLHeadingElement>

function SectionHeaderTitle({
  children,
  className,
  mainTitle = false,
  ...props
}: SectionHeaderTitleProps) {
  if (mainTitle) {
    return (
      <h1
        className={cn(
          'mb-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl md:leading-tight',
          className,
        )}
        {...props}
      >
        {children}
      </h1>
    )
  }

  return (
    <h2
      className={cn(
        'mb-4 text-3xl font-extrabold tracking-tight md:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

type SectionHeaderActionsProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SectionHeaderActions({
  children,
  className,
  ...props
}: SectionHeaderActionsProps) {
  return (
    <div
      className={cn(
        'mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

type SectionHeaderDescriptionProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLParagraphElement>

function SectionHeaderDescription({
  children,
  className,
  ...props
}: SectionHeaderDescriptionProps) {
  return (
    <p className={cn('text-muted-foreground md:text-lg', className)} {...props}>
      {children}
    </p>
  )
}

const SectionHeaderLabelVariants = cva(
  'mb-4 px-4 flex items-center justify-center gap-1.5 rounded-full bg-primary/10  font-semibold text-primary',
  {
    variants: {
      size: {
        default: 'py-1 text-sm',
        lg: 'py-1.5 text-sm md:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type SectionHeaderLabelProps = {
  children: React.ReactNode
  Icon?: LucideIcon
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof SectionHeaderLabelVariants>

function SectionHeaderLabel({
  children,
  className,
  Icon,
  size,
  ...props
}: SectionHeaderLabelProps) {
  return (
    <div
      className={cn(SectionHeaderLabelVariants({ className, size }))}
      {...props}
    >
      {Icon && (
        <Icon className={cn('h-4 w-4', size === 'lg' && 'md:h-6 md:w-6')} />
      )}
      {children}
    </div>
  )
}

export const SectionHeader = {
  Root: SectionHeaderRoot,
  Title: SectionHeaderTitle,
  Description: SectionHeaderDescription,
  Actions: SectionHeaderActions,
  Label: SectionHeaderLabel,
}
