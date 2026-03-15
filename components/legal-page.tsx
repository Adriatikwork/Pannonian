"use client"

import { useI18n } from "@/lib/i18n"

interface Section {
  heading: string
  body: (string | { list: string[] })[]
}

interface LegalPageProps {
  titleEn: string
  titleSq: string
  lastUpdatedEn: string
  lastUpdatedSq: string
  sectionsEn: Section[]
  sectionsSq: Section[]
}

export function LegalPage({
  titleEn,
  titleSq,
  lastUpdatedEn,
  lastUpdatedSq,
  sectionsEn,
  sectionsSq,
}: LegalPageProps) {
  const { locale } = useI18n()

  const title = locale === "sq" ? titleSq : titleEn
  const lastUpdated = locale === "sq" ? lastUpdatedSq : lastUpdatedEn
  const sections = locale === "sq" ? sectionsSq : sectionsEn

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      {/* Header */}
      <header className="mb-12 border-b border-border pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">{lastUpdated}</p>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section, i) => (
          <section key={i} aria-labelledby={`section-${i}`}>
            <h2
              id={`section-${i}`}
              className="mb-3 text-lg font-semibold text-foreground"
            >
              {section.heading}
            </h2>
            <div className="space-y-3">
              {section.body.map((block, j) =>
                typeof block === "string" ? (
                  <p key={j} className="leading-relaxed text-muted-foreground">
                    {block}
                  </p>
                ) : (
                  <ul key={j} role="list" className="space-y-1 pl-5">
                    {block.list.map((item, k) => (
                      <li
                        key={k}
                        className="relative pl-4 text-muted-foreground leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
