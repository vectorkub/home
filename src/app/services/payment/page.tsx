import ServicePageTemplate from "../../../components/service-page-template"

export default function PaymentPage() {
  return (
    <ServicePageTemplate
      title="Payment Integration Services"
      description="Secure, reliable payment solutions that help you accept payments from customers worldwide. We integrate the best payment gateways tailored to your business needs."
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
      features={[
        {
          title: "Multiple Gateways",
          description: "Support for Stripe, PayPal, Square, and more",
          icon: "💳"
        },
        {
          title: "PCI Compliant",
          description: "Industry-standard security for all transactions",
          icon: "🔒"
        },
        {
          title: "Global Payments",
          description: "Accept payments in multiple currencies",
          icon: "🌍"
        },
        {
          title: "Recurring Billing",
          description: "Subscription and recurring payment support",
          icon: "🔄"
        },
        {
          title: "Real-time Analytics",
          description: "Track payments and revenue in real-time",
          icon: "📊"
        },
        {
          title: "Mobile Optimized",
          description: "Seamless checkout on all devices",
          icon: "📱"
        }
      ]}
      process={[
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Understanding your payment needs and compliance requirements"
        },
        {
          step: 2,
          title: "Integration",
          description: "Implementing secure payment gateways with your platform"
        },
        {
          step: 3,
          title: "Testing & Launch",
          description: "Thorough testing and smooth production deployment"
        }
      ]}
      cta={{
        title: "Secure Your Payment Processing",
        description: "Start accepting payments with confidence and ease"
      }}
    />
  )
}