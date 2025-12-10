"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "../../components/animated-section"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to edge computing.",
      date: "December 15, 2024",
      author: "Alex Chen",
      readTime: "5 min read",
      category: "Technology",
      slug: "future-web-development-2025",
    },
    {
      title: "Building Secure Authentication Systems: Best Practices",
      excerpt: "Learn how to implement robust authentication systems that protect user data and prevent unauthorized access.",
      date: "December 10, 2024",
      author: "Sarah Johnson",
      readTime: "8 min read",
      category: "Security",
      slug: "secure-authentication-best-practices",
    },
    {
      title: "Optimizing React Applications for Peak Performance",
      excerpt: "Discover techniques to improve your React app's performance, from code splitting to lazy loading.",
      date: "December 5, 2024",
      author: "Michael Park",
      readTime: "6 min read",
      category: "Development",
      slug: "optimizing-react-performance",
    },
    {
      title: "Introduction to AI Integration in Modern Web Apps",
      excerpt: "Get started with integrating AI capabilities into your web applications using popular APIs and frameworks.",
      date: "November 28, 2024",
      author: "Lisa Wang",
      readTime: "7 min read",
      category: "AI",
      slug: "ai-integration-web-apps",
    },
    {
      title: "Cloud Infrastructure: Choosing the Right Provider",
      excerpt: "Compare major cloud providers and learn how to select the best one for your project needs.",
      date: "November 20, 2024",
      author: "Alex Chen",
      readTime: "10 min read",
      category: "Cloud",
      slug: "choosing-cloud-provider",
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first design in today's digital landscape.",
      date: "November 15, 2024",
      author: "Michael Park",
      readTime: "4 min read",
      category: "Design",
      slug: "mobile-first-design",
    },
  ]

  const categories = ["All", "Technology", "Security", "Development", "AI", "Cloud", "Design"]

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(236,72,153,0.08),transparent_35%)]" />
        <div className="shell py-20">
          <AnimatedSection>
            <div className="max-w-3xl space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                Journal · insights from the team
              </p>
              <h1 className="text-balance text-[clamp(44px,6vw,64px)] font-black leading-[1] tracking-[-0.04em]">
                Ideas, releases, and how we build.
              </h1>
              <p className="text-lg leading-relaxed text-foreground/60">
                Learn how we approach AI products, commerce, fintech, and platform engineering. Practical patterns
                from shipped work.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="shell py-8">
        <AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-4 py-2 text-sm font-medium ${category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground/60 transition hover:border-white/40 hover:text-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="shell pb-16 pt-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.05}>
              <Link href={`/blog/${post.slug}`}>
                <motion.article
                  className="card h-full cursor-pointer overflow-hidden p-5"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                >
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <span className="rounded-full border border-border px-2 py-1">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 line-clamp-2 text-lg font-semibold text-foreground">{post.title}</h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-foreground/60">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-foreground/50">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </motion.article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="shell pb-20">
        <div className="card relative overflow-hidden p-10 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.15),transparent_30%)]" />
          <div className="relative space-y-4">
            <h3 className="text-[clamp(28px,3vw,36px)] font-bold leading-tight">Stay in the loop.</h3>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-foreground/65">
              Monthly updates on what we’re shipping, architecture notes, and AI patterns that worked in production.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-white/40 focus:outline-none"
              />
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
