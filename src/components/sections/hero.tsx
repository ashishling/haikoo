"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { PhotoCarousel } from "@/components/ui/photo-carousel"

export function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6 md:space-y-8"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
              >
                {siteConfig.hero.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base sm:text-lg text-muted-foreground md:text-xl"
              >
                {siteConfig.hero.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href={siteConfig.hero.ctaButton.href} onClick={scrollToSection}>
                  {siteConfig.hero.ctaButton.text}
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/#gallery" onClick={scrollToSection}>View Gallery</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0"
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
                  className="mr-2 h-4 w-4 flex-shrink-0"
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

          {/* Photo Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[80vw] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
          >
            <PhotoCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
