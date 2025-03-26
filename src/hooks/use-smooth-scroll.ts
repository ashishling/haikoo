"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.href

    if (href.endsWith('/')) {
      // Scroll to top for home link
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      window.history.pushState({}, "", href)
      return
    }

    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    
    if (elem) {
      elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      // Update the URL without the jump
      window.history.pushState({}, "", href)
    }
  }, [])

  return { scrollToSection }
} 