import { Section } from '@/components/section'
import { ContactForm } from '@/app/contato/components/contact-form'
import Image from 'next/image'

export default function Contact() {
  return (
    <Section className="gap-8 text-start">
      <Image
        src="/images/form.webp"
        alt="Imagem de formulário"
        width={400}
        height={400}
      />

      <div className="max-w-3xl space-y-8">
        <h1>Entre em contato conosco</h1>

        <p className="text-lg">
          Nós da Link Júnior estamos prontos para ajudar você a transformar suas
          ideias em realidade! Preencha o formulário abaixo, e entraremos em
          contato o mais breve possível.
        </p>

        <ContactForm />
      </div>
    </Section>
  )
}
