"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { User, Building2, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation, type Language } from "@/lib/translations"

const languages = [
  { code: "ca" as Language, name: "Català" },
  { code: "es" as Language, name: "Español" },
  { code: "en" as Language, name: "English" },
  { code: "fr" as Language, name: "Français" },
  { code: "de" as Language, name: "Deutsch" },
  { code: "it" as Language, name: "Italiano" },
  { code: "pt" as Language, name: "Português" },
  { code: "nl" as Language, name: "Nederlands" },
  { code: "sv" as Language, name: "Svenska" },
]

const ageRanges = ["< 60", "60-64", "65-69", "70-74", "75-79", "80-84", "85-89", "90-94", "95+"]

export function ContactForm() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const [userType, setUserType] = useState<"individual" | "organization">("individual")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organizationName, setOrganizationName] = useState("")
  const [preferredLanguage, setPreferredLanguage] = useState("")
  const [ageRange, setAgeRange] = useState("")
  const [difficulties, setDifficulties] = useState<string[]>([])
  const [paymentFrequency, setPaymentFrequency] = useState("monthly")
  const [paymentAmount, setPaymentAmount] = useState([50])

  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    if (userType === "individual") {
      setIsFormValid(name.trim() !== "" && email.trim() !== "" && preferredLanguage !== "" && ageRange !== "")
    } else {
      setIsFormValid(name.trim() !== "" && email.trim() !== "" && organizationName.trim() !== "")
    }
  }, [userType, name, email, organizationName, preferredLanguage, ageRange])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      userType,
      name,
      email,
      organizationName,
      preferredLanguage,
      ageRange,
      difficulties,
      paymentFrequency,
      paymentAmount: paymentAmount[0],
      message: formData.get("message"),
    }

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL

      if (scriptUrl) {
        const response = await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        console.log("[v0] Form submitted to Google Sheets")
      } else {
        console.log("[v0] Google Sheets URL not configured, form data:", data)
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
    }

    setIsSubmitting(false)
    alert(
      language === "ca"
        ? "Gràcies! Ens posarem en contacte aviat."
        : language === "es"
          ? "¡Gracias! Nos pondremos en contacto pronto."
          : "Thank you! We'll be in touch soon.",
    )

    setName("")
    setEmail("")
    setOrganizationName("")
    setPreferredLanguage("")
    setAgeRange("")
    setDifficulties([])
    setPaymentFrequency("monthly")
    setPaymentAmount([50])
  }

  const toggleDifficulty = (difficulty: string) => {
    setDifficulties((prev) =>
      prev.includes(difficulty) ? prev.filter((d) => d !== difficulty) : [...prev, difficulty],
    )
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {t.form.title} <span className="text-primary">{t.form.titleHighlight}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">{t.form.subtitle}</p>
          </div>

          <Card className="glass p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">{t.form.userType}</Label>
                <RadioGroup
                  value={userType}
                  onValueChange={(value) => setUserType(value as "individual" | "organization")}
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="individual"
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      userType === "individual"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="individual" id="individual" />
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t.form.individual}</div>
                        <div className="text-sm text-muted-foreground">{t.form.individualDesc}</div>
                      </div>
                    </div>
                  </Label>

                  <Label
                    htmlFor="organization"
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      userType === "organization"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="organization" id="organization" />
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">{t.form.organization}</div>
                        <div className="text-sm text-muted-foreground">{t.form.organizationDesc}</div>
                      </div>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {/* Form Fields */}
              <div className="space-y-2">
                <Label htmlFor="name">{t.form.name} *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Maria García"
                  required
                  className="glass"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.form.email} *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="maria@exemple.cat"
                  required
                  className="glass"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {userType === "organization" && (
                <div className="space-y-2">
                  <Label htmlFor="organization-name">{t.form.orgName} *</Label>
                  <Input
                    id="organization-name"
                    name="organization-name"
                    placeholder="Residència Sant Jordi"
                    required
                    className="glass"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                  />
                </div>
              )}

              {userType === "individual" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="language">{t.form.language} *</Label>
                    <Select value={preferredLanguage} onValueChange={setPreferredLanguage} required>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder={t.form.language} />
                      </SelectTrigger>
                      <SelectContent className="glass-strong">
                        {languages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">{t.form.age} *</Label>
                    <Select value={ageRange} onValueChange={setAgeRange} required>
                      <SelectTrigger className="glass">
                        <SelectValue placeholder={t.form.age} />
                      </SelectTrigger>
                      <SelectContent className="glass-strong">
                        {ageRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>{t.form.difficulties}</Label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { id: "hearing", label: t.form.difficultyHearing },
                        { id: "speech", label: t.form.difficultySpeech },
                        { id: "vision", label: t.form.difficultyVision },
                        { id: "motor", label: t.form.difficultyMotor },
                        { id: "cognitive", label: t.form.difficultyCognitive },
                      ].map((difficulty) => (
                        <div key={difficulty.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={difficulty.id}
                            checked={difficulties.includes(difficulty.id)}
                            onCheckedChange={() => toggleDifficulty(difficulty.id)}
                          />
                          <Label htmlFor={difficulty.id} className="text-sm font-normal cursor-pointer">
                            {difficulty.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 p-4 rounded-lg bg-muted/30">
                    <Label className="text-base font-semibold">{t.form.willingnessToPay}</Label>

                    <div className="space-y-2">
                      <Label htmlFor="frequency" className="text-sm">
                        {t.form.frequency}
                      </Label>
                      <Select value={paymentFrequency} onValueChange={setPaymentFrequency}>
                        <SelectTrigger className="glass">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-strong">
                          <SelectItem value="weekly">{t.form.weekly}</SelectItem>
                          <SelectItem value="monthly">{t.form.monthly}</SelectItem>
                          <SelectItem value="quarterly">{t.form.quarterly}</SelectItem>
                          <SelectItem value="annual">{t.form.annual}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="amount" className="text-sm">
                          {t.form.amount}
                        </Label>
                        <span className="text-lg font-semibold text-primary">{paymentAmount[0]}€</span>
                      </div>
                      <Slider
                        id="amount"
                        min={0}
                        max={500}
                        step={5}
                        value={paymentAmount}
                        onValueChange={setPaymentAmount}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0€</span>
                        <span>500€</span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">{t.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.form.message}
                  rows={4}
                  className="glass resize-none"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className={`w-full gap-2 font-semibold transition-all duration-300 ${
                    isFormValid && !isSubmitting
                      ? "bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-600/60 animate-pulse"
                      : "bg-gray-400 dark:bg-gray-600 text-gray-200 dark:text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? (
                    t.form.submitting
                  ) : (
                    <>
                      {t.form.submit}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">{t.form.privacy}</p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
