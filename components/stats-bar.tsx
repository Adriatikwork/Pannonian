"use client"

import { useI18n } from "@/lib/i18n"
import { Truck, Globe, Package, Clock } from "lucide-react"

const stats = [
  { key: "deliveries", icon: Package },
  { key: "countries", icon: Globe },
  { key: "experience", icon: Clock },
  { key: "trucks", icon: Truck },
]

export function StatsBar() {
  const { t } = useI18n()

  return (
    <section className="border-b border-border bg-background" aria-label={t("stats.label")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0"
        >
          {stats.map(({ key, icon: Icon }) => (
            <li
              key={key}
              className="flex flex-col items-center gap-2 px-6 py-8 text-center md:py-10"
            >
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {t(`stats.${key}.value`)}
              </span>
              <span className="text-sm text-muted-foreground">
                {t(`stats.${key}.label`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
