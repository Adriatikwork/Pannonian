"use client"

import { useI18n } from "@/lib/i18n"

export function TrustSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 md:py-32">
      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-blue-600 md:text-4xl lg:text-5xl">
          <span className="text-balance">{t("trust.title")}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {t("trust.description")}
        </p>
      </div>
    </section>
  )
}
