"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { RotatingText } from "@/components/rotating-text"
import Image from "next/image"
import Link from "next/link"
import { withBasePath } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden" style={{ height: "80vh", minHeight: "520px" }}>
      {/* Full-screen background image */}
      <Image
        src={withBasePath("/media/hero-truck-mockup.jpg")}
        alt="Pannonian Logistics branded truck on highway"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Light gradients — preserve truck visibility, only darken enough for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

      {/* Content — anchored to bottom-left */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 pb-12 sm:px-6 md:pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-xl">
            {/* Rotating service label */}
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm font-medium uppercase tracking-widest text-white/60">
                {t("hero.rotating.prefix")}
              </span>
              <RotatingText
                texts={[
                  t("hero.rotating.transport"),
                  t("hero.rotating.logistics"),
                  t("hero.rotating.storage"),
                ]}
                mainClassName="inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-sm font-semibold text-white overflow-hidden"
                splitLevelClassName="overflow-hidden"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.03}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/80 md:text-lg">
              {t("hero.description")}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-white px-8 text-black hover:bg-white/90 focus-visible:ring-white"
                asChild
              >
                <Link href="/contact">{t("hero.cta")}</Link>
              </Button>
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                {t("hero.learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-white/50" aria-hidden="true" />
      </div>
    </section>
  )
}
