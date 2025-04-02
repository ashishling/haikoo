"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteConfig } from "@/config/site"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary/30 py-12 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {siteConfig.howItWorks.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            {siteConfig.howItWorks.description}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-12"
        >
          {siteConfig.howItWorks.steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative flex flex-col items-center space-y-4 rounded-[2rem] bg-white p-6 text-center shadow-2xl"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <span className="text-4xl font-bold text-primary">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
