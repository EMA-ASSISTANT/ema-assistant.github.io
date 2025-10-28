"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  isInitialized: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Detecta automáticamente el idioma preferido del navegador del usuario
 * Compatible con las configuraciones multiidioma y variantes regionales
 * @returns Language - Código de idioma detectado o fallback a catalán
 */
function getBrowserLanguage(): Language {
  // Protección para Server-Side Rendering
  if (typeof window === 'undefined') return "ca"
  
  // Idiomas soportados por EMA Assistant
  const supportedLanguages: Language[] = ["ca", "es", "en", "fr", "de", "it", "pt", "nl", "sv"]
  
  // Obtener lista completa de idiomas preferidos del navegador
  // navigator.languages incluye todos los idiomas en orden de preferencia
  const browserLanguages = navigator.languages || [navigator.language]
  
  // Paso 1: Buscar coincidencias exactas con códigos base (ej: "es", "en", "ca")
  for (const browserLang of browserLanguages) {
    const shortLang = browserLang.split('-')[0].toLowerCase() as Language
    if (supportedLanguages.includes(shortLang)) {
      console.log(`🌍 EMA: Idioma detectado del navegador: ${shortLang} (desde ${browserLang})`)
      return shortLang
    }
  }
  
  // Paso 2: Mapeo específico para variantes regionales y territoriales
  const languageMap: Record<string, Language> = {
    // Español y variantes hispanoamericanas
    'es-ES': 'es',  // España
    'es-MX': 'es',  // México
    'es-AR': 'es',  // Argentina
    'es-CO': 'es',  // Colombia
    'es-VE': 'es',  // Venezuela
    'es-PE': 'es',  // Perú
    'es-CL': 'es',  // Chile
    'es-EC': 'es',  // Ecuador
    'es-UY': 'es',  // Uruguay
    'es-PY': 'es',  // Paraguay
    'es-BO': 'es',  // Bolivia
    'es-CR': 'es',  // Costa Rica
    'es-PA': 'es',  // Panamá
    'es-GT': 'es',  // Guatemala
    'es-HN': 'es',  // Honduras
    'es-NI': 'es',  // Nicaragua
    'es-SV': 'es',  // El Salvador
    'es-DO': 'es',  // República Dominicana
    'es-CU': 'es',  // Cuba
    'es-PR': 'es',  // Puerto Rico
    
    // Catalán y territorios catalanoparlantes
    'ca-ES': 'ca',  // Catalunya, Illes Balears, Comunitat Valenciana
    'ca-AD': 'ca',  // Andorra
    'ca-FR': 'ca',  // Catalunya Nord (Rosselló, França)
    'ca-IT': 'ca',  // L'Alguer (Sardenya, Itàlia)
    
    // Inglés y variantes
    'en-US': 'en',  // Estados Unidos
    'en-GB': 'en',  // Reino Unido
    'en-CA': 'en',  // Canadá
    'en-AU': 'en',  // Australia
    'en-NZ': 'en',  // Nueva Zelanda
    'en-IE': 'en',  // Irlanda
    'en-ZA': 'en',  // Sudáfrica
    'en-IN': 'en',  // India
    
    // Francés y territorios francófonos
    'fr-FR': 'fr',  // Francia
    'fr-CA': 'fr',  // Canadá (Quebec)
    'fr-BE': 'fr',  // Bélgica
    'fr-CH': 'fr',  // Suiza
    'fr-LU': 'fr',  // Luxemburgo
    'fr-MC': 'fr',  // Mónaco
    
    // Alemán y regiones germanoparlantes
    'de-DE': 'de',  // Alemania
    'de-AT': 'de',  // Austria
    'de-CH': 'de',  // Suiza
    'de-LU': 'de',  // Luxemburgo
    'de-BE': 'de',  // Bélgica
    
    // Italiano y territorios italófonos
    'it-IT': 'it',  // Italia
    'it-CH': 'it',  // Suiza (Tesino)
    'it-SM': 'it',  // San Marino
    'it-VA': 'it',  // Vaticano
    
    // Portugués y comunidad lusófona
    'pt-PT': 'pt',  // Portugal
    'pt-BR': 'pt',  // Brasil
    'pt-AO': 'pt',  // Angola
    'pt-MZ': 'pt',  // Mozambique
    'pt-CV': 'pt',  // Cabo Verde
    'pt-GW': 'pt',  // Guinea-Bissau
    'pt-ST': 'pt',  // Santo Tomé y Príncipe
    'pt-TL': 'pt',  // Timor Oriental
    'pt-MO': 'pt',  // Macao
    
    // Neerlandés (holandés) y territorios
    'nl-NL': 'nl',  // Países Bajos
    'nl-BE': 'nl',  // Bélgica (Flandes)
    'nl-SR': 'nl',  // Surinam
    'nl-AW': 'nl',  // Aruba
    'nl-CW': 'nl',  // Curazao
    
    // Sueco y territorios
    'sv-SE': 'sv',  // Suecia
    'sv-FI': 'sv',  // Finlandia (sueco-finlandés)
    'sv-AX': 'sv',  // Islas Åland
  }
  
  // Paso 3: Buscar coincidencias específicas con región
  for (const browserLang of browserLanguages) {
    const normalizedLang = browserLang.toLowerCase()
    if (languageMap[normalizedLang]) {
      const detectedLang = languageMap[normalizedLang]
      console.log(`🌍 EMA: Idioma detectado por región: ${detectedLang} (desde ${browserLang})`)
      return detectedLang
    }
  }
  
  // Paso 4: Fallback inteligente basado en geolocalización o contexto
  // Si no se detecta nada, usar catalán como idioma por defecto del proyecto EMA
  console.log(`🌍 EMA: Usando idioma por defecto: ca (no se detectó coincidencia en ${browserLanguages.join(', ')})`)
  return "ca"
}

