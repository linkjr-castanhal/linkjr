import { Badge } from '@/components/shadcn-ui/badge'
import { Button } from '@/components/shadcn-ui/button'
import { SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type CaseCardProps = {
  category: string
  image: string
  title: string
  description: string
}

const imageCard = {
  with: 365,
  height: 300,
}

export function CaseCard({
  category,
  image,
  title,
  description,
}: CaseCardProps) {
  return (
    <Link
      href={'/slug'}
      className="group w-full overflow-hidden rounded-2xl border border-secondary"
    >
      <div className="group-hover relative max-h-96 w-full overflow-hidden md:max-h-none">
        <div className="absolute inset-0 z-10 bg-black/30 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100"></div>
        <Button
          size="sm"
          className="absolute right-1/2 top-1/2 z-20 -translate-y-1/2 translate-x-1/2 gap-2 bg-white text-primary opacity-0 transition-all hover:bg-primary hover:text-white group-hover:-translate-y-1/3 group-hover:opacity-100"
        >
          Ver case <SquareArrowOutUpRight className="size-4" />
        </Button>
        <Image
          src={image}
          alt={title}
          width={imageCard.with}
          height={imageCard.height}
          className="w-full object-cover"
        />
      </div>
      <div className="bg-tertiary p-6">
        <Badge className="px-3 text-xs">{category}</Badge>
        <h4 className="mb-1 mt-2 text-lg font-bold text-primary">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}
