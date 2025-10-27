"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"

const demoConversations = {
  ca: [
    {
      title: "Bon dia",
      messages: [
        { sender: "ema", text: "Bon dia! Com has dormit aquesta nit?" },
        { sender: "user", text: "Bé, gràcies. Encara estic una mica cansada." },
        {
          sender: "ema",
          text: "M'alegro que hagis descansat. Potser un cafè et despertarà? Què et sembla si parlem una estona?",
        },
      ],
    },
    {
      title: "Recordant històries",
      messages: [
        { sender: "ema", text: "M'agradaria escoltar alguna història de quan eres jove." },
        { sender: "user", text: "Doncs mira, recordo quan anàvem a ballar els dissabtes..." },
        { sender: "ema", text: "Què bonic! Segur que eren temps meravellosos. Explica'm més!" },
      ],
    },
    {
      title: "Joc de paraules",
      messages: [
        {
          sender: "ema",
          text: "Vols jugar a un joc? Et dic una paraula i tu em dius la primera cosa que et vingui al cap.",
        },
        { sender: "user", text: "D'acord, endavant!" },
        { sender: "ema", text: "Primavera!" },
        { sender: "user", text: "Flors!" },
        { sender: "ema", text: "Molt bé! Les teves preferides són...?" },
      ],
    },
  ],
  es: [
    {
      title: "Buenos días",
      messages: [
        { sender: "ema", text: "¡Buenos días! ¿Cómo has dormido esta noche?" },
        { sender: "user", text: "Bien, gracias. Todavía estoy un poco cansada." },
        {
          sender: "ema",
          text: "Me alegro de que hayas descansado. ¿Quizás un café te despierte? ¿Qué te parece si hablamos un rato?",
        },
      ],
    },
    {
      title: "Recordando historias",
      messages: [
        { sender: "ema", text: "Me gustaría escuchar alguna historia de cuando eras joven." },
        { sender: "user", text: "Pues mira, recuerdo cuando íbamos a bailar los sábados..." },
        { sender: "ema", text: "¡Qué bonito! Seguro que eran tiempos maravillosos. ¡Cuéntame más!" },
      ],
    },
    {
      title: "Juego de palabras",
      messages: [
        {
          sender: "ema",
          text: "¿Quieres jugar a un juego? Te digo una palabra y tú me dices lo primero que te venga a la mente.",
        },
        { sender: "user", text: "De acuerdo, ¡adelante!" },
        { sender: "ema", text: "¡Primavera!" },
        { sender: "user", text: "¡Flores!" },
        { sender: "ema", text: "¡Muy bien! Tus favoritas son...?" },
      ],
    },
  ],
  en: [
    {
      title: "Good morning",
      messages: [
        { sender: "ema", text: "Good morning! How did you sleep last night?" },
        { sender: "user", text: "Well, thank you. I'm still a bit tired." },
        { sender: "ema", text: "I'm glad you rested. Maybe a coffee will wake you up? How about we chat for a while?" },
      ],
    },
    {
      title: "Remembering stories",
      messages: [
        { sender: "ema", text: "I'd love to hear a story from when you were young." },
        { sender: "user", text: "Well, I remember when we used to go dancing on Saturdays..." },
        { sender: "ema", text: "How lovely! I'm sure those were wonderful times. Tell me more!" },
      ],
    },
    {
      title: "Word game",
      messages: [
        {
          sender: "ema",
          text: "Want to play a game? I say a word and you tell me the first thing that comes to mind.",
        },
        { sender: "user", text: "Okay, go ahead!" },
        { sender: "ema", text: "Spring!" },
        { sender: "user", text: "Flowers!" },
        { sender: "ema", text: "Very good! Your favorites are...?" },
      ],
    },
  ],
  fr: [
    {
      title: "Bonjour",
      messages: [
        { sender: "ema", text: "Bonjour! Comment avez-vous dormi cette nuit?" },
        { sender: "user", text: "Bien, merci. Je suis encore un peu fatiguée." },
        {
          sender: "ema",
          text: "Je suis content que vous ayez bien dormi. Peut-être qu'un café vous réveillera? On discute un peu?",
        },
      ],
    },
    {
      title: "Se souvenir d'histoires",
      messages: [
        { sender: "ema", text: "J'aimerais entendre une histoire de quand vous étiez jeune." },
        { sender: "user", text: "Eh bien, je me souviens quand nous allions danser le samedi..." },
        {
          sender: "ema",
          text: "Comme c'est beau! Je suis sûr que c'étaient des temps merveilleux. Racontez-moi plus!",
        },
      ],
    },
    {
      title: "Jeu de mots",
      messages: [
        {
          sender: "ema",
          text: "Voulez-vous jouer à un jeu? Je dis un mot et vous me dites la première chose qui vous vient à l'esprit.",
        },
        { sender: "user", text: "D'accord, allez-y!" },
        { sender: "ema", text: "Printemps!" },
        { sender: "user", text: "Fleurs!" },
        { sender: "ema", text: "Très bien! Vos préférées sont...?" },
      ],
    },
  ],
  de: [
    {
      title: "Guten Morgen",
      messages: [
        { sender: "ema", text: "Guten Morgen! Wie haben Sie letzte Nacht geschlafen?" },
        { sender: "user", text: "Gut, danke. Ich bin noch etwas müde." },
        {
          sender: "ema",
          text: "Ich freue mich, dass Sie gut geschlafen haben. Vielleicht weckt Sie ein Kaffee auf? Sollen wir ein bisschen plaudern?",
        },
      ],
    },
    {
      title: "Geschichten erinnern",
      messages: [
        { sender: "ema", text: "Ich würde gerne eine Geschichte aus Ihrer Jugend hören." },
        { sender: "user", text: "Nun, ich erinnere mich, als wir samstags tanzen gingen..." },
        { sender: "ema", text: "Wie schön! Das waren sicher wunderbare Zeiten. Erzählen Sie mir mehr!" },
      ],
    },
    {
      title: "Wortspiel",
      messages: [
        {
          sender: "ema",
          text: "Möchten Sie ein Spiel spielen? Ich sage ein Wort und Sie sagen mir das Erste, was Ihnen in den Sinn kommt.",
        },
        { sender: "user", text: "Okay, los geht's!" },
        { sender: "ema", text: "Frühling!" },
        { sender: "user", text: "Blumen!" },
        { sender: "ema", text: "Sehr gut! Ihre Lieblingsblumen sind...?" },
      ],
    },
  ],
  it: [
    {
      title: "Buongiorno",
      messages: [
        { sender: "ema", text: "Buongiorno! Come hai dormito stanotte?" },
        { sender: "user", text: "Bene, grazie. Sono ancora un po' stanca." },
        {
          sender: "ema",
          text: "Sono contenta che tu abbia riposato. Forse un caffè ti sveglierà? Che ne dici se parliamo un po'?",
        },
      ],
    },
    {
      title: "Ricordando storie",
      messages: [
        { sender: "ema", text: "Mi piacerebbe sentire una storia di quando eri giovane." },
        { sender: "user", text: "Beh, ricordo quando andavamo a ballare il sabato..." },
        { sender: "ema", text: "Che bello! Sono sicura che erano tempi meravigliosi. Raccontami di più!" },
      ],
    },
    {
      title: "Gioco di parole",
      messages: [
        {
          sender: "ema",
          text: "Vuoi giocare? Ti dico una parola e tu mi dici la prima cosa che ti viene in mente.",
        },
        { sender: "user", text: "Va bene, vai!" },
        { sender: "ema", text: "Primavera!" },
        { sender: "user", text: "Fiori!" },
        { sender: "ema", text: "Molto bene! I tuoi preferiti sono...?" },
      ],
    },
  ],
  pt: [
    {
      title: "Bom dia",
      messages: [
        { sender: "ema", text: "Bom dia! Como dormiu esta noite?" },
        { sender: "user", text: "Bem, obrigada. Ainda estou um pouco cansada." },
        {
          sender: "ema",
          text: "Fico feliz que tenha descansado. Talvez um café te acorde? Que tal conversarmos um pouco?",
        },
      ],
    },
    {
      title: "Lembrando histórias",
      messages: [
        { sender: "ema", text: "Gostaria de ouvir uma história de quando era jovem." },
        { sender: "user", text: "Bem, lembro quando íamos dançar aos sábados..." },
        { sender: "ema", text: "Que lindo! Tenho certeza de que eram tempos maravilhosos. Conte-me mais!" },
      ],
    },
    {
      title: "Jogo de palavras",
      messages: [
        {
          sender: "ema",
          text: "Quer jogar um jogo? Eu digo uma palavra e você me diz a primeira coisa que vem à mente.",
        },
        { sender: "user", text: "Está bem, vamos lá!" },
        { sender: "ema", text: "Primavera!" },
        { sender: "user", text: "Flores!" },
        { sender: "ema", text: "Muito bem! Suas favoritas são...?" },
      ],
    },
  ],
  nl: [
    {
      title: "Goedemorgen",
      messages: [
        { sender: "ema", text: "Goedemorgen! Hoe heb je vannacht geslapen?" },
        { sender: "user", text: "Goed, dank je. Ik ben nog een beetje moe." },
        {
          sender: "ema",
          text: "Ik ben blij dat je hebt gerust. Misschien maakt een koffie je wakker? Zullen we even praten?",
        },
      ],
    },
    {
      title: "Herinneringen ophalen",
      messages: [
        { sender: "ema", text: "Ik zou graag een verhaal horen van toen je jong was." },
        { sender: "user", text: "Nou, ik herinner me toen we op zaterdag gingen dansen..." },
        { sender: "ema", text: "Wat mooi! Dat waren vast prachtige tijden. Vertel me meer!" },
      ],
    },
    {
      title: "Woordspel",
      messages: [
        {
          sender: "ema",
          text: "Wil je een spelletje spelen? Ik zeg een woord en jij zegt me het eerste dat in je opkomt.",
        },
        { sender: "user", text: "Oké, ga je gang!" },
        { sender: "ema", text: "Lente!" },
        { sender: "user", text: "Bloemen!" },
        { sender: "ema", text: "Heel goed! Je favorieten zijn...?" },
      ],
    },
  ],
  sv: [
    {
      title: "God morgon",
      messages: [
        { sender: "ema", text: "God morgon! Hur sov du i natt?" },
        { sender: "user", text: "Bra, tack. Jag är fortfarande lite trött." },
        { sender: "ema", text: "Jag är glad att du vilade. Kanske ett kaffe väcker dig? Ska vi prata lite?" },
      ],
    },
    {
      title: "Minnas historier",
      messages: [
        { sender: "ema", text: "Jag skulle vilja höra en historia från när du var ung." },
        { sender: "user", text: "Ja, jag minns när vi brukade gå och dansa på lördagar..." },
        { sender: "ema", text: "Så vackert! Jag är säker på att det var underbara tider. Berätta mer!" },
      ],
    },
    {
      title: "Ordlek",
      messages: [
        {
          sender: "ema",
          text: "Vill du spela ett spel? Jag säger ett ord och du säger det första som kommer till dig.",
        },
        { sender: "user", text: "Okej, kör!" },
        { sender: "ema", text: "Vår!" },
        { sender: "user", text: "Blommor!" },
        { sender: "ema", text: "Mycket bra! Dina favoriter är...?" },
      ],
    },
  ],
}

