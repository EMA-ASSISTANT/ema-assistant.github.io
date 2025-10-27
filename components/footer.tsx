"use client"

import { Heart, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"
import { PrivacyDialog } from "./privacy-dialog"

export function Footer() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold">EMA</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.product}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#scientific" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.science}
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.benefits}
                </a>
              </li>
              <li>
                <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.demo}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.legal}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <PrivacyDialog type="privacy" />
              </li>
              <li>
                <PrivacyDialog type="terms" />
              </li>
              <li>
                <PrivacyDialog type="cookies" />
              </li>
              <li>
                <PrivacyDialog type="accessibility" />
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:ema.tech.help@gmail.com" className="hover:text-foreground transition-colors">
                  ema.tech.help@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} EMA. {t.footer.rights}
            </p>
            <p className="flex items-center gap-2">
              {t.footer.madeWith} <Heart className="h-4 w-4 text-accent fill-accent" /> {t.footer.madeFor}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
