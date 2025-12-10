"use client"

import { motion } from "framer-motion"
import AnimatedSection from "../../components/animated-section"

export default function AboutPage() {
  const team = [
    {
      name: "Development Team",
      role: "Full Stack Developers",
      description: "Expert developers specializing in modern web technologies",
      color: "from-blue-500/20 via-cyan-500/10 to-transparent",
      initials: "DEV",
    },
    {
      name: "Design Team",
      role: "UI/UX Designers",
      description: "Creative minds crafting beautiful user experiences",
      color: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
      initials: "DSN",
    },
    {
      name: "Support Team",
      role: "Customer Success",
      description: "Dedicated to ensuring your project's success",
      color: "from-emerald-500/20 via-green-500/10 to-transparent",
      initials: "CXS",
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
        <div className="shell py-20">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                About Vectorkub
              </p>
              <h1 className="text-balance text-[clamp(44px,6vw,64px)] font-black leading-[1] tracking-[-0.04em]">
                We build software and ship products with you.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                A product-obsessed software house combining engineering, design, AI, and infrastructure. We deliver
                services and ship our own applications to accelerate your roadmap.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <AnimatedSection>
            <div className="space-y-5">
              <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight text-foreground">
                A mission to launch better products.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We believe every team deserves production-grade quality from day one. That means thoughtful design
                systems, resilient infra, measurable performance, and AI capabilities that actually work in your
                workflows.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Our squads embed alongside yours, bringing reusable accelerators for auth, payments, analytics, and
                agent tooling. Less time rebuilding foundations, more time shipping features that matter.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                {["Delivery pods", "Design + build + operate", "AI-native", "Compliance-aware", "Global"].map(
                  (chip) => (
                    <span key={chip} className="rounded-full border border-border px-3 py-1">
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="card relative overflow-hidden p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_30%)]" />
              <div className="relative space-y-4">
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Snapshot</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Projects shipped", value: "120+" },
                    { label: "Edge regions", value: "35+" },
                    { label: "AI agents live", value: "60+" },
                    { label: "Commerce GMV", value: "$250M+" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border bg-muted/20 p-4">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-xl font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-16">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground">Our values</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Principles that keep every engagement focused on outcomes and quality.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Innovation", desc: "Explore new tech, apply pragmatically, measure impact.", icon: "🚀" },
            { title: "Partnership", desc: "Embedded teams, transparent comms, shared outcomes.", icon: "🤝" },
            { title: "Excellence", desc: "Ship with polish, resiliency, and security defaults.", icon: "⭐" },
          ].map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.05}>
              <motion.div
                className="card h-full p-6 text-left"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <div className="text-2xl">{value.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-20 pt-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground">Teams behind the work</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Cross-functional squads that cover design, build, and operate.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.05}>
              <motion.div
                className="card overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <div className={`relative h-40 bg-gradient-to-br ${member.color}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-muted-foreground">
                    {member.initials}
                  </div>
                </div>
                <div className="space-y-1 p-5">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{member.role}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="card flex flex-col items-center gap-4 bg-gradient-to-br from-muted/[0.04] via-muted/[0.02] to-transparent p-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Let’s build together</div>
          <h3 className="text-[clamp(28px,3vw,36px)] font-bold leading-tight">
            Ready to ship your next product?
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tell us about your idea, migration, or scaling challenge. We’ll assemble the right pod and start in days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Start a project
            </a>
            <a
              href="/careers"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-border hover:bg-muted/20"
            >
              Join the team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
