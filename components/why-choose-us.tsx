"use client"

import { useI18n } from "@/lib/i18n"
import { Shield, Clock, Users } from "lucide-react"

const features = [
  {
    key: "security",
    icon: Shield,
  },
  {
    key: "efficiency",
    icon: Clock,
  },
  {
    key: "customer",
    icon: Users,
  },
]

export function WhyChooseUs() {
  const { t } = useI18n()

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
            {t("whyUs.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("whyUs.subtitle")}</p>
        </div>

        {/* Features */}
        <ul role="list" className="space-y-12 md:space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <li
                key={feature.key}
                className={`grid items-start gap-6 md:grid-cols-12 md:gap-8 ${
                  index !== features.length - 1 ? "border-b border-border pb-12 md:pb-16" : ""
                }`}
              >
                {/* Icon */}
                <div className="md:col-span-1" aria-hidden="true">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                </div>

                {/* Title and Subtitle */}
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {t(`whyUs.${feature.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`whyUs.${feature.key}.subtitle`)}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-8">
                  <p className="leading-relaxed text-muted-foreground">
                    {t(`whyUs.${feature.key}.description`)}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
