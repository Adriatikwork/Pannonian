"use client"

import { useState, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import { ChevronDown, Globe, Search, X } from "lucide-react"

const COUNTRY_CODES = [
  { code: "AF", name: "Afghanistan", dial: "+93" },
  { code: "AL", name: "Albania", dial: "+355" },
  { code: "DZ", name: "Algeria", dial: "+213" },
  { code: "AR", name: "Argentina", dial: "+54" },
  { code: "AU", name: "Australia", dial: "+61" },
  { code: "AT", name: "Austria", dial: "+43" },
  { code: "BE", name: "Belgium", dial: "+32" },
  { code: "BR", name: "Brazil", dial: "+55" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "CN", name: "China", dial: "+86" },
  { code: "HR", name: "Croatia", dial: "+385" },
  { code: "CZ", name: "Czech Republic", dial: "+420" },
  { code: "DK", name: "Denmark", dial: "+45" },
  { code: "EG", name: "Egypt", dial: "+20" },
  { code: "FI", name: "Finland", dial: "+358" },
  { code: "FR", name: "France", dial: "+33" },
  { code: "DE", name: "Germany", dial: "+49" },
  { code: "GR", name: "Greece", dial: "+30" },
  { code: "HU", name: "Hungary", dial: "+36" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "ID", name: "Indonesia", dial: "+62" },
  { code: "IE", name: "Ireland", dial: "+353" },
  { code: "IT", name: "Italy", dial: "+39" },
  { code: "JP", name: "Japan", dial: "+81" },
  { code: "XK", name: "Kosovo", dial: "+383" },
  { code: "MK", name: "North Macedonia", dial: "+389" },
  { code: "ME", name: "Montenegro", dial: "+382" },
  { code: "NL", name: "Netherlands", dial: "+31" },
  { code: "NZ", name: "New Zealand", dial: "+64" },
  { code: "NO", name: "Norway", dial: "+47" },
  { code: "PL", name: "Poland", dial: "+48" },
  { code: "PT", name: "Portugal", dial: "+351" },
  { code: "RO", name: "Romania", dial: "+40" },
  { code: "RS", name: "Serbia", dial: "+381" },
  { code: "SK", name: "Slovakia", dial: "+421" },
  { code: "SI", name: "Slovenia", dial: "+386" },
  { code: "ZA", name: "South Africa", dial: "+27" },
  { code: "ES", name: "Spain", dial: "+34" },
  { code: "SE", name: "Sweden", dial: "+46" },
  { code: "CH", name: "Switzerland", dial: "+41" },
  { code: "TR", name: "Turkey", dial: "+90" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "US", name: "United States", dial: "+1" },
]

export function ContactForm() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [selectedCountry, setSelectedCountry] = useState<(typeof COUNTRY_CODES)[0] | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filtered = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search)
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // EmailJS will be wired here later
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {t("contact.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
          {t("contact.description")}
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-border bg-muted/30 p-12 text-center">
          <p className="text-xl font-semibold text-foreground">{t("contact.successTitle")}</p>
          <p className="mt-2 text-muted-foreground">{t("contact.successMessage")}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm underline text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("contact.sendAnother")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First Name + Last Name */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                {t("contact.firstName")} <span className="text-foreground">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border-b border-foreground/30 bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/50"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-foreground">
                {t("contact.lastName")} <span className="text-foreground">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border-b border-foreground/30 bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/50"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              {t("contact.email")} <span className="text-foreground">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-b border-foreground/30 bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Phone with country code */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              {t("contact.phone")}
            </label>
            <div className="relative border-b border-foreground/30 pb-2 focus-within:border-foreground transition-colors">
              <div className="flex items-center gap-2">
                {/* Country selector trigger */}
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  {selectedCountry && (
                    <span className="text-sm font-medium">{selectedCountry.dial}</span>
                  )}
                  <ChevronDown className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground/50"
                />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-border bg-background shadow-xl"
                >
                  {/* Search */}
                  <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                      autoFocus
                    />
                    {search && (
                      <button onClick={() => setSearch("")}>
                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                      </button>
                    )}
                  </div>
                  {/* List */}
                  <ul className="max-h-52 overflow-y-auto py-1">
                    {filtered.map((country) => (
                      <li key={country.code}>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country)
                            setDropdownOpen(false)
                            setSearch("")
                          }}
                          className="flex w-full items-center gap-3 px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors"
                        >
                          <span className="min-w-[3rem] text-muted-foreground">{country.dial}</span>
                          <span>{country.name}</span>
                        </button>
                      </li>
                    ))}
                    {filtered.length === 0 && (
                      <li className="px-4 py-3 text-sm text-muted-foreground">No results</li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              {t("contact.subject")} <span className="text-foreground">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="border-b border-foreground/30 bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">
              {t("contact.message")} <span className="text-foreground">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border-b border-foreground/30 bg-transparent pb-2 text-foreground outline-none transition-colors focus:border-foreground resize-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-foreground py-4 text-base font-semibold text-background transition-opacity hover:opacity-80"
          >
            {t("contact.submit")}
          </button>
        </form>
      )}
    </section>
  )
}
