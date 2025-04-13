import { CalloutText } from '@/components/callout-text'
import { SectionHeader } from '@/components/section-header'
import { Slide } from '@/components/shadcn-ui/slide'
import { Users } from 'lucide-react'

export default function Apresentation() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=540&h=300',
      alt: 'Team working together in office',
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=540&h=300',
      alt: 'Team collaborating with laptops',
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=540&h=300',
      alt: 'Person working on laptop',
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=540&h=300',
      alt: 'Person working on laptop',
    },
  ]

  return (
    <>
      <SectionHeader.Root className="mt-12">
        <SectionHeader.Label Icon={Users}>Sobre</SectionHeader.Label>
        <SectionHeader.Title>
          Por trás de cada <CalloutText>projeto,</CalloutText>
          <br />
          uma grande <CalloutText>equipe</CalloutText>
        </SectionHeader.Title>
        <SectionHeader.Description>
          Na LinkJr, unimos talento e criatividade para transformar ideias em
          soluções que fazem a diferença
        </SectionHeader.Description>
      </SectionHeader.Root>

      <Slide images={images} />
    </>
  )
}
