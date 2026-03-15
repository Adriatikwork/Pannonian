"use client"

import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { withBasePath } from "@/lib/utils"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer id="contact" role="contentinfo" className="border-t border-border bg-slate-950 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-2 md:text-left lg:gap-12">
          {/* Left side - Logo */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" aria-label="Pannonian Logistics - Kthehu në faqen kryesore">
              <Image
                src={withBasePath("/logos/footer-logo-white.png")}
                alt="Pannonian Logistics logo"
                width={240}
                height={60}
                className="h-auto w-32"
              />
            </Link>
          </div>

          {/* Right side - Contact info */}
          <div className="flex flex-col items-center gap-4 md:items-end md:text-right">
            <address className="not-italic space-y-2 text-sm text-slate-300">
              <p><a href={`tel:${t("footer.phone")}`} className="hover:text-white transition-colors">{t("footer.phone")}</a></p>
              <p><a href={`mailto:${t("footer.email")}`} className="hover:text-white transition-colors">{t("footer.email")}</a></p>
              <p className="mt-4">{t("footer.address")}</p>
              <p>{t("footer.country")}</p>
            </address>

            <nav aria-label="Footer navigimi" className="mt-4 flex gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-slate-200 underline transition-colors hover:text-white"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/accessibility"
                className="text-slate-200 underline transition-colors hover:text-white"
              >
                {t("footer.accessibility")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