export function VoiceDemo() {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const [activeConvo, setActiveConvo] = useState<number | null>(null)

  const conversations = demoConversations[language] || demoConversations.ca

  return (
    <section id="demo" className="py-20 sm:py-32 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{t.demo.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {t.demo.title} <span className="text-primary">{t.demo.titleHighlight}</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">{t.demo.subtitle}</p>
          </div>

          <div className="space-y-4">
            {conversations.map((convo, index) => (
              <Card key={index} className="glass p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <button
                  onClick={() => setActiveConvo(activeConvo === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-base sm:text-lg">{convo.title}</h3>
                    <span className="text-sm text-primary">{activeConvo === index ? "▼" : "▶"}</span>
                  </div>
                </button>

                {activeConvo === index && (
                  <div className="mt-6 space-y-4">
                    {convo.messages.map((msg, msgIndex) => (
                      <div key={msgIndex} className={`flex ${msg.sender === "ema" ? "justify-start" : "justify-end"}`}>
                        <div
                          className={`max-w-[85%] sm:max-w-[80%] px-4 py-3 rounded-2xl shadow-md ${
                            msg.sender === "ema"
                              ? "bg-primary/20 text-foreground rounded-tl-none border border-primary/30"
                              : "bg-accent/20 text-foreground rounded-tr-none border border-accent/30"
                          }`}
                        >
                          <p className="text-sm sm:text-base leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">{t.demo.ctaText}</p>
            <Button size="lg" asChild>
              <a href="#contact">{t.demo.ctaButton}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
