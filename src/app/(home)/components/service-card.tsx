import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/shadcn-ui/card'

interface ServiceCardProps {
  children: React.ReactNode
  title: string
  description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <Card className="w-full rounded-2xl border border-secondary bg-tertiary">
      <CardContent className="relative mb-4 overflow-hidden p-0">
        {children}
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent"></div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 p-0">
        <CardTitle className="relative z-10 text-xl font-extrabold text-primary">
          {title}
        </CardTitle>

        <CardDescription className="text-start text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard
