import { buttonVariants } from '@/components/shadcn-ui/button'
import { PAGES } from '@/config'
import { Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'
import { ThemeModeButton } from '../shadcn-ui/theme-mode'

export function Navbar() {
  return (
    <header className="h-16 w-full border-b bg-stone-50">
      <div className="width-wrapper flex h-full items-center">
        <Link href="/">
          <Image
            src="/images/linkjr.svg"
            alt="Logo da LinkJR"
            width={60}
            height={25}
          />
        </Link>

        <div className="ml-auto hidden items-center gap-6 md:flex">
          <nav>
            <ul className="flex gap-8">
              {PAGES.map((page) => (
                <li key={page.label}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="h-4 w-0.5 bg-border"></div>

          <div className="space-x-3 text-muted-foreground">
            <ThemeModeButton />

            <Link
              href="https://github.com/linkjrcastanhal/linkjr"
              className={buttonVariants({ variant: 'ghost', size: 'icon' })}
            >
              <Github className="size-5" />
            </Link>
          </div>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
