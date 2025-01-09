'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('acceptedCookies')
    if (!hasAcceptedCookies) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('acceptedCookies', 'true')
    setIsVisible(false)
  }

  const handleDecline = () => {
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="bg-background-card fixed bottom-0 flex h-auto w-full flex-col gap-3 rounded px-5 py-3 text-sm font-medium shadow ring-1 ring-border sm:max-w-xl sm:flex-row sm:justify-between md:items-center">
      <div className="flex items-center gap-2">
        <Image
          src="/images/icons/cookie.svg"
          alt="Cookie"
          width={50}
          height={50}
        />
        <span>
          Usamos cookies para melhorar sua experiência em nosso site. Aceita
          Cookies?
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-1 sm:ml-0 sm:flex-row">
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-primary px-4 py-2 text-sm font-medium text-primary ring-offset-background transition-colors hover:border-accent-foreground hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          onClick={handleDecline}
        >
          Recusar
        </a>
        <a
          href="#"
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          onClick={handleAccept}
        >
          Aceitar
        </a>
      </div>
    </div>
  )
}
