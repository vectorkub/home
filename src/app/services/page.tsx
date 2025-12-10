"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "../../components/animated-section"
import { Button } from "../../components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Product Engineering",
      description: "Web and mobile experiences crafted for scale, accessibility, and performance.",
      features: ["Next.js + React", "Native & RN", "Design systems", "Accessibility-first"],
      link: "/services/website",
      accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Fintech & Payments",
      description: "Compliance-aware checkout, billing, payouts, and ledgers you can trust.",
      features: ["PCI-aware rails", "Subscriptions & billing", "Risk & fraud", "Reporting"],
      link: "/services/payment",
      accent: "from-purple-500/20 via-pink-500/10 to-transparent",
    },
    {
      title: "Identity & Access",
      description: "SSO, RBAC, tenant isolation, and strong account security built in.",
      features: ["SSO & MFA", "RBAC", "Tenant isolation", "Audit trails"],
      link: "/services/auth",
      accent: "from-emerald-500/20 via-green-500/10 to-transparent",
    },
    {
      title: "AI & Automation",
      description: "Agents, copilots, and workflow automation tuned to your operations.",
      features: ["Agent orchestration", "Retrieval & evals", "Observability", "Safety guardrails"],
      link: "/services/ai",
      accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },
    {
      title: "Cloud & SRE",
      description: "Ops teams for infra design, observability, and compliance at scale.",
      features: ["Multi-cloud", "IaC & CI/CD", "SLOs & tracing", "Cost & resiliency"],
      link: "/services/cloud",
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    {
      title: "Multi-tenant SaaS",
      description: "Tenant-aware platforms with billing, permissions, and analytics ready.",
      features: ["Tenant billing", "Data isolation", "Admin consoles", "Usage analytics"],
      link: "/services/mobile",
      accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
        <div className="shell py-24">
          <AnimatedSection>
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Services · delivery + in-house accelerators
              </p>
              <h1 className="text-balance text-[clamp(44px,6vw,64px)] font-black leading-[1] tracking-[-0.04em]">
                Full-stack teams that ship reliable products.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Engage Vectorkub squads for discovery, design, engineering, and ops. We bring reusable auth,
                payments, AI, and analytics so you launch faster with production guardrails.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button className="h-11 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Start a project
                </Button>
                <Link
                  href="/contact"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-border hover:bg-muted/20"
                >
                  Talk to our team
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.06}>
              <Link href={service.link}>
                <motion.div
                  className="card relative h-full overflow-hidden p-6"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground">
                        ↗
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell py-16">
        <div className="card relative overflow-hidden border-border p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_30%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How we work</p>
              <h2 className="text-3xl font-bold leading-tight text-foreground">Embedded product squads</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Research, design, engineering, SRE, and AI specialists working as one pod. We ship in weekly
                increments with demos, CI/CD, and production observability from day one.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {["Discovery to launch", "Design systems", "Compliance aware", "Observability", "Performance budgets"].map((chip) => (
                  <span key={chip} className="rounded-full border border-border px-3 py-1">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Kickoff in 2 weeks", desc: "Onboard, align, and start sprinting quickly." },
                { title: "Partner-ready assets", desc: "Decks, metrics, and runbooks for stakeholders." },
                { title: "Shared accelerators", desc: "Auth, payments, AI, analytics prebuilt." },
                { title: "Production playbooks", desc: "Release, rollback, on-call, and SLA tooling." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-muted/20 p-4">
                  <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="shell pb-20 pt-10">
        <div className="flex flex-col items-center gap-4 rounded-[28px] border border-border bg-gradient-to-br from-muted/[0.04] via-muted/[0.02] to-transparent px-8 py-10 text-center">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Ready when you are
          </div>
          <h3 className="text-[clamp(28px,3vw,36px)] font-bold leading-tight">
            Tell us what you want to launch next.
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Share your idea, rewrite a legacy stack, or scale an existing product. We’ll assemble a pod, align
            on outcomes, and ship with you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="h-11 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Book a call
            </Button>
            <Link
              href="/contact"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-border hover:bg-muted/20"
            >
              Send a brief
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
