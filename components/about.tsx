"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Local video clips from public/media/videos
const CLIPS = [
  { src: `${BASE_PATH}/media/videos/1.mp4`, duration: 5000 },
  { src: `${BASE_PATH}/media/videos/2.mp4`, duration: 5000 },
  { src: `${BASE_PATH}/media/videos/3.mp4`, duration: 5000 },
]

export function About() {
  const { t } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const advanceClip = useCallback((nextIndex: number) => {
    const video = videoRef.current
    if (!video) return
    video.src = CLIPS[nextIndex].src
    video.load()
    video.play().catch(() => {})

    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      advanceClip((nextIndex + 1) % CLIPS.length)
    }, CLIPS[nextIndex].duration)

    setCurrentIndex(nextIndex)
  }, [])

  useEffect(() => {
    advanceClip(0)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [advanceClip])

  return (
    <section id="about" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sharp-cut video montage — no transitions, feels like one continuous video */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              aria-label="Logistics footage — trucks on highway and container ships at port"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
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
