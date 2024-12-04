'use client'

import { Button, buttonVariants } from '@/components/shadcn-ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/shadcn-ui/sheet'
import { PAGES } from '@/config'
import { Github, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeModeButton } from '../shadcn-ui/theme-mode'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="ml-auto block md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="flex flex-col items-center p-12">
          <nav>
            <ul className="flex flex-col items-center gap-6 text-lg font-medium">
              {PAGES.map((page) => (
                <li key={page.label} onClick={() => setOpen(false)}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-x-3 text-muted-foreground">
            <ThemeModeButton />

            <Link
              href="https://github.com/linkjrcastanhal/linkjr"
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
              })}
            >
              <Github className="size-5" />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
