"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { withBasePath } from "@/lib/utils"

const services = [
  {
    key: "transport",
    image: "/media/services-transport.jpg",
  },
  {
    key: "logistics",
    image: "/media/services-logistics.jpg",
  },
  {
    key: "storage",
    image: "/media/services-storage.jpg",
  },
]

export function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="bg-muted/25 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t("services.description")}
          </p>
        </div>

        {/* Service Cards */}
        <ul role="list" className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <li key={service.key}>
              <article
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={withBasePath(service.image)}
                    alt={t(`services.${service.key}.title`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
