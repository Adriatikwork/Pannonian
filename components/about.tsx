"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { withBasePath } from "@/lib/utils"

export function About() {
  const { t } = useI18n()
  const imageRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffsetY(scrollProgress * 50)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image with Parallax */}
          <div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl"
          >
            <div
              className="absolute inset-0 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${offsetY}px) scale(1.1)` }}
            >
              <Image
                src={withBasePath("/media/about-image.jpg")}
                alt="Pannonian Logistics warehouse operations"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t("about.description")}
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact">{t("about.cta")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
