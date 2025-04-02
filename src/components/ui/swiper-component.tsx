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
  return (
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
  )
} 