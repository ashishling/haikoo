import { Header } from "./header"
import { Footer } from "./footer"

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col w-full max-w-[100vw] overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full px-4 md:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  )
} 