"use client"

import { useState } from 'react'
import { photos } from "@/config/photos"
import SwiperComponent from "./swiper-component"

export function PhotoCarousel() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Preload images
  if (typeof window !== 'undefined') {
    Promise.all(
      photos.map((photo) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = photo
          img.onload = resolve
          img.onerror = () => reject(new Error(`Failed to load image: ${photo}`))
        })
      })
    )
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.error('Error loading images:', err)
        setError('Failed to load images')
        setIsLoading(false)
      })
  }

  if (error) {
    return (
      <div className="relative aspect-[9/16] rounded-[2rem] bg-black p-2 sm:p-4 shadow-2xl flex items-center justify-center">
        <p className="text-white text-sm">{error}</p>
      </div>
    )
  }

  return (
    <div className="relative aspect-[9/16] rounded-[2rem] bg-black p-2 sm:p-4 shadow-2xl">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin" />
        </div>
      ) : null}
      <SwiperComponent photos={photos} />
    </div>
  )
} 