"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import sqTranslations from "@/locales/sq.json"
import enTranslations from "@/locales/en.json"

export type Locale = "sq" | "en"

const translations = {
  sq: sqTranslations,
  en: enTranslations,
}

type TranslationsType = typeof sqTranslations

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children, defaultLocale = "sq" }: { children: ReactNode; defaultLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let value: unknown = translations[locale]

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k]
        } else {
          return key
        }
      }

      return typeof value === "string" ? value : key
    },
    [locale]
  )

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
