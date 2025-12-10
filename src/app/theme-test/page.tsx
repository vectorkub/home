"use client"

import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from "react"

export default function ThemeTestPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [htmlClass, setHtmlClass] = useState("")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setHtmlClass(document.documentElement.className)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [mounted])

  if (!mounted) return <div>Loading...</div>

  return (
    <div className="shell py-20">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Theme Test Page</h1>
        
        <div className="space-y-4 p-6 rounded-lg border border-border bg-card">
          <p className="text-sm">Current theme: <span className="font-mono">{theme}</span></p>
          <p className="text-sm">HTML class: <span className="font-mono">{htmlClass || "none"}</span></p>
          <p className="text-sm">Background color: <span className="font-mono">{getComputedStyle(document.documentElement).getPropertyValue('--background')}</span></p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setTheme("light")}
            className={`px-4 py-2 rounded-md border ${theme === "light" ? "bg-foreground text-background" : "border-border"}`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-4 py-2 rounded-md border ${theme === "dark" ? "bg-foreground text-background" : "border-border"}`}
          >
            Dark
          </button>
          <button
            onClick={() => setTheme("system")}
            className={`px-4 py-2 rounded-md border ${theme === "system" ? "bg-foreground text-background" : "border-border"}`}
          >
            System
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="font-semibold">Background</p>
            <p className="text-sm text-muted-foreground">Should change with theme</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <p className="font-semibold">Card</p>
            <p className="text-sm text-muted-foreground">Card background</p>
          </div>
          <div className="p-4 rounded-lg bg-primary text-primary-foreground">
            <p className="font-semibold">Primary</p>
            <p className="text-sm">Primary colors</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
            <p className="font-semibold">Secondary</p>
            <p className="text-sm">Secondary colors</p>
          </div>
        </div>
      </div>
    </div>
  )
}