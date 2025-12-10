"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Logo from "./logo"

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
    { title: "Products", href: "#products" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "About", href: "#about" },
    { title: "Careers", href: "#careers" },
  ]

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${isScrolled
        ? "bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
        : "bg-black/70 backdrop-blur-2xl"
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1420px] items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-7 w-7 text-white" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Contact
          </Link>
          <Button className="h-9 rounded-full bg-white/90 px-4 text-xs font-semibold text-black transition hover:bg-white">
            Dashboard
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-white/10 p-2 text-white hover:border-white/40"
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
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-2xl md:hidden">
          <div className="mx-auto max-w-[1420px] px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
              <Link
                href="/contact"
                className="block rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                Contact
              </Link>
              <Button className="w-full rounded-full bg-white/90 py-3 text-sm font-semibold text-black transition hover:bg-white">
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
