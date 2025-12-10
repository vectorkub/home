import type { Metadata } from "next"
import "./globals.css"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: "Vectorkub Services",
  description: "Professional web services including website development, payment systems, authentication, and AI solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#010101] text-white antialiased">
        <Navigation />
        <main className="mt-16 flex min-h-screen flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
