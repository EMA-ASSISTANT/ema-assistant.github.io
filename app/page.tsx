import { Hero } from "@/components/hero"
import { ScientificBacking } from "@/components/scientific-backing"
import { Benefits } from "@/components/benefits"
import { UserStory } from "@/components/user-story"
import { VoiceDemo } from "@/components/voice-demo"
import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "EMA - Companyia Emocional amb IA per a Gent Gran | Úneix-te a la BETA",
  description:
    "Descobreix EMA, l'assistent de veu amb IA que proporciona companyia emocional a persones grans. Basat en investigació científica. Úneix-te a la nostra BETA gratuïta i ajuda'ns a democratitzar l'accés a la IA.",
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScientificBacking />
      <Benefits />
      <UserStory />
      <VoiceDemo />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
