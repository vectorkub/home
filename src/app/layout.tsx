import type { Metadata } from "next"
import "./globals.css"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeScript } from "./theme-script"

export const metadata: Metadata = {
  title: "Home - VectorKub",
  description: "Professional web services including website development, payment systems, authentication, and AI solutions",
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="min-h-full">
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider defaultTheme="light">
          <Navigation />
          <main className="mt-16 flex min-h-screen flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
