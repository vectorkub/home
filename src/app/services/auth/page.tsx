import ServicePageTemplate from "../../../components/service-page-template"

export default function AuthPage() {
  return (
    <ServicePageTemplate
      title="Authentication Systems"
      description="Implement robust, secure authentication systems that protect your users and data. From simple login systems to complex enterprise solutions."
      heroImage="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
      features={[
        {
          title: "Multi-Factor Auth",
          description: "Enhanced security with 2FA and biometric options",
          icon: "🔐"
        },
        {
          title: "SSO Integration",
          description: "Single Sign-On with Google, Microsoft, and more",
          icon: "🔑"
        },
        {
          title: "Role Management",
          description: "Granular permissions and access control",
          icon: "👥"
        },
        {
          title: "Token Security",
          description: "JWT and OAuth 2.0 implementation",
          icon: "🎫"
        },
        {
          title: "Session Management",
          description: "Secure session handling and monitoring",
          icon: "⏱️"
        },
        {
          title: "Compliance Ready",
          description: "GDPR, CCPA, and SOC 2 compliant",
          icon: "✅"
        }
      ]}
      process={[
        {
          step: 1,
          title: "Security Assessment",
          description: "Analyzing your security requirements and threat model"
        },
        {
          step: 2,
          title: "Implementation",
          description: "Building secure authentication with best practices"
        },
        {
          step: 3,
          title: "Security Testing",
          description: "Comprehensive testing and vulnerability assessment"
        }
      ]}
      cta={{
        title: "Protect Your Users Today",
        description: "Implement enterprise-grade authentication for your application"
      }}
    />
  )
}