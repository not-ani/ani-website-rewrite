"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hi")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hi", "projects", "Writing"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { id: "hi", label: "Hi" },
    { id: "projects", label: "Projects" },
    { id: "Writing", label: "Writing" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollToSection("hi")}
            className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-foreground/80"
          >
            Portfolio
          </button>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 text-sm font-mono transition-all rounded-sm",
                    activeSection === item.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
