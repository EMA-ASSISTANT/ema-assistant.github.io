import { Card } from "@/components/ui/card"
import { MessageCircle, Clock, Shield, Smile, Brain, Phone } from "lucide-react"

const benefits = [
  {
    icon: MessageCircle,
    title: "Converses naturals",
    description: "Parla amb EMA com ho faries amb una amiga. Entén el context i recorda les vostres converses.",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "EMA està sempre aquí per tu, de dia o de nit, quan més ho necessitis.",
  },
  {
    icon: Shield,
    title: "Privacitat total",
    description: "Les teves converses són privades i segures. Mai compartim la teva informació.",
  },
  {
    icon: Smile,
    title: "Suport emocional",
    description: "EMA escolta amb empatia i ofereix companys en moments de solitud.",
  },
  {
    icon: Brain,
    title: "Estimulació cognitiva",
    description: "Jocs, endevinalles i converses que mantenen la ment activa i àgil.",
  },
  {
    icon: Phone,
    title: "Fàcil d'usar",
    description: "Només cal parlar. No necessites saber de tecnologia per utilitzar EMA.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Més que un assistent, una <span className="text-primary">companya</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
            EMA està dissenyada específicament per acompanyar i millorar el benestar emocional de la gent gran
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="glass p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
