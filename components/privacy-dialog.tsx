"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"
import { useTranslation } from "@/lib/translations"

interface PrivacyDialogProps {
  type: "privacy" | "terms" | "cookies" | "accessibility"
}

export function PrivacyDialog({ type }: PrivacyDialogProps) {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const [open, setOpen] = useState(false)

  const getTitle = () => {
    switch (type) {
      case "privacy":
        return t.footer.privacy
      case "terms":
        return t.footer.terms
      case "cookies":
        return t.footer.cookies
      case "accessibility":
        return t.footer.accessibility
    }
  }

  const getContent = () => {
    if (type === "privacy") {
      return (
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            {language === "ca"
              ? "EMA està en fase de desenvolupament (BETA). Durant aquesta fase:"
              : language === "es"
                ? "EMA está en fase de desarrollo (BETA). Durante esta fase:"
                : "EMA is in development phase (BETA). During this phase:"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {language === "ca"
                ? "No emmagatzemem cap dada personal."
                : language === "es"
                  ? "No almacenamos ningún dato personal."
                  : "We do not store any personal data."}
            </li>
            <li>
              {language === "ca"
                ? "El MVP funciona en local al teu dispositiu."
                : language === "es"
                  ? "El MVP funciona en local en tu dispositivo."
                  : "The MVP runs locally on your device."}
            </li>
            <li>
              {language === "ca"
                ? "Les dades no surten a l'exterior del teu dispositiu."
                : language === "es"
                  ? "Los datos no salen al exterior de tu dispositivo."
                  : "Data does not leave your device."}
            </li>
            <li>
              {language === "ca"
                ? "Les dades del formulari de contacte s'utilitzen únicament per contactar-te sobre la BETA."
                : language === "es"
                  ? "Los datos del formulario de contacto se utilizan únicamente para contactarte sobre la BETA."
                  : "Contact form data is used only to contact you about the BETA."}
            </li>
          </ul>
        </div>
      )
    }

    if (type === "terms") {
      return (
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            {language === "ca"
              ? "EMA és un projecte en fase BETA. En participar en la BETA:"
              : language === "es"
                ? "EMA es un proyecto en fase BETA. Al participar en la BETA:"
                : "EMA is a project in BETA phase. By participating in the BETA:"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {language === "ca"
                ? "Acceptes que el servei està en desenvolupament i pot contenir errors."
                : language === "es"
                  ? "Aceptas que el servicio está en desarrollo y puede contener errores."
                  : "You accept that the service is in development and may contain errors."}
            </li>
            <li>
              {language === "ca"
                ? "No hi ha cap cost associat a la participació en la BETA."
                : language === "es"
                  ? "No hay ningún coste asociado a la participación en la BETA."
                  : "There is no cost associated with BETA participation."}
            </li>
            <li>
              {language === "ca"
                ? "Pots deixar de participar en qualsevol moment."
                : language === "es"
                  ? "Puedes dejar de participar en cualquier momento."
                  : "You can stop participating at any time."}
            </li>
            <li>
              {language === "ca"
                ? "EMA no és un servei mèdic ni substitueix l'atenció professional."
                : language === "es"
                  ? "EMA no es un servicio médico ni sustituye la atención profesional."
                  : "EMA is not a medical service and does not replace professional care."}
            </li>
          </ul>
        </div>
      )
    }

    if (type === "cookies") {
      return (
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            {language === "ca"
              ? "Aquest lloc web utilitza cookies mínimes necessàries per al seu funcionament:"
              : language === "es"
                ? "Este sitio web utiliza cookies mínimas necesarias para su funcionamiento:"
                : "This website uses minimal cookies necessary for its operation:"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {language === "ca"
                ? "Cookies de preferència d'idioma."
                : language === "es"
                  ? "Cookies de preferencia de idioma."
                  : "Language preference cookies."}
            </li>
            <li>
              {language === "ca"
                ? "Cookies de preferència de tema (clar/fosc)."
                : language === "es"
                  ? "Cookies de preferencia de tema (claro/oscuro)."
                  : "Theme preference cookies (light/dark)."}
            </li>
          </ul>
          <p>
            {language === "ca"
              ? "No utilitzem cookies de seguiment ni analítiques durant la fase BETA."
              : language === "es"
                ? "No utilizamos cookies de seguimiento ni analíticas durante la fase BETA."
                : "We do not use tracking or analytics cookies during the BETA phase."}
          </p>
        </div>
      )
    }

    if (type === "accessibility") {
      return (
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            {language === "ca"
              ? "EMA està dissenyat per ser accessible per a tothom, especialment per a persones grans amb diferents capacitats:"
              : language === "es"
                ? "EMA está diseñado para ser accesible para todos, especialmente para personas mayores con diferentes capacidades:"
                : "EMA is designed to be accessible to everyone, especially for elderly people with different abilities:"}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              {language === "ca"
                ? "Interfície de veu natural per a persones amb dificultats visuals o motrius."
                : language === "es"
                  ? "Interfaz de voz natural para personas con dificultades visuales o motrices."
                  : "Natural voice interface for people with visual or motor difficulties."}
            </li>
            <li>
              {language === "ca"
                ? "Suport per a múltiples idiomes i dialectes."
                : language === "es"
                  ? "Soporte para múltiples idiomas y dialectos."
                  : "Support for multiple languages and dialects."}
            </li>
            <li>
              {language === "ca"
                ? "Adaptació a diferents nivells d'audició."
                : language === "es"
                  ? "Adaptación a diferentes niveles de audición."
                  : "Adaptation to different hearing levels."}
            </li>
            <li>
              {language === "ca"
                ? "Funcionament sense connexió a internet per garantir l'accés universal."
                : language === "es"
                  ? "Funcionamiento sin conexión a internet para garantizar el acceso universal."
                  : "Offline functionality to ensure universal access."}
            </li>
          </ul>
          <p>
            {language === "ca"
              ? "Si tens suggeriments per millorar l'accessibilitat d'EMA, contacta'ns a ema.tech.help@gmail.com"
              : language === "es"
                ? "Si tienes sugerencias para mejorar la accesibilidad de EMA, contáctanos en ema.tech.help@gmail.com"
                : "If you have suggestions to improve EMA's accessibility, contact us at ema.tech.help@gmail.com"}
          </p>
        </div>
      )
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-muted-foreground hover:text-foreground transition-colors text-left">
          {getTitle()}
        </button>
      </DialogTrigger>
      <DialogContent className="glass-strong max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        {getContent()}
      </DialogContent>
    </Dialog>
  )
}
