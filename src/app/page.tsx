"use client"

import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const filters = ["Web & Mobile", "AI & Automation", "Commerce", "Fintech", "Multi-tenant SaaS"]

  const templateCards = [
    {
      title: "VectorPay",
      badge: "Fintech",
      accent: "from-purple-500/20 via-pink-500/10 to-transparent",
      description: "Payment processing with compliant checkout flows.",
    },
    {
      title: "VectorAuth",
      badge: "Identity",
      accent: "from-emerald-500/20 via-green-500/10 to-transparent",
      description: "User auth, SSO, and access control for SaaS.",
    },
    {
      title: "VectorAI Console",
      badge: "AI Ops",
      accent: "from-blue-500/20 via-cyan-400/10 to-transparent",
      description: "Agent orchestration, evals, and monitoring.",
    },
    {
      title: "VectorCommerce",
      badge: "Commerce",
      accent: "from-amber-500/15 via-orange-500/10 to-transparent",
      description: "Composable storefronts with headless backends.",
    },
    {
      title: "VectorDesk",
      badge: "Support",
      accent: "from-indigo-500/20 via-sky-400/10 to-transparent",
      description: "Customer portals and ticket automation.",
    },
    {
      title: "VectorInsights",
      badge: "Analytics",
      accent: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
      description: "Dashboards, reporting, and data pipelines.",
    },
  ]

  const capabilityCards = [
    {
      title: "Custom Web & Mobile",
      description: "Product engineering for responsive apps your users love.",
      tag: "UI/UX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "AI & Automation",
      description: "Agents, copilots, and workflow automation tailored to your ops.",
      tag: "AI",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Fintech & Payments",
      description: "PCI-aware checkout, payouts, and compliant payment rails.",
      tag: "Fintech",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Composable Commerce",
      description: "Fast storefronts, flexible catalogs, and conversion-led journeys.",
      tag: "Commerce",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Multi-tenant SaaS",
      description: "Isolation, RBAC, and billing built in from day one.",
      tag: "Scale",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    },
  ]

  const heroImages = [
    {
      title: "AI agents in production",
      description: "Evald, observable, and safe by default with rollback paths.",
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Composable commerce",
      description: "Headless storefronts with payments, SSO, and analytics baked in.",
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Secure fintech rails",
      description: "PCI-aware flows, risk controls, and multi-currency support.",
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    },
  ]

  const [currentHero, setCurrentHero] = useState(0)

  const pricingTiers = [
    {
      name: "UX/UI Design",
      price: "From $15k",
      unit: "2–4 weeks",
      features: ["Product discovery & IA", "Design system + components", "Prototypes ready for build"],
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Frontend Build",
      price: "From $35k",
      unit: "4–8 weeks",
      features: ["Next.js/React implementation", "Accessible, responsive UI", "CI/CD + performance budgets"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Full Service (Backend + Frontend)",
      price: "Contact sales",
      unit: "Scoped engagement",
      features: ["Backend APIs + frontend delivery", "Security, auth, payments, AI", "SRE, observability, SLAs"],
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
  ]

  const ecosystemApps = [
    {
      name: "VectorPay",
      tagline: "Payments and payouts",
      desc: "Global checkout, subscription billing, and risk controls.",
      icon: "https://picsum.photos/seed/vectorpay/800/600",
    },
    {
      name: "VectorAuth",
      tagline: "Identity & access",
      desc: "SSO, RBAC, tenant isolation, and audit trails.",
      icon: "https://picsum.photos/seed/vectorauth/800/600",
    },
    {
      name: "VectorAI Console",
      tagline: "AI agents & evals",
      desc: "Agent orchestration, evals, monitoring, and safety.",
      icon: "https://picsum.photos/seed/vectorai/800/600",
    },
    {
      name: "VectorCommerce",
      tagline: "Composable commerce",
      desc: "Headless storefronts, catalogs, and analytics-ready.",
      icon: "https://picsum.photos/seed/vectorcommerce/800/600",
    },
    {
      name: "VectorDesk",
      tagline: "Support experiences",
      desc: "Customer portals, ticket automation, and SLAs.",
      icon: "https://picsum.photos/seed/vectordesk/800/600",
    },
    {
      name: "VectorInsights",
      tagline: "Analytics & reporting",
      desc: "Dashboards, usage analytics, and pipeline hooks.",
      icon: "https://picsum.photos/seed/vectorinsights/800/600",
    },
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(id)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-[#010101] text-white">
      <main className="relative mx-auto max-w-[1420px] px-6 pb-24 pt-12 lg:px-8">
        <section id="hero" className="mb-16 overflow-hidden rounded-[10px]">
          <div className="overflow-hidden rounded-2xl bg-black/30">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentHero * 100}%)` }}
            >
              {heroImages.map((slide, idx) => (
                <div key={slide.title} className="w-full flex-shrink-0">
                  <div className="relative h-[320px] overflow-hidden rounded-2xl md:h-[420px]">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                      <div className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/75">
                        {slide.title}
                      </div>
                      <p className="max-w-xl text-sm text-white/85 drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
                        {slide.description}
                      </p>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                        {idx + 1} / {heroImages.length}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mt-20 space-y-8 rounded-[10px] bg-black/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Our products · Ecosystem</p>
              <h2 className="text-xl font-semibold text-white">Deployed applications</h2>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              Mock app previews · production-ready
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecosystemApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-white/10 bg-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
                  <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 text-[11px]">
                    <span className="rounded-full border border-red-400/70 px-2 py-1 uppercase tracking-[0.16em] text-red-300 bg-red-500/10">
                      Live
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 px-5 py-4">
                  <h3 className="text-base font-semibold text-white">{app.name}</h3>
                  <p className="text-sm text-white/65 line-clamp-2">{app.tagline}</p>
                  <p className="text-xs text-white/60 leading-relaxed line-clamp-3">{app.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="services" className="mt-20 space-y-10 rounded-[10px] bg-black/40">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Services</p>
              <h2 className="text-xl font-semibold text-white">What we build with you</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              {filters.map((filter) => (
                <span key={filter} className="rounded-full border border-white/10 px-3 py-1">
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative overflow-hidden rounded-[10px] border border-white/8 bg-black/70"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/65 to-black/85" />
                <div className="relative flex h-full flex-col justify-end gap-3 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-white/65 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    {card.tag}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="min-h-[44px] text-sm leading-relaxed text-white/80 line-clamp-2">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mt-20 space-y-8 rounded-[10px] bg-black/40">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Pricing</p>
              <h2 className="text-xl font-semibold text-white">Custom software builds</h2>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              Fixed pods, transparent scope, clear timelines
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex h-full flex-col overflow-hidden rounded-[10px] border border-white/10 bg-black/70"
              >
                <div className="">
                  <div className="mb-4 overflow-hidden border border-white/10 bg-black/60">
                    <img
                      src={tier.image}
                      alt={tier.name}
                      className="h-64 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-6 flex h-full flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">{tier.name}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-semibold text-white">{tier.price}</span>
                        <span className="text-xs text-white/55">{tier.unit}</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-white/80">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Button className="h-10 rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                        Choose plan
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 rounded-full border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/10"
                      >
                        Contact sales
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-20 rounded-[10px] border border-white/10 bg-black/50 p-6 lg:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">About</p>
              <h2 className="text-xl font-semibold text-white">Vectorkub software house</h2>
              <p className="text-sm leading-relaxed text-white/70">
                We are a delivery team shipping web, mobile, AI, commerce, and fintech products end-to-end.
                Opinionated architecture, performance budgets, and production readiness are baked into every
                engagement.
              </p>
            </div>
            <div className="flex gap-3 text-xs text-white/60">
              <span className="rounded-full border border-white/10 px-3 py-1">Global delivery</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Security-first</span>
            </div>
          </div>
        </section>

        <section id="careers" className="mt-14 rounded-[10px] border border-white/10 bg-black/60 p-6 lg:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Careers</p>
              <h2 className="text-xl font-semibold text-white">Join the delivery team</h2>
              <p className="mt-2 text-sm text-white/70">
                Designers, engineers, and product operators who care about quality and speed.
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="h-10 rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                View roles
              </Button>
              <Button
                variant="outline"
                className="h-10 rounded-full border-white/20 bg-white/5 px-5 text-sm font-semibold text-white hover:border-white/35 hover:bg-white/10"
              >
                Refer a teammate
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
