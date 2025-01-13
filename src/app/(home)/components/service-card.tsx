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
  title = 'Soluções digitais',
  description = 'Websites, sistemas e apps personalizados para impulsionar sua empresa.',
}) => {
  return (
    <Card className="w-full border border-secondary bg-tertiary">
      <CardContent className="min-h-64">{children}</CardContent>
      <div className="relative">
        <div className="absolute bottom-36 left-0 h-12 w-full bg-gradient-to-t from-tertiary to-transparent lg:bottom-28" />
        <CardFooter className="flex flex-col items-start gap-3">
          <CardTitle className="relative z-10 text-xl font-extrabold text-primary">
            {title}
          </CardTitle>

          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardFooter>
      </div>
    </Card>
  )
}

export default ServiceCard
