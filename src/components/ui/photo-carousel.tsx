"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { ComponentType } from 'react'
import { photos } from "@/config/photos"
import SwiperComponent from "./swiper-component"

interface SwiperProps {
  photos: string[]
}

const SwiperWithNoSSR = dynamic<SwiperProps>(() => import('./swiper-component'), {
  ssr: false,
})

export function PhotoCarousel() {
  return (
    <div className="relative aspect-[9/16] rounded-[2rem] bg-black p-2 sm:p-4 shadow-2xl">
      <SwiperComponent photos={photos} />
    </div>
  )
} 