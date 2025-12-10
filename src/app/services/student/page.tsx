import ServicePageTemplate from "../../../components/service-page-template"

export default function StudentPage() {
  return (
    <ServicePageTemplate
      title="Student Project Development"
      description="Professional support for academic projects. We help students bring their ideas to life while learning industry best practices and modern development techniques."
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
      features={[
        {
          title: "Mentorship",
          description: "One-on-one guidance from experienced developers",
          icon: "👨‍🏫"
        },
        {
          title: "Code Reviews",
          description: "Professional feedback to improve code quality",
          icon: "📝"
        },
        {
          title: "Best Practices",
          description: "Learn industry standards and conventions",
          icon: "⭐"
        },
        {
          title: "Portfolio Ready",
          description: "Build projects that showcase your skills",
          icon: "💼"
        },
        {
          title: "Documentation",
          description: "Learn to write clear, professional documentation",
          icon: "📚"
        },
        {
          title: "Version Control",
          description: "Master Git and collaborative workflows",
          icon: "🌳"
        }
      ]}
      process={[
        {
          step: 1,
          title: "Project Planning",
          description: "Define scope, requirements, and learning objectives"
        },
        {
          step: 2,
          title: "Guided Development",
          description: "Build with mentorship and regular code reviews"
        },
        {
          step: 3,
          title: "Project Completion",
          description: "Final review, deployment, and portfolio preparation"
        }
      ]}
      cta={{
        title: "Start Your Learning Journey",
        description: "Build real projects with professional guidance"
      }}
    />
  )
}