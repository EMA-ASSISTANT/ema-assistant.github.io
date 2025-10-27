"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"

export function FAQ() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  const faqs = [
    {
      question: t.faq.howItWorks,
      answer: t.faq.howItWorksAnswer,
    },
    {
      question: t.faq.privacy,
      answer: t.faq.privacyAnswer,
    },
    {
      question: t.faq.freeVersion,
      answer: t.faq.freeVersionAnswer,
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {t.faq.title} <span className="text-primary">{t.faq.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass px-6 rounded-xl border-0">
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center glass p-6 rounded-xl">
            <p className="text-muted-foreground mb-4">{t.faq.moreQuestions}</p>
            <Button variant="outline" asChild>
              <a href="#contact">{t.faq.contactUs}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
