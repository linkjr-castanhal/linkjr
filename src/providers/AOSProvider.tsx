'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactNode, useEffect } from 'react'

interface AOSProviderProps {
  children: ReactNode
}

export const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação
      once: false, // Anima uma única vez
    })
  }, [])

  return <>{children}</>
}
