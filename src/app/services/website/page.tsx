import ServicePageTemplate from "../../../components/service-page-template"

export default function WebsitePage() {
  return (
    <ServicePageTemplate
      title="Static Website Development"
      description="Create stunning personal and brand presentation websites that make a lasting impression. Our static websites are fast, secure, and optimized for search engines."
      heroImage="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
      features={[
        {
          title: "Lightning Fast",
          description: "Static sites load instantly, providing the best user experience",
          icon: "⚡"
        },
        {
          title: "SEO Optimized",
          description: "Built with search engines in mind for maximum visibility",
          icon: "🔍"
        },
        {
          title: "Responsive Design",
          description: "Perfect display on all devices, from mobile to desktop",
          icon: "📱"
        },
        {
          title: "Secure by Default",
          description: "No databases or server-side processing means minimal attack surface",
          icon: "🛡️"
        },
        {
          title: "Cost Effective",
          description: "Low hosting costs with high performance",
          icon: "💰"
        },
        {
          title: "Easy Updates",
          description: "Simple content management through modern tools",
          icon: "🔄"
        }
      ]}
      process={[
        {
          step: 1,
          title: "Discovery",
          description: "Understanding your brand, goals, and target audience"
        },
        {
          step: 2,
          title: "Design & Development",
          description: "Creating a unique design that represents your vision"
        },
        {
          step: 3,
          title: "Launch & Support",
          description: "Deploying your site and providing ongoing maintenance"
        }
      ]}
      cta={{
        title: "Ready to Build Your Online Presence?",
        description: "Let's create a website that truly represents your brand"
      }}
    />
  )
}