"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue } from "framer-motion"

interface ImageCompareProps {
  beforeImage: string
  afterImage: string
  alt: string
  aspectRatio?: string
}

export function ImageCompare({ 
  beforeImage, 
  afterImage, 
  alt,
  aspectRatio = "aspect-[4/3]" 
}: ImageCompareProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100

    setSliderPosition(Math.min(Math.max(x, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((touch.clientX - rect.left) / rect.width) * 100

    setSliderPosition(Math.min(Math.max(x, 0), 100))
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`group relative ${aspectRatio} w-full overflow-hidden rounded-xl`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (Full width) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`Before - ${alt}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={`After - ${alt}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Slider */}
      <motion.div
        className="absolute inset-y-0"
        style={{
          left: `${sliderPosition}%`,
          x: "-50%",
          cursor: "ew-resize",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="h-full w-1 bg-white" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="pointer-events-none absolute inset-0 flex">
        <div
          className="flex w-full items-end p-4"
          style={{ width: `${sliderPosition}%` }}
        >
          <span className="rounded bg-black/60 px-2 py-1 text-sm text-white">
            Original
          </span>
        </div>
        <div className="flex w-full items-end justify-end p-4">
          <span className="rounded bg-black/60 px-2 py-1 text-sm text-white">
            AI Art
          </span>
        </div>
      </div>
    </div>
  )
} 