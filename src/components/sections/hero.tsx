"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { ImageCompare } from "@/components/ui/image-compare"

export function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
              >
                {siteConfig.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground md:text-xl"
              >
                {siteConfig.hero.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button size="lg" asChild>
                <Link href={siteConfig.hero.ctaButton.href} onClick={scrollToSection}>
                  {siteConfig.hero.ctaButton.text}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#gallery" onClick={scrollToSection}>View Gallery</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Daily New Artwork</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Auto-Sync to Frame</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Comparison Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Digital Frame Container */}
            <div className="relative w-full">
              {/* Frame Border */}
              <div className="relative rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 shadow-2xl">
                {/* Frame Inner Bezel */}
                <div className="relative rounded-[1.5rem] bg-black p-2">
                  {/* Screen Glass Effect */}
                  <div className="relative overflow-hidden rounded-[1.25rem] bg-black">
                    {/* Screen Glare */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    
                    {/* Image Comparison Component */}
                    <ImageCompare
                      beforeImage="/images/hero/hero-before.jpg"
                      afterImage="/images/hero/hero-after.jpg"
                      alt="See how your pet's photo transforms into AI art"
                      aspectRatio="aspect-[3/4]"
                    />
                  </div>
                </div>
                
                {/* Frame Details */}
                <div className="absolute bottom-6 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
