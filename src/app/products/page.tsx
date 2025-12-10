"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "../../components/animated-section"
import { ProductLogos } from "../../components/product-logos"
import { Button } from "../../components/ui/button"

export default function ProductsPage() {
  const products = [
    {
      id: "vectorpay",
      name: "VectorPay",
      Logo: ProductLogos.VectorPay,
      tagline: "Seamless Payment Processing",
      description: "A comprehensive payment processing platform that handles transactions, subscriptions, and financial operations with enterprise-grade security.",
      features: [
        "Multi-currency support",
        "Subscription management",
        "PCI DSS compliant",
        "Real-time analytics",
        "Fraud detection",
        "API-first design"
      ],
      link: "https://pay.vectorkub.com",
      color: "from-blue-600/20 to-blue-400/10",
    },
    {
      id: "vectorauth",
      name: "VectorAuth",
      Logo: ProductLogos.VectorAuth,
      tagline: "Identity & Access Management",
      description: "Enterprise-grade authentication and authorization solution with support for SSO, MFA, and advanced security features.",
      features: [
        "Single Sign-On (SSO)",
        "Multi-factor authentication",
        "Role-based access control",
        "OAuth 2.0 & OpenID Connect",
        "User management dashboard",
        "Audit logging"
      ],
      link: "https://auth.vectorkub.com",
      color: "from-green-600/20 to-green-400/10",
    },
    {
      id: "vectorai",
      name: "VectorAI",
      Logo: ProductLogos.VectorAI,
      tagline: "AI Integration Suite",
      description: "Powerful AI tools and APIs to integrate machine learning capabilities into your applications with ease.",
      features: [
        "Pre-trained models",
        "Custom model training",
        "Natural language processing",
        "Computer vision APIs",
        "Predictive analytics",
        "AutoML capabilities"
      ],
      link: "https://ai.vectorkub.com",
      color: "from-purple-600/20 to-purple-400/10",
    },
    {
      id: "vectorcloud",
      name: "VectorCloud",
      Logo: ProductLogos.VectorCloud,
      tagline: "Cloud Infrastructure Tools",
      description: "Simplified cloud infrastructure management with automated deployments, scaling, and monitoring.",
      features: [
        "One-click deployments",
        "Auto-scaling",
        "Multi-cloud support",
        "Infrastructure as Code",
        "Cost optimization",
        "24/7 monitoring"
      ],
      link: "https://cloud.vectorkub.com",
      color: "from-cyan-600/20 to-cyan-400/10",
    },
    {
      id: "vectorcms",
      name: "VectorCMS",
      Logo: ProductLogos.VectorCMS,
      tagline: "Headless Content Management",
      description: "Modern headless CMS built for developers and content creators with powerful APIs and intuitive interfaces.",
      features: [
        "GraphQL & REST APIs",
        "Rich text editor",
        "Asset management",
        "Content versioning",
        "Multi-language support",
        "Custom content types"
      ],
      link: "https://cms.vectorkub.com",
      color: "from-orange-600/20 to-orange-400/10",
    },
    {
      id: "vectoranalytics",
      name: "VectorAnalytics",
      Logo: ProductLogos.VectorAnalytics,
      tagline: "Business Intelligence Platform",
      description: "Comprehensive analytics platform that transforms your data into actionable insights with powerful visualization tools.",
      features: [
        "Real-time dashboards",
        "Custom reports",
        "Data visualization",
        "Predictive analytics",
        "Data pipeline automation",
        "Team collaboration"
      ],
      link: "https://analytics.vectorkub.com",
      color: "from-pink-600/20 to-pink-400/10",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
        <div className="shell py-20">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
              Vectorkub platforms
            </div>
            <h1 className="mt-4 text-balance text-[clamp(44px,6vw,64px)] font-black leading-[1] tracking-[-0.04em]">
              Production-grade apps you can deploy on day one.
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white/60">
              Payments, identity, AI, commerce, and analytics built by our team and ready to run in your stack.
              Pair with our services or use standalone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-16">
        <div className="grid gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.06}>
              <motion.div
                className="card relative overflow-hidden p-6 md:p-8"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${product.color}`} />
                <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                        <product.Logo className="h-14 w-14 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">{product.tagline}</p>
                        <h2 className="text-3xl font-semibold text-white">{product.name}</h2>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-white/65">{product.description}</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-white/70">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full bg-white px-5 text-sm font-semibold text-black hover:bg-white/90">
                          Launch {product.name}
                        </Button>
                      </a>
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="rounded-full border-white/30 bg-white/5 px-5 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/10"
                        >
                          Talk to sales
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.18),transparent_30%)]" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-50">
                        <product.Logo className="h-36 w-36 text-white/20" />
                      </div>
                      <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                          Deploy ready
                        </div>
                        <p className="text-sm leading-relaxed text-white/70">
                          Ready-to-run infrastructure blueprints, API references, and starter kits so your team can
                          plug {product.name} into your environment quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-20 pt-6">
        <div className="card relative overflow-hidden p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_30%)]" />
          <div className="relative space-y-4">
            <h3 className="text-[clamp(28px,3vw,36px)] font-bold leading-tight">Built to work together.</h3>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/65">
              Unified APIs, shared identity through VectorAuth, centralized analytics via VectorInsights, and
              prebuilt observability. Choose one product or run the full suite as your foundation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-white/70">
              {["Unified APIs", "SSO everywhere", "Composable commerce", "Global edge delivery", "Observability"].map(
                (chip) => (
                  <span key={chip} className="rounded-full border border-white/15 px-3 py-1">
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
