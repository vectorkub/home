"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Logo from "./logo"
import { ThemeMenu } from "./theme-menu"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { title: "Products", href: "/#products" },
    { title: "Services", href: "/#services" },
    { title: "Pricing", href: "/#pricing" },
    { title: "About", href: "/#about" },
    { title: "Careers", href: "/#careers" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${isScrolled
        ? "bg-background/85 backdrop-blur-2xl border-b border-border shadow-sm"
        : "bg-background/70 backdrop-blur-2xl"
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1420px] items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeMenu />
          <Link
            href="/contact"
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground/80 transition hover:border-foreground/40 hover:text-foreground"
          >
            Contact
          </Link>
          <Button
            className="h-9 rounded-full bg-foreground px-4 text-xs font-semibold text-background transition hover:bg-foreground/90"
            onClick={() => window.open(process.env.NEXT_PUBLIC_ACCOUNT_CENTER_URL || 'https://accounts.vectorkub.com', '_blank')}
          >
            Account Center
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-border p-2 text-foreground hover:border-foreground/40"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background/90 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-[1420px] px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-4 space-y-2 border-t border-border pt-4">
              <div className="px-4">
                <ThemeMenu />
              </div>
              <Link
                href="/contact"
                className="block rounded-xl px-4 py-3 text-sm text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
              >
                Contact
              </Link>
              <Button
                className="w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
                onClick={() => window.open(process.env.NEXT_PUBLIC_ACCOUNT_CENTER_URL || 'https://accounts.vectorkub.com', '_blank')}
              >
                Account Center
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
