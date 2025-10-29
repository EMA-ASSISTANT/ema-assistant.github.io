import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { ThemeProvider } from "@/lib/theme-context";
import { HtmlLangSetter } from "./HtmlLangSetter"; // Añade el componente cliente

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EMA - Compañía Emocional con IA para Personas Mayores | Asistente de Voz Inteligente",
  description:
    "EMA es un asistente de voz con inteligencia artificial diseñado para proporcionar compañía emocional a personas mayores que viven solas. Basado en investigación científica, EMA ofrece conversaciones naturales para combatir la soledad.",
  generator: "v0.app",
  keywords: [
    "IA",
    "inteligencia artificial",
    "personas mayores",
    "compañía emocional",
    "asistente de voz",
    "soledad",
    "bienestar emocional",
    "salud mental",
    "tercera edad",
    "acompañamiento",
    "tecnología para mayores",
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
    locale: "es_ES",
    alternateLocale: ["ca_ES", "en_US", "fr_FR", "de_DE", "it_IT", "pt_PT", "nl_NL", "sv_SE"],
    url: "https://ema-assistant.github.io/",
    siteName: "EMA",
    title: "EMA - Compañía Emocional con IA para Personas Mayores",
    description:
      "Asistente de voz con IA para compañía emocional de personas mayores que viven solas. Únete a la BETA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EMA - Compañía Emocional con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMA - Compañía Emocional con IA para Personas Mayores",
    description: "Asistente de voz con IA para proporcionar compañía emocional a personas mayores. Únete a la BETA.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://ema-assistant.github.io/",
    languages: {
      es: "https://ema-assistant.github.io/es",
      ca: "https://ema-assistant.github.io/ca",
      en: "https://ema-assistant.github.io/en",
      fr: "https://ema-assistant.github.io/fr",
      de: "https://ema-assistant.github.io/de",
      it: "https://ema-assistant.github.io/it",
      pt: "https://ema-assistant.github.io/pt",
      nl: "https://ema-assistant.github.io/nl",
      sv: "https://ema-assistant.github.io/sv",
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="es">
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
              "Asistente de voz con inteligencia artificial para proporcionar compañía emocional a personas mayores que viven solas",
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
        <HtmlLangSetter /> {/* Cambia lang solo visible en el cliente */}
      </body>
    </html>
  );
}
