"use client"

import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface RotatingTextProps {
  texts: string[]
  mainClassName?: string
  splitLevelClassName?: string
  staggerFrom?: "first" | "last" | "center"
  staggerDuration?: number
  rotationInterval?: number
  transition?: object
  initial?: object
  animate?: object
  exit?: object
}

export function RotatingText({
  texts,
  mainClassName = "",
  splitLevelClassName = "",
  staggerFrom = "first",
  staggerDuration = 0.025,
  rotationInterval = 2000,
  transition = { type: "spring", damping: 30, stiffness: 400 },
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
}: RotatingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)
    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  const currentText = texts[index]
  const letters = currentText.split("")

  const getDelay = (i: number, total: number) => {
    if (staggerFrom === "last") return (total - 1 - i) * staggerDuration
    if (staggerFrom === "center") return Math.abs(i - Math.floor(total / 2)) * staggerDuration
    return i * staggerDuration
  }

  return (
    <span className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          className="flex"
          aria-live="polite"
          aria-atomic="true"
        >
          {letters.map((letter, i) => (
            <span key={i} className={splitLevelClassName}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{ ...transition, delay: getDelay(i, letters.length) }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
