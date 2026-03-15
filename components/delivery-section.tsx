"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { withBasePath } from "@/lib/utils"

export function DeliverySection() {
  const { t, locale } = useI18n()
  const imageRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffsetY(scrollProgress * 80)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-5xl">
              <span className="text-balance">{t("delivery.title")}</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("delivery.description")}
            </p>
          </div>

          {/* Right side - Image with Parallax */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl"
          >
            <div
              className="absolute inset-0 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${offsetY}px) scale(1.1)` }}
            >
              <Image
                src={withBasePath("/media/delivery-placeholder.jpg")}
                alt="Safe and secure delivery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
