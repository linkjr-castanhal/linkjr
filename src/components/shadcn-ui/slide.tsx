'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface SlideImage {
  url: string
  alt: string
}

const SLIDE_WIDTH = 540
const SLIDE_GAP = 32
const DRAG_THRESHOLD = 50

export function Slide({ images }: { images: SlideImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const getMaxTranslateX = () => {
    if (!containerRef.current) return 0
    const containerWidth = containerRef.current.offsetWidth
    const totalContentWidth =
      images.length * SLIDE_WIDTH + (images.length - 1) * SLIDE_GAP
    return Math.min(0, containerWidth - totalContentWidth)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setTranslateX(-(currentIndex - 1) * (SLIDE_WIDTH + SLIDE_GAP))
    }
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const nextTranslateX = -(currentIndex + 1) * (SLIDE_WIDTH + SLIDE_GAP)
      const maxTranslateX = getMaxTranslateX()

      setCurrentIndex(currentIndex + 1)
      setTranslateX(Math.max(nextTranslateX, maxTranslateX))
    }
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX - translateX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const newTranslateX = clientX - startX
    const maxTranslate = 0
    const minTranslate = getMaxTranslateX()

    setTranslateX(Math.max(Math.min(newTranslateX, maxTranslate), minTranslate))
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const dragDistance = translateX + currentIndex * (SLIDE_WIDTH + SLIDE_GAP)

    if (Math.abs(dragDistance) > DRAG_THRESHOLD) {
      if (dragDistance > 0 && currentIndex > 0) {
        handlePrevious()
      } else if (dragDistance < 0 && currentIndex < images.length - 1) {
        handleNext()
      } else {
        setTranslateX(-(currentIndex * (SLIDE_WIDTH + SLIDE_GAP)))
      }
    } else {
      setTranslateX(-(currentIndex * (SLIDE_WIDTH + SLIDE_GAP)))
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseLeave = () => {
      if (isDragging) {
        handleDragEnd()
      }
    }

    container.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full cursor-grab overflow-hidden active:cursor-grabbing"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        className={`flex gap-8 ${isDragging ? '' : 'transition-transform duration-300 ease-in-out'}`}
        style={{
          transform: `translateX(${translateX}px)`,
          touchAction: 'none',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${SLIDE_WIDTH}px`, height: '300px' }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full select-none rounded-lg object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-lg transition-colors hover:bg-primary-hover"
          aria-label="Previous image"
        >
          <ArrowLeft className="size-4 text-white" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-lg transition-colors hover:bg-primary-hover"
          aria-label="Next image"
        >
          <ArrowRight className="size-4 text-white" />
        </button>
      )}
    </div>
  )
}
