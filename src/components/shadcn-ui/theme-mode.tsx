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
      variant="ghost"
      size="icon"
      onClick={handleThemeToggle}
      aria-label={`Mudar para o modo ${isLightTheme ? 'escuro' : 'claro'}`}
    >
      {isLightTheme ? (
        <MoonStar className="size-5" />
      ) : (
        <Sun className="size-5" />
      )}
    </Button>
  )
}
