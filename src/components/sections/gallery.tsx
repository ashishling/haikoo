"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"
import { ImageCompare } from "@/components/ui/image-compare"

const transformations = [
  {
    before: "/images/gallery/before-1.jpg",
    after: "/images/gallery/after-1.jpg",
    alt: "Pet portrait transformation",
  },
  {
    before: "/images/gallery/before-2.jpg",
    after: "/images/gallery/after-2.png",
    alt: "Pet portrait transformation",
  },
  {
    before: "/images/gallery/before-3.jpg",
    after: "/images/gallery/after-3.png",
    alt: "Pet portrait transformation",
  },
  {
    before: "/images/gallery/before-4.png",
    after: "/images/gallery/after-4.png",
    alt: "Pet portrait transformation",
  },
  {
    before: "/images/gallery/before-5.jpg",
    after: "/images/gallery/after-5.png",
    alt: "Pet portrait transformation",
  },
  {
    before: "/images/gallery/before-6.jpg",
    after: "/images/gallery/after-6.png",
    alt: "Pet portrait transformation",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.35]">
        <Image
          src="/images/gallery/gallery-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {siteConfig.gallery.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            Slide to reveal the AI-transformed versions of these pet photos. Each transformation showcases a unique artistic style.
          </p>
        </motion.div>

        {/* Gallery Grid with Image Comparison Sliders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {transformations.map((transform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Digital Frame Container */}
              <div className="relative w-full">
                {/* Frame Border */}
                <div className="relative rounded-[2rem] bg-black p-3 shadow-2xl">
                  {/* Frame Inner Bezel */}
                  <div className="relative rounded-[1.75rem] bg-black p-1.5">
                    {/* Screen Glass Effect */}
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
                      {/* Screen Glare */}
                      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                      
                      {/* Image Comparison Component */}
                      <ImageCompare
                        beforeImage={transform.before}
                        afterImage={transform.after}
                        alt={transform.alt}
                        aspectRatio="aspect-[3/4]"
                      />
                    </div>
                  </div>
                  
                  {/* Frame Details */}
                  <div className="absolute bottom-6 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
