'use client'

import { Button } from '@/components/shadcn-ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/shadcn-ui/sheet'
import { PAGES } from '@/config'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="ml-auto block lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="p-12">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Todas as páginas da LinkJr</SheetDescription>
          </SheetHeader>

          <nav>
            <ul className="flex flex-col items-center gap-6 text-lg font-medium">
              {PAGES.map((page) => (
                <li key={page.label} onClick={() => setOpen(false)}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
