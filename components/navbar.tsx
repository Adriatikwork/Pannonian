"use client"

import { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useI18n, type Locale } from "@/lib/i18n"
import { withBasePath } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()
  const isHomepage = pathname === "/"
  const { locale, setLocale, t } = useI18n()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (sectionId === "/" || sectionId.startsWith("http")) return
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  // On homepage: use scroll-based state. On other pages: always show scrolled state.
  const scrolled = mounted && (isScrolled || !isHomepage)

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center md:justify-between md:h-20">
            {/* Logo - switches between dark and light version based on scroll */}
            <Link href="/" className="flex items-center md:flex-1" aria-label="Pannonian Logistics - Kthehu në faqen kryesore">
              <Image
                src={withBasePath(scrolled ? "/logos/footer-logo.png" : "/logos/logo-white.png")}
                alt="Pannonian Logistics logo"
                width={300}
                height={120}
                className="h-8 w-auto md:h-10 transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Navigimi kryesor" className="hidden items-center gap-8 md:flex">
              <ul role="list" className="flex items-center gap-8">
                {[
                  { href: "/", label: mounted ? t("nav.home") : "Home" },
                  { href: "#about", label: mounted ? t("nav.about") : "About", scroll: true },
                  { href: "#services", label: mounted ? t("nav.services") : "Services", scroll: true },
                  { href: "/contact", label: mounted ? t("nav.contact") : "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={item.scroll ? (e) => handleNavClick(e, item.href) : undefined}
                      className={`text-sm font-medium transition-colors duration-300 ${scrolled
                          ? "text-foreground/80 hover:text-foreground"
                          : "text-white/90 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Language Switcher */}
              {mounted && (
                <div
                  role="group"
                  aria-label="Zgjedh gjuhën"
                  className={`flex items-center gap-1 rounded-full border px-2 py-1 transition-colors duration-300 ${scrolled ? "border-border" : "border-white/40"
                    }`}
                >
                  {(["en", "sq"] as Locale[]).map((lang, i) => (
                    <Fragment key={lang}>
                      {i > 0 && <span aria-hidden="true" className={`transition-colors duration-300 ${scrolled ? "text-foreground/30" : "text-white/30"}`}>|</span>}
                      <button
                        onClick={() => handleLocaleChange(lang)}
                        aria-pressed={locale === lang}
                        aria-label={lang === "en" ? "Switch to English" : "Kalo në shqip"}
                        className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors duration-300 ${locale === lang
                            ? scrolled ? "bg-foreground text-background" : "bg-white text-black"
                            : scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
                          }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    </Fragment>
                  ))}
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Mbylle menunë" : "Hap menunë"}
              className={`absolute right-4 transition-colors duration-300 md:static md:hidden ${scrolled ? "text-foreground" : "text-white"
                }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && mounted && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Navigation */}
      <aside
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-40 w-64 bg-white shadow-2xl md:hidden transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav aria-label="Navigimi mobil" className="flex flex-col h-full">
          {/* Close button and logo area */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-sm font-semibold text-foreground">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Mbylle menunë"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul role="list" className="flex-1 overflow-y-auto">
            {[
              { href: "/", label: mounted ? t("nav.home") : "Home", action: () => setIsMobileMenuOpen(false) },
              { href: "#about", label: mounted ? t("nav.about") : "About", action: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#about") },
              { href: "#services", label: mounted ? t("nav.services") : "Services", action: (e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, "#services") },
              { href: "/contact", label: mounted ? t("nav.contact") : "Contact", action: () => setIsMobileMenuOpen(false) },
            ].map((item) => (
              <li key={item.href} className="border-b border-border/50 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={item.action}
                  className="block px-6 py-4 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-all duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <div className="border-t border-border p-4 space-y-3">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide px-2">
              {t("nav.language") || "Language"}
            </p>
            <div role="group" aria-label="Zgjedh gjuhën" className="flex gap-2">
              {(["en", "sq"] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    handleLocaleChange(lang)
                    setIsMobileMenuOpen(false)
                  }}
                  aria-pressed={locale === lang}
                  aria-label={lang === "en" ? "Switch to English" : "Kalo në shqip"}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${locale === lang
                      ? "bg-foreground text-background shadow-sm"
                      : "bg-muted text-foreground/70 hover:bg-muted hover:text-foreground"
                    }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}
