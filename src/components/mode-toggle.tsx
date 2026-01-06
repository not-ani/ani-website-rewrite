"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="size-9 rounded-sm border border-border/40 bg-background/80" />
    )
  }

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ]

  const currentTheme = themes.find((t) => t.value === theme) || themes[2]
  const Icon = currentTheme.icon

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "size-9 rounded-sm border border-border/40 bg-background/80 backdrop-blur-sm",
          "flex items-center justify-center",
          "transition-all duration-200",
          "hover:bg-muted/50 hover:border-border",
          isOpen && "bg-muted/50 border-border"
        )}
        aria-label="Toggle theme"
      >
        <Icon className="size-4 text-foreground/80" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute right-0 top-full mt-2 z-50",
                "w-32 rounded-sm border border-border/40 bg-background/95 backdrop-blur-sm shadow-lg"
              )}
            >
              <div className="p-1">
                {themes.map((t, index) => {
                  const ThemeIcon = t.icon
                  const isActive = theme === t.value

                  return (
                    <motion.button
                      key={t.value}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.03,
                      }}
                      onClick={() => {
                        setTheme(t.value)
                        setIsOpen(false)
                      }}
                      className={cn(
                        "w-full flex items-center gap-2 px-3 py-2 rounded-sm",
                        "font-mono text-xs transition-all duration-200",
                        isActive
                          ? "bg-foreground text-background"
                          : "text-foreground/80 hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <ThemeIcon className="size-3.5" />
                      <span>{t.label}</span>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
