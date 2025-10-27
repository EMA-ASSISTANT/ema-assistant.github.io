"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"

const studies = [
  {
    icon: BookOpen,
    institution: "Universitat Oberta de Catalunya (UOC)",
    title: {
      ca: "Impacte de la IA conversacional en la solitud",
      es: "Impacto de la IA conversacional en la soledad",
      en: "Impact of conversational AI on loneliness",
      fr: "Impact de l'IA conversationnelle sur la solitude",
      de: "Auswirkungen von Konversations-KI auf Einsamkeit",
      it: "Impatto dell'IA conversazionale sulla solitudine",
      pt: "Impacto da IA conversacional na solidão",
      nl: "Impact van conversationele AI op eenzaamheid",
      sv: "Påverkan av konversations-AI på ensamhet",
    },
    finding: {
      ca: "85% dels estudis revisats mostren reducció directa de la solitud",
      es: "85% de los estudios revisados muestran reducción directa de la soledad",
      en: "85% of reviewed studies show direct reduction in loneliness",
      fr: "85% des études examinées montrent une réduction directe de la solitude",
      de: "85% der überprüften Studien zeigen eine direkte Reduzierung der Einsamkeit",
      it: "85% degli studi esaminati mostrano una riduzione diretta della solitudine",
      pt: "85% dos estudos revisados mostram redução direta da solidão",
      nl: "85% van de beoordeelde studies tonen directe vermindering van eenzaamheid",
      sv: "85% av de granskade studierna visar direkt minskning av ensamhet",
    },
    year: "2024",
    link: "https://www.uoc.edu/en/news/2024/benefits-and-challenges-of-voice-assistants-for-the-elderly",
  },
  {
    icon: Users,
    institution: "MIT AgeLab",
    title: {
      ca: "Tecnologia i envelliment actiu",
      es: "Tecnología y envejecimiento activo",
      en: "Technology and active aging",
      fr: "Technologie et vieillissement actif",
      de: "Technologie und aktives Altern",
      it: "Tecnologia e invecchiamento attivo",
      pt: "Tecnologia e envelhecimento ativo",
      nl: "Technologie en actief ouder worden",
      sv: "Teknologi och aktivt åldrande",
    },
    finding: {
      ca: "L'adopció de tecnologia conversacional augmenta la resiliència emocional",
      es: "La adopción de tecnología conversacional aumenta la resiliencia emocional",
      en: "Adoption of conversational technology increases emotional resilience",
      fr: "L'adoption de la technologie conversationnelle augmente la résilience émotionnelle",
      de: "Die Einführung von Konversationstechnologie erhöht die emotionale Resilienz",
      it: "L'adozione della tecnologia conversazionale aumenta la resilienza emotiva",
      pt: "A adoção de tecnologia conversacional aumenta a resiliência emocional",
      nl: "Adoptie van conversatietechnologie verhoogt emotionele veerkracht",
      sv: "Adoption av konversationsteknologi ökar emotionell motståndskraft",
    },
    year: "2020",
    link: "https://academic.oup.com/innovateage/article/4/Supplement_1/482/6038297",
  },
  {
    icon: TrendingUp,
    institution: "Journal of Medical Internet Research (JMIR)",
    title: {
      ca: "Salut mental i companys digitals",
      es: "Salud mental y compañeros digitales",
      en: "Mental health and digital companions",
      fr: "Santé mentale et compagnons numériques",
      de: "Psychische Gesundheit und digitale Begleiter",
      it: "Salute mentale e compagni digitali",
      pt: "Saúde mental e companheiros digitais",
      nl: "Geestelijke gezondheid en digitale metgezellen",
      sv: "Mental hälsa och digitala följeslagare",
    },
    finding: {
      ca: "56% reporten millora significativa del benestar després de 4 setmanes",
      es: "56% reportan mejora significativa del bienestar tras 4 semanas",
      en: "56% report significant improvement in wellbeing after 4 weeks",
      fr: "56% signalent une amélioration significative du bien-être après 4 semaines",
      de: "56% berichten von signifikanter Verbesserung des Wohlbefindens nach 4 Wochen",
      it: "56% riportano un miglioramento significativo del benessere dopo 4 settimane",
      pt: "56% relatam melhora significativa do bem-estar após 4 semanas",
      nl: "56% meldt significante verbetering van welzijn na 4 weken",
      sv: "56% rapporterar betydande förbättring av välbefinnande efter 4 veckor",
    },
    year: "2024",
    link: "https://www.jmir.org/2024/1/e50534/",
  },
]

export function ScientificBacking() {
  const { language } = useLanguage()
  const t = useTranslation(language)

  return (
    <section id="scientific" className="py-20 sm:py-32 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t.scientific.title} <span className="text-primary">{t.scientific.titleHighlight}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
            {t.scientific.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {studies.map((study, index) => {
            const Icon = study.icon
            return (
              <Card key={index} className="glass p-6 sm:p-8 hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{study.year}</span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary mb-2">{study.institution}</p>
                    <h3 className="text-lg font-semibold mb-3 text-balance">{study.title[language]}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.finding[language]}</p>
                  </div>

                  <a
                    href={study.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    {t.scientific.readStudy}
                  </a>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
