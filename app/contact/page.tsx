import type { Metadata } from "next"
import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Kontaktoni Pannonian Logistics për shërbime transporti të besueshme dhe efikase në Kosovë. Ekipi ynë është i gatshëm t'ju ndihmojë.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Na Kontaktoni | Pannonian Logistics",
    description: "Kontaktoni Pannonian Logistics për shërbime transporti të besueshme dhe efikase.",
    url: "https://pannonianlogistics.com/contact",
  },
}

export default function ContactPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen pt-20">
        <ContactForm />
      </main>
      <Footer />
    </I18nProvider>
  )
}
