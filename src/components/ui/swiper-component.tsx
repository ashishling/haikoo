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
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="w-full max-w-full overflow-hidden aspect-[9/16]">
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
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                onLoadingComplete={() => {
                  if (index === 0) setIsLoaded(true)
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={85}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
} 