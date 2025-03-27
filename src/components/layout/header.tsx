"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Header() {
  const pathname = usePathname()
  const { scrollToSection } = useSmoothScroll()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2" onClick={scrollToSection}>
            <Image
              src="/images/logos/logo-dark.svg"
              alt={siteConfig.name}
              width={120}
              height={32}
              className="hidden dark:block"
            />
            <Image
              src="/images/logos/logo-light.svg"
              alt={siteConfig.name}
              width={120}
              height={32}
              className="block dark:hidden"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1">
          <ul className="flex flex-1 items-center justify-center space-x-6">
            {siteConfig.mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={scrollToSection}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-2">
            <Button asChild>
              <Link href="/#join" onClick={scrollToSection}>
                Join Waitlist
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mb-8">
              <Image
                src="/images/logos/logo-dark.png"
                alt={siteConfig.name}
                width={100}
                height={26}
                className="hidden dark:block"
              />
              <Image
                src="/images/logos/logo-light.png"
                alt={siteConfig.name}
                width={100}
                height={26}
                className="block dark:hidden"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={scrollToSection}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#join" onClick={scrollToSection}>
                  Join Waitlist
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
