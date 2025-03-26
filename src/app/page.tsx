import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Gallery } from "@/components/sections/gallery"
import { WaitlistForm } from "@/components/sections/waitlist-form"

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Gallery />
      <WaitlistForm />
    </>
  )
}
