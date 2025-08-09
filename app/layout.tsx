import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "W4 Digital - Soluções Digitais Completas | Tráfego Pago, Desenvolvimento & Automações",
  description:
    "Agência líder em transformação digital. Especializados em tráfego pago, desenvolvimento web e automações. Aumente suas vendas em até 500% com nossas soluções comprovadas.",
  keywords: [
    "agência digital",
    "tráfego pago",
    "desenvolvimento web",
    "automações",
    "marketing digital",
    "Google Ads",
    "Meta Ads",
    "consultoria digital",
    "transformação digital",
    "ROI",
    "conversões",
    "leads qualificados",
    "vendas online",
    "e-commerce",
    "landing pages",
    "CRM",
    "funil de vendas",
  ].join(", "),
  authors: [{ name: "W4 Digital", url: "https://w4digital.com.br" }],
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
    title: "W4 Digital - Soluções Digitais Completas",
    description:
      "Agência líder em transformação digital. Aumente suas vendas em até 500% com nossas soluções comprovadas.",
    url: "https://w4digital.com.br",
    siteName: "W4 Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "W4 Digital - Transformação Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "W4 Digital - Soluções Digitais Completas",
    description: "Agência líder em transformação digital. Aumente suas vendas em até 500%",
    images: ["/og-image.jpg"],
    creator: "@w4digital",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
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
        <meta name="theme-color" content="#8B1538" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "W4 Digital",
              description:
                "Agência líder em transformação digital. Especializados em tráfego pago, desenvolvimento web e automações.",
              url: "https://w4digital.com.br",
              logo: "https://w4digital.com.br/logo-w4.png",
              foundingDate: "2020",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
                availableLanguage: ["Portuguese"],
                areaServed: "BR",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "SP",
                addressLocality: "São Paulo",
              },
              sameAs: [
                "https://www.instagram.com/w4digital",
                "https://www.linkedin.com/company/w4digital",
                "https://www.facebook.com/w4digital",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Tráfego Pago",
                  description: "Campanhas de alta performance no Google Ads e Meta Ads com foco em ROI",
                  provider: {
                    "@type": "Organization",
                    name: "W4 Digital",
                  },
                },
                {
                  "@type": "Service",
                  name: "Desenvolvimento Web",
                  description: "Sites e sistemas sob medida com tecnologia de ponta",
                  provider: {
                    "@type": "Organization",
                    name: "W4 Digital",
                  },
                },
                {
                  "@type": "Service",
                  name: "Automações",
                  description: "Automações inteligentes para otimizar processos e aumentar vendas",
                  provider: {
                    "@type": "Organization",
                    name: "W4 Digital",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
