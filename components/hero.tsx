"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {t.hero.title} <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 text-balance leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="#contact">
                  {t.hero.ctaPrimary}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base sm:text-lg px-6 sm:px-8 glass bg-transparent w-full sm:w-auto"
                asChild
              >
                <a href="#demo">{t.hero.ctaSecondary}</a>
              </Button>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>{t.hero.trust1}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>{t.hero.trust2}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>{t.hero.trust3}</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px] sm:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden glass">
            <img
              src="/elderly-couple-illustrated-tablet.jpg"
              alt="Parella gran al menjador amb tauleta il·luminant els seus cors"
              className="w-full h-full object-cover"
            />
            {/* Enhanced glow effect for the heart illumination */}
            <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-primary/20 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-foreground/40" />
        </div>
      </div>
    </section>
  )
}