/**
 * Provider del contexto de idioma para EMA Assistant
 * Maneja la detección automática del idioma del navegador y la persistencia de preferencias
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ca")
  const [isInitialized, setIsInitialized] = useState(false)

  // Carga e inicialización del idioma al montar el componente
  useEffect(() => {
    const STORAGE_KEY = "ema-language"
    const saved = localStorage.getItem(STORAGE_KEY) as Language
    const validLanguages: Language[] = ["ca", "es", "en", "fr", "de", "it", "pt", "nl", "sv"]
    
    if (saved && validLanguages.includes(saved)) {
      // Caso 1: Usuario ya tiene preferencia guardada
      console.log(`💾 EMA: Cargando idioma guardado: ${saved}`)
      setLanguageState(saved)
    } else {
      // Caso 2: Primera visita - detección automática
      const browserLang = getBrowserLanguage()
      console.log(`🔍 EMA: Primera visita detectada, configurando idioma: ${browserLang}`)
      setLanguageState(browserLang)
      
      // Guardar la detección automática para futuras visitas
      localStorage.setItem(STORAGE_KEY, browserLang)
    }
    
    setIsInitialized(true)
  }, [])

  /**
   * Actualiza el idioma y persiste la preferencia del usuario
   * @param lang - Nuevo idioma seleccionado
   */
  const setLanguage = (lang: Language) => {
    console.log(`🔄 EMA: Cambiando idioma a: ${lang}`)
    setLanguageState(lang)
    localStorage.setItem("ema-language", lang)
    
    // Opcional: Notificar cambio para analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag?.('event', 'language_change', {
        'custom_parameter_language': lang
      })
    }
  }

  // Prevención de hydration mismatch entre servidor y cliente
  // Muestra idioma por defecto hasta completar la inicialización
  if (!isInitialized) {
    return (
      <LanguageContext.Provider value={{ 
        language: "ca", 
        setLanguage, 
        isInitialized: false 
      }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      isInitialized: true 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook para acceder al contexto de idioma
 * @returns Objeto con idioma actual, función para cambiar idioma y estado de inicialización
 * @throws Error si se usa fuera del LanguageProvider
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider")
  }
  return context
}

/**
 * Hook auxiliar para obtener el nombre del idioma en su forma nativa
 * @param lang - Código de idioma
 * @returns Nombre nativo del idioma
 */
export function getLanguageNativeName(lang: Language): string {
  const nativeNames: Record<Language, string> = {
    ca: "Català",
    es: "Español", 
    en: "English",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano", 
    pt: "Português",
    nl: "Nederlands",
    sv: "Svenska"
  }
  return nativeNames[lang] || nativeNames.ca
}

/**
 * Utilidad para debug - muestra información del idioma del navegador
 * Solo disponible en desarrollo
 */
export function debugBrowserLanguage(): void {
  if (typeof window === 'undefined') return
  
  console.group('🌍 EMA Language Detection Debug')
  console.log('navigator.language:', navigator.language)
  console.log('navigator.languages:', navigator.languages)
  console.log('Detected language:', getBrowserLanguage())
  console.log('Stored language:', localStorage.getItem('ema-language'))
  console.groupEnd()
}
