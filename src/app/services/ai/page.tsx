import ServicePageTemplate from "../../../components/service-page-template"

export default function AIPage() {
  return (
    <ServicePageTemplate
      title="AI Project Development"
      description="Harness the power of artificial intelligence for your business. We develop practical AI solutions that solve real-world problems and drive innovation."
      heroImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
      features={[
        {
          title: "Chatbots",
          description: "Intelligent conversational interfaces for customer support",
          icon: "💬"
        },
        {
          title: "Data Analysis",
          description: "Extract insights from your business data",
          icon: "📈"
        },
        {
          title: "Image Recognition",
          description: "Computer vision solutions for various applications",
          icon: "👁️"
        },
        {
          title: "Natural Language",
          description: "Process and understand human language",
          icon: "🗣️"
        },
        {
          title: "Predictive Models",
          description: "Forecast trends and make data-driven decisions",
          icon: "🔮"
        },
        {
          title: "Automation",
          description: "Automate repetitive tasks with AI",
          icon: "🤖"
        }
      ]}
      process={[
        {
          step: 1,
          title: "Use Case Discovery",
          description: "Identify AI opportunities in your business"
        },
        {
          step: 2,
          title: "Model Development",
          description: "Build and train AI models for your specific needs"
        },
        {
          step: 3,
          title: "Integration",
          description: "Deploy AI solutions into your existing systems"
        }
      ]}
      cta={{
        title: "Transform Your Business with AI",
        description: "Let's explore how AI can revolutionize your operations"
      }}
    />
  )
}