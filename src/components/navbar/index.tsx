import { buttonVariants } from '@/components/shadcn-ui/button'
import { PAGES } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="width-wrapper flex h-16 items-center justify-between">
        <Link href="/">
          <Image
            src="/images/linkjr.svg"
            alt="Logo da LinkJR"
            width={60}
            height={25}
          />
        </Link>

        <nav className="absolute right-1/2 hidden translate-x-1/2 lg:block">
          <ul className="flex gap-8">
            {PAGES.map((page) => (
              <li key={page.label}>
                <Link href={page.href}>{page.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contato"
          className={buttonVariants({
            className: 'hidden lg:flex',
            size: 'sm',
          })}
        >
          Entrar em contato
        </Link>

        <MobileNav />
      </div>
    </header>
  )
}
