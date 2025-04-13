import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Lattes } from '../../public/icons'

type TeamCardProps = {
  className?: string
  firstName: string
  lastName: string
  role: string
  linkedin?: string
  github?: string
  lattes?: string
  image?: string
  type: string
}

export function TeamCard({
  firstName,
  lastName,
  role,
  type,
  linkedin,
  github,
  lattes,
  image,
  className,
}: TeamCardProps) {
  return (
    <div
      className={`flex size-[350px] flex-col items-center justify-between rounded-bl-[10px] rounded-br-[100px] rounded-tl-[50px] rounded-tr-[50px] border border-secondary ${className} ${type === 'student' ? 'bg-tertiary' : 'bg-primary'}`}
    >
      <div className="flex w-full items-center justify-between px-8 pt-6">
        <div
          className={`flex flex-col ${type === 'student' ? 'text-foreground' : 'text-background'}`}
        >
          <div className="text-xl">
            <span className="font-bold">{firstName}</span>
            {' ' + lastName}
          </div>
          {role}
        </div>
        <div className="flex items-center gap-4">
          {type === 'student' && github && (
            <Link href={`https://www.github.com/${github}`}>
              <Github className="text-primary" />
            </Link>
          )}
          {type === 'teacher' && lattes && (
            <Link href={`http://lattes.cnpq.br/${lattes}`}>
              <Lattes className="text-white" />
            </Link>
          )}
          {linkedin && (
            <Link href={`https://www.linkedin.com/in/${linkedin}`}>
              <Linkedin
                className={type === 'student' ? 'text-primary' : 'text-white'}
              />
            </Link>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center overflow-hidden rounded-br-[100px]">
        <Image
          src={image || ''}
          alt={`Imagem do membro ${firstName} ${lastName}`}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
