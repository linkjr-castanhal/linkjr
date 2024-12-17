'use client'

import { Section } from '@/components/section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn-ui/carousel'
import { Card } from '@/components/shadcn-ui/card'
import Image from 'next/image'
import { TEAM } from '@/config'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'

export function Team() {
  const plugin = useRef(Autoplay({ delay: 2000 }))

  return (
    <Section>
      <div className="max-w-3xl space-y-4">
        <h2 data-aos="fade-right">Nosso time</h2>
        <p className="text-lg text-muted-foreground" data-aos="fade-up">
          Saiba mais sobre as incríveis pessoas que estão no nosso time
        </p>
      </div>
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        data-aos="fade-up"
      >
        <CarouselContent>
          {TEAM.map((item) => (
            <CarouselItem
              className="basis-full min-[480px]:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              key={item.name}
            >
              <Card className="flex flex-col items-center justify-center rounded-xl p-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={256}
                  height={256}
                  className="size-32 rounded-full border"
                />
                <p className="mt-4 text-xl font-bold">{item.name}</p>
                <p className="mt-1 text-base">{item.role}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Section>
  )
}
