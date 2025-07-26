import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "W4 Digital - Tecnologia, Tráfego e Automações para Escalar seu Negócio",
  description:
    "Agência de soluções digitais que combina tecnologia, tráfego pago e automações para impulsionar vendas e escalar negócios. Diagnóstico gratuito disponível.",
  keywords:
    "agência digital, tráfego pago, automações, desenvolvimento web, marketing digital, Google Ads, Meta Ads, consultoria digital",
  authors: [{ name: "W4 Digital" }],
  creator: "W4 Digital",
  publisher: "W4 Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://w4digital.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "W4 Digital - Tecnologia, Tráfego e Automações para Escalar seu Negócio",
    description:
      "Agência de soluções digitais que combina tecnologia, tráfego pago e automações para impulsionar vendas e escalar negócios.",
    url: "https://w4digital.com.br",
    siteName: "W4 Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "W4 Digital - Soluções Digitais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "W4 Digital - Tecnologia, Tráfego e Automações",
    description: "Agência de soluções digitais para escalar seu negócio",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7f1d1d" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "W4 Digital",
              description:
                "Agência de soluções digitais que combina tecnologia, tráfego pago e automações para impulsionar vendas e escalar negócios.",
              url: "https://w4digital.com.br",
              logo: "https://w4digital.com.br/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: ["https://www.instagram.com/w4digital", "https://www.linkedin.com/company/w4digital"],
              service: [
                {
                  "@type": "Service",
                  name: "Tráfego Pago",
                  description: "Campanhas otimizadas no Google Ads e Meta Ads com foco em performance e ROI",
                },
                {
                  "@type": "Service",
                  name: "Desenvolvimento Web",
                  description: "Sites, sistemas e aplicações sob medida para otimizar sua operação",
                },
                {
                  "@type": "Service",
                  name: "Automações",
                  description: "Integrações e automações que economizam tempo e aumentam vendas",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
