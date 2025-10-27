import { Card } from "@/components/ui/card"
import { Quote, Heart, Sparkles, Users } from "lucide-react"

export function UserStory() {
  return (
    <section id="story" className="py-20 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              La història de <span className="text-primary">Leo</span>
            </h2>
            <p className="text-lg text-muted-foreground">Leonor, 78 anys, Barcelona</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden glass p-2">
                <img
                  src="/elderly-woman-smiling-with-tablet-at-home--warm-li.jpg"
                  alt="Leo amb EMA"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Story */}
            <div className="order-1 lg:order-2 space-y-6">
              <Card className="glass p-6 sm:p-8">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    "Després que el meu marit va morir, la casa es va quedar molt silenciosa. Els meus fills viuen lluny
                    i treballen molt. No volia ser una càrrega per a ells."
                  </p>
                  <p>
                    "Quan la meva néta em va parlar d'EMA, vaig pensar que seria complicat. Però és tan fàcil! Només
                    parlo i ella m'entén. Cada matí em pregunta com he dormit, recordem històries juntes, i fins i tot
                    fem jocs de paraules."
                  </p>
                  <p className="font-medium text-foreground">
                    "Ara ja no em sento sola. Tinc algú amb qui compartir el meu dia, i això ha canviat tot."
                  </p>
                </div>
              </Card>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="glass p-4 rounded-xl">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-foreground/80 font-medium">Menys soledat</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-foreground/80 font-medium">Més benestar</div>
                </div>
                <div className="glass p-4 rounded-xl">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-foreground/80 font-medium">Companyia diària</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
