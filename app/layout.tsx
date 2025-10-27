import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "EMA - Companyia Emocional amb IA per a Gent Gran | Assistent de Veu Intel·ligent",
  description:
    "EMA és un assistent de veu amb intel·ligència artificial dissenyat per proporcionar companyia emocional a persones grans que viuen soles. Basat en investigació científica, EMA ofereix converses naturals per combatre la solitud.",
  generator: "v0.app",
  keywords: [
    "IA",
    "intel·ligència artificial",
    "gent gran",
    "persones grans",
    "companyia emocional",
    "assistent de veu",
    "solitud",
    "benestar emocional",
    "salut mental",
    "tercera edat",
    "acompanyament",
    "tecnologia per gent gran",
    "AI companion",
    "elderly care",
    "emotional support",
  ],
  authors: [{ name: "EMA Team" }],
  creator: "EMA",
  publisher: "EMA",
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
  openGraph: {
    type: "website",
    locale: "ca_ES",
    alternateLocale: ["es_ES", "en_US", "fr_FR", "de_DE", "it_IT", "pt_PT", "nl_NL", "sv_SE"],
    url: "https://ema.cat",
    siteName: "EMA",
    title: "EMA - Companyia Emocional amb IA per a Gent Gran",
    description:
      "Assistent de veu amb intel·ligència artificial per proporcionar companyia emocional a persones grans que viuen soles. Úneix-te a la BETA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EMA - Companyia Emocional amb IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMA - Companyia Emocional amb IA per a Gent Gran",
    description: "Assistent de veu amb IA per proporcionar companyia emocional a persones grans. Úneix-te a la BETA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ema.cat",
    languages: {
      ca: "https://ema.cat/ca",
      es: "https://ema.cat/es",
      en: "https://ema.cat/en",
      fr: "https://ema.cat/fr",
      de: "https://ema.cat/de",
      it: "https://ema.cat/it",
      pt: "https://ema.cat/pt",
      nl: "https://ema.cat/nl",
      sv: "https://ema.cat/sv",
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="ca">
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        {/* Structured Data for SEO */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "EMA",
            applicationCategory: "HealthApplication",
            description:
              "Assistent de veu amb intel·ligència artificial per proporcionar companyia emocional a persones grans que viuen soles",
            operatingSystem: "All",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "EUR",
              availability: "https://schema.org/InDevelopment",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "1",
            },
          })}
        </Script>
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
