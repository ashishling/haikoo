"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamically import Swiper components with no SSR
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false })
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false })

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-creative'

// Import required modules
import { Autoplay, EffectCreative } from 'swiper/modules'

const photos = [
  '/images/carousel/slide-1.png',
  '/images/carousel/slide-2.png',
  '/images/carousel/slide-3.png',
  '/images/carousel/slide-4.png',
  
  // Add more slides as needed
]

export function PhotoCarousel() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Frame Container */}
      <div className="relative aspect-[12/16] rounded-[2rem] bg-black p-3 shadow-2xl">
        {/* Inner Bezel */}
        <div className="relative h-full rounded-[1.75rem] bg-black p-1.5">
          {/* Screen */}
          <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-black">
            {/* Screen Glare */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            {/* Swiper Carousel */}
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
            >
              {photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={photo}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        {/* Frame Details */}
        <div className="absolute bottom-6 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-700" />
      </div>
    </div>
  )
} 