import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logos/logo-dark.png"
                alt={siteConfig.name}
                width={120}
                height={32}
                className="hidden dark:block"
              />
              <Image
                src="/images/logos/logo-light.png"
                alt={siteConfig.name}
                width={120}
                height={32}
                className="block dark:hidden"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a
                href={`mailto:${siteConfig.company.support.email}`}
                className="underline hover:text-foreground"
              >
                {siteConfig.company.support.email}
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
