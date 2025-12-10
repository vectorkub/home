import Link from "next/link"
import Logo from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    Products: [
      { name: "VectorPay", href: "/products#vectorpay" },
      { name: "VectorAuth", href: "/products#vectorauth" },
      { name: "VectorAI", href: "/products#vectorai" },
      { name: "VectorCloud", href: "/products#vectorcloud" },
      { name: "VectorCMS", href: "/products#vectorcms" },
      { name: "VectorAnalytics", href: "/products#vectoranalytics" },
    ],
    Services: [
      { name: "Web Development", href: "/services/website" },
      { name: "Payment Solutions", href: "/services/payment" },
      { name: "Authentication", href: "/services/auth" },
      { name: "AI Integration", href: "/services/ai" },
      { name: "Cloud Infrastructure", href: "/services/cloud" },
      { name: "Mobile Development", href: "/services/mobile" },
    ],
    Developers: [
      { name: "Documentation", href: "https://docs.vectorkub.com" },
      { name: "API Reference", href: "/api" },
      { name: "GitHub", href: "https://github.com/vectorkub" },
      { name: "Status", href: "https://status.vectorkub.com" },
      { name: "Support", href: "/support" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Partners", href: "/partners" },
      { name: "Press", href: "/press" },
    ],
  }

  const bottomLinks = [
    { name: "Terms & policies", href: "/terms" },
    { name: "Privacy policy", href: "/privacy" },
    { name: "Brand guidelines", href: "/brand" },
  ]

  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/vectorkub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/vectorkub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/vectorkub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/vectorkub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
  ]

  return (
    <footer className="mt-24 border-t border-border bg-background/60 backdrop-blur">
      <div className="shell py-14">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-semibold text-foreground">Vectorkub</span>
            </Link>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Software house for product engineering, AI, commerce, and fintech. We ship production-grade
              services and our own platforms for teams that need to move fast.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">Global delivery</span>
              <span className="rounded-full border border-border px-3 py-1">Multi-tenant ready</span>
              <span className="rounded-full border border-border px-3 py-1">AI-native</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title} className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-foreground"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.name} {link.href.startsWith("http") && "↗"}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span>Vectorkub © {currentYear}</span>
            {bottomLinks.map((link) => (
              <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-foreground/40 hover:text-foreground"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
