"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "../../components/animated-section"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "We're looking for an experienced full stack developer to join our engineering team and help build innovative web solutions.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create beautiful, intuitive user experiences for our clients' applications.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Help us build and maintain scalable cloud infrastructure for our growing portfolio of applications.",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead client projects from inception to delivery, ensuring successful outcomes and client satisfaction.",
    },
  ]

  const benefits = [
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage for you and your family",
    },
    {
      icon: "🏝️",
      title: "Flexible Time Off",
      description: "Unlimited PTO policy and flexible work arrangements",
    },
    {
      icon: "📚",
      title: "Learning & Growth",
      description: "$2,000 annual budget for professional development",
    },
    {
      icon: "💻",
      title: "Top Equipment",
      description: "Latest MacBook Pro and $1,000 home office setup allowance",
    },
    {
      icon: "🌍",
      title: "Remote Friendly",
      description: "Work from anywhere with flexible remote options",
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Industry-leading salaries and equity packages",
    },
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and innovative solutions to complex problems.",
    },
    {
      title: "Work-Life Balance",
      description: "We believe in sustainable work practices that support your personal life.",
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through mentorship and learning opportunities.",
    },
    {
      title: "Inclusive Culture",
      description: "We celebrate diversity and foster an inclusive environment for all.",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
        <div className="shell py-20">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Careers at Vectorkub
              </p>
              <h1 className="text-balance text-[clamp(44px,6vw,64px)] font-black leading-[1] tracking-[-0.04em]">
                Build products that launch and last.
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Join a multi-disciplinary team shipping AI, commerce, and platform products for ambitious clients and our own suite.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-16">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground">Why Vectorkub?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Product-first, AI-native, and grounded in reliable engineering.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.05}>
              <motion.div
                className="card h-full p-6"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-16 pt-4">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground">Benefits & perks</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Support to do your best work from anywhere.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.05}>
              <motion.div
                className="card h-full p-6 text-center"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <div className="text-3xl">{benefit.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-16 pt-4">
        <AnimatedSection className="mb-8">
          <h2 className="text-[clamp(28px,4vw,38px)] font-bold text-foreground">Open roles</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">Find a fit and tell us about your work.</p>
        </AnimatedSection>
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <AnimatedSection key={position.title} delay={index * 0.05}>
              <motion.div
                className="card p-5"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{position.description}</p>
                  </div>
                  <Link
                    href={`/careers/apply?position=${encodeURIComponent(position.title)}`}
                    className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    Apply now
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="card flex flex-col items-center gap-4 bg-gradient-to-br from-muted/[0.04] via-muted/[0.02] to-transparent p-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Didn't see your role?</div>
          <h3 className="text-[clamp(28px,3vw,36px)] font-bold leading-tight">Reach out anyway.</h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We love meeting builders, designers, and operators who care about product quality. Share your work and
            we’ll keep in touch.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  )
}
