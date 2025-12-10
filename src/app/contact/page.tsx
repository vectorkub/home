"use client"

import { useState } from "react"
import AnimatedSection from "../../components/animated-section"
import { Button } from "../../components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-[#010101] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.08),transparent_30%)]" />
      <main className="relative mx-auto max-w-[1420px] px-6 pb-24 pt-14 lg:px-8">
        <section className="mb-14 rounded-[10px] border border-white/10 bg-black/60 p-8 md:p-10">
          <AnimatedSection>
            <div className="max-w-3xl space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                Contact
              </p>
              <h1 className="text-balance text-[clamp(40px,5vw,58px)] font-black leading-[1] tracking-[-0.04em]">
                Tell us what you want to ship.
              </h1>
              <p className="text-lg leading-relaxed text-white/65">
                Share your idea, migration, or scaling challenge. We respond within one business day with clear next steps.
              </p>
            </div>
          </AnimatedSection>
        </section>

        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div className="rounded-[10px] border border-white/10 bg-black/70 p-6 md:p-8 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <h2 className="text-xl font-semibold text-white">Send a note</h2>
              <p className="text-sm text-white/60">We’ll follow up with a short call and a tailored plan.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {[
                  { label: "Name", name: "name", required: true, type: "text" },
                  { label: "Email", name: "email", required: true, type: "email" },
                  { label: "Company", name: "company", required: false, type: "text" },
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-white/70">
                      {field.label} {field.required && "*"}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      className="w-full rounded-[10px] border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-white/70">
                    Service interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-[10px] border border-white/15 bg-black/40 px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Product engineering</option>
                    <option value="payment">Fintech & payments</option>
                    <option value="auth">Identity & access</option>
                    <option value="ai">AI & automation</option>
                    <option value="cloud">Cloud & SRE</option>
                    <option value="mobile">Multi-tenant SaaS</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-[10px] border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Send message
                </Button>
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-[10px] border border-white/10 bg-black/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <h3 className="text-lg font-semibold text-white">Reach us</h3>
                <div className="space-y-4 pt-4 text-sm text-white/65">
                  {[
                    { label: "Email", value: "contact@vectorkub.com" },
                    { label: "Phone", value: "+1 (555) 123-4567" },
                    { label: "Office", value: "123 Tech Street, Suite 100, San Francisco, CA 94105" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[10px] border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                      <p className="text-sm text-white/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[10px] border border-white/10 bg-black/70 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <h3 className="text-lg font-semibold text-white">Availability</h3>
                <p className="text-sm text-white/65">Mon–Fri · 9:00 AM – 6:00 PM PST</p>
                <div className="mt-4 grid gap-2 text-xs text-white/60">
                  <span className="rounded-full border border-white/15 px-3 py-1">Global time zones</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">Enterprise ready</span>
                  <span className="rounded-full border border-white/15 px-3 py-1">Secure by default</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  )
}
