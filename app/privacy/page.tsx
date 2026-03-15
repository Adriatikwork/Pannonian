import type { Metadata } from "next"
import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Politika e Privatësisë | Pannonian Logistics",
  description:
    "Lexoni politikën e privatësisë së Pannonian Logistics. Mësoni si mbledhim, përdorim dhe mbrojmë informacionin tuaj personal.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Politika e Privatësisë | Pannonian Logistics",
    description:
      "Mësoni si Pannonian Logistics trajton informacionin tuaj personal dhe mbron privatësinë tuaj.",
  },
}

const sectionsEn = [
  {
    heading: "1. Introduction",
    body: [
      "This Privacy Policy explains how Pannonian Logistics (\"we\", \"our\", or \"us\") handles information collected through our website.",
      "We respect your privacy and are committed to protecting any personal information you choose to share with us.",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "Our website does not automatically collect personal data.",
      "The only personal information we may receive is the information you voluntarily provide when contacting us, such as:",
      {
        list: [
          "Your name",
          "Your email address",
          "The message you send through our contact form or email",
        ],
      },
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: [
      "The information you provide is used only for the following purposes:",
      {
        list: [
          "To respond to your inquiries",
          "To communicate with you regarding our services",
          "To provide information you have requested",
        ],
      },
      "We do not sell, rent, or share your personal information with third parties.",
    ],
  },
  {
    heading: "4. Data Storage",
    body: [
      "Messages sent through our contact form or email may be stored in our email inbox for the purpose of communication and record keeping.",
      "We do not maintain a customer database or use your information for marketing unless you explicitly request such communication.",
    ],
  },
  {
    heading: "5. Cookies and Tracking",
    body: [
      "Our website does not use cookies for tracking or advertising purposes.",
      "Basic technical data may be temporarily processed by hosting providers to ensure the website functions properly.",
    ],
  },
  {
    heading: "6. Third-Party Services",
    body: [
      "Our website may be hosted by third-party hosting providers who may process technical data such as server logs for security and operational purposes.",
    ],
  },
  {
    heading: "7. Your Rights",
    body: [
      "If you have contacted us and wish to have your message or personal information removed, you may request this by contacting us directly.",
    ],
  },
  {
    heading: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any updates will be posted on this page.",
    ],
  },
  {
    heading: "9. Contact",
    body: [
      "If you have any questions regarding this Privacy Policy, please contact us at: info@pannonianlogistics.com",
    ],
  },
]

const sectionsSq = [
  {
    heading: "1. Hyrje",
    body: [
      "Kjo Politikë Privatësie shpjegon se si Pannonian Logistics (\"ne\", \"tona\" ose \"ne\") trajton informacionin e mbledhur përmes faqes sonë të internetit.",
      "Ne respektojmë privatësinë tuaj dhe jemi të përkushtuar për të mbrojtur çdo informacion personal që zgjidhni të ndani me ne.",
    ],
  },
  {
    heading: "2. Informacioni që Mbledhim",
    body: [
      "Faqja jonë e internetit nuk mbledh automatikisht të dhëna personale.",
      "Informacioni i vetëm personal që mund të marrim është informacioni që jepni vullnetarisht kur na kontaktoni, si:",
      {
        list: [
          "Emri juaj",
          "Adresa juaj e emailit",
          "Mesazhi që dërgoni përmes formularit tonë të kontaktit ose emailit",
        ],
      },
    ],
  },
  {
    heading: "3. Si e Përdorim Informacionin Tuaj",
    body: [
      "Informacioni që jepni përdoret vetëm për qëllimet e mëposhtme:",
      {
        list: [
          "Për t'iu përgjigjur pyetjeve tuaja",
          "Për të komunikuar me ju lidhur me shërbimet tona",
          "Për të ofruar informacionin që keni kërkuar",
        ],
      },
      "Ne nuk shesim, nuk japim me qira dhe nuk ndajmë informacionin tuaj personal me palë të treta.",
    ],
  },
  {
    heading: "4. Ruajtja e të Dhënave",
    body: [
      "Mesazhet e dërguara përmes formularit tonë të kontaktit ose emailit mund të ruhen në kutinë tonë postare për qëllime komunikimi dhe mbajtjeje të regjistrimeve.",
      "Ne nuk mbajmë një bazë të dhënash klientësh dhe nuk përdorim informacionin tuaj për marketing, përveç nëse kërkoni shprehimisht një komunikim të tillë.",
    ],
  },
  {
    heading: "5. Cookies dhe Gjurmimi",
    body: [
      "Faqja jonë e internetit nuk përdor cookies për qëllime gjurmimi ose reklamimi.",
      "Të dhëna themelore teknike mund të përpunohen përkohësisht nga ofruesit e hosting-ut për të siguruar funksionimin e duhur të faqes.",
    ],
  },
  {
    heading: "6. Shërbimet e Palëve të Treta",
    body: [
      "Faqja jonë e internetit mund të strehohet nga ofrues hosting-u të palëve të treta që mund të përpunojnë të dhëna teknike si regjistrat e serverit për qëllime sigurie dhe operative.",
    ],
  },
  {
    heading: "7. Të Drejtat Tuaja",
    body: [
      "Nëse keni kontaktuar me ne dhe dëshironi të hiqni mesazhin tuaj ose informacionin personal, mund ta kërkoni duke na kontaktuar drejtpërdrejt.",
    ],
  },
  {
    heading: "8. Ndryshimet e Kësaj Politike",
    body: [
      "Ne mund ta përditësojmë këtë Politikë Privatësie herë pas here. Çdo përditësim do të publikohet në këtë faqe.",
    ],
  },
  {
    heading: "9. Kontakti",
    body: [
      "Nëse keni ndonjë pyetje lidhur me këtë Politikë Privatësie, ju lutemi na kontaktoni në: info@pannonianlogistics.com",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen pt-20">
        <LegalPage
          titleEn="Privacy Policy"
          titleSq="Politika e Privatësisë"
          lastUpdatedEn="Effective Date: March 14, 2026"
          lastUpdatedSq="Data e Hyrjes në Fuqi: 14 Mars 2026"
          sectionsEn={sectionsEn}
          sectionsSq={sectionsSq}
        />
      </main>
      <Footer />
    </I18nProvider>
  )
}
