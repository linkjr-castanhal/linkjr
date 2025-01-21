'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/shadcn-ui/button'
import { MoonStar, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeModeButton() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const isLightTheme = theme === 'light'

  const handleThemeToggle = () => {
    setTheme(isLightTheme ? 'dark' : 'light')
  }

  return (
    <Button 
      className="fixed bottom-6 right-6 h-10 w-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background transition-all flex items-center justify-center"
      variant="primary"
      size="icon"
      onClick={handleThemeToggle}
      aria-label={`Mudar para o modo ${isLightTheme ? 'escuro' : 'claro'}`}
    >
      {isLightTheme ? (
        <Sun className="size-5" />
      ) : (
        <MoonStar className="size-5" />
      )}
    </Button>
  )
}
