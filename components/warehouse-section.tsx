"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function WarehouseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffsetY(scrollProgress * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[50vh] overflow-hidden md:h-[60vh]">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${offsetY}px) scale(1.3)` }}
      >
        <Image
          src="/media/warehouse-facility.jpg"
          alt="Pannonian Logistics warehouse facility operations"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay - Blends into page */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
    </section>
  )
}

