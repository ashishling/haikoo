"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

interface SwiperComponentProps {
  photos: string[]
}

export default function SwiperComponent({ photos }: SwiperComponentProps) {
  const [mounted, setMounted] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }

  return (
    <div className="w-full h-full overflow-hidden rounded-[1.25rem]">
      <Swiper
        modules={[Autoplay, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            opacity: 0,
            translate: ['-20%', 0, -1],
          },
          next: {
            opacity: 0,
            translate: ['100%', 0, 0],
          },
        }}
        speed={1500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
        updateOnWindowResize={true}
        observer={true}
        observeParents={true}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={photo}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                onLoadingComplete={() => handleImageLoad(index)}
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                quality={85}
              />
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <div className="w-6 h-6 border-3 border-gray-600 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 