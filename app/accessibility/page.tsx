import type { Metadata } from "next"
import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Deklarata e Aksesueshmërisë | Pannonian Logistics",
  description:
    "Pannonian Logistics është e përkushtuar për të siguruar aksesueshmëri dixhitale për të gjithë përdoruesit. Lexoni deklaratën tonë të aksesueshmërisë.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Deklarata e Aksesueshmërisë | Pannonian Logistics",
    description:
      "Mësoni si Pannonian Logistics siguron aksesueshmëri dixhitale dhe lehtësi përdorimi për të gjithë.",
  },
}

const sectionsEn = [
  {
    heading: "Our Commitment",
    body: [
      "Pannonian Logistics is committed to ensuring digital accessibility for all users, including people with disabilities. We strive to make our website accessible and easy to use for everyone.",
    ],
  },
  {
    heading: "Accessibility Standards",
    body: [
      "We aim to follow the principles of the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA wherever possible. These guidelines help make web content more accessible for people with a wide range of disabilities.",
    ],
  },
  {
    heading: "Accessibility Features",
    body: [
      "To support accessibility, we aim to:",
      {
        list: [
          "Use clear and consistent page structures",
          "Provide readable text and sufficient color contrast",
          "Include alternative text descriptions for images where appropriate",
          "Ensure the website can be navigated using a keyboard",
          "Maintain compatibility with common assistive technologies such as screen readers",
        ],
      },
    ],
  },
  {
    heading: "Ongoing Improvements",
    body: [
      "We are continually working to improve the accessibility of our website and to ensure it remains usable for all visitors.",
    ],
  },
  {
    heading: "Feedback and Contact",
    body: [
      "If you experience any difficulty accessing content on this website or have suggestions on how we can improve accessibility, please contact us:",
      "Email: info@pannonianlogistics.com",
      "We will do our best to respond and address the issue as quickly as possible.",
    ],
  },
]

const sectionsSq = [
  {
    heading: "Angazhimi Ynë",
    body: [
      "Pannonian Logistics është e përkushtuar për të siguruar aksesueshmëri dixhitale për të gjithë përdoruesit, duke përfshirë personat me aftësi të kufizuara. Ne përpiqemi ta bëjmë faqen tonë të internetit të aksesueshme dhe të lehtë për t'u përdorur nga të gjithë.",
    ],
  },
  {
    heading: "Standardet e Aksesueshmërisë",
    body: [
      "Ne synojmë të ndjekim parimet e Udhëzimeve për Aksesueshmërinë e Përmbajtjes në Internet (WCAG) 2.1 Niveli AA kudo që është e mundur. Këto udhëzime ndihmojnë në bërjen e përmbajtjes në internet më të aksesueshme për njerëzit me një gamë të gjerë aftësish të kufizuara.",
    ],
  },
  {
    heading: "Karakteristikat e Aksesueshmërisë",
    body: [
      "Për të mbështetur aksesueshmërinë, ne synojmë të:",
      {
        list: [
          "Përdorim struktura të qarta dhe konsistente të faqeve",
          "Ofrojmë tekst të lexueshëm dhe kontrast të mjaftueshëm ngjyrash",
          "Përfshijmë përshkrime të tekstit alternativ për imazhet kur është e përshtatshme",
          "Sigurojmë që faqja e internetit mund të naviguhet duke përdorur tastierën",
          "Mbajmë përputhshmërinë me teknologjitë ndihmëse të zakonshme si lexuesit e ekranit",
        ],
      },
    ],
  },
  {
    heading: "Përmirësime të Vazhdueshme",
    body: [
      "Ne punojmë vazhdimisht për të përmirësuar aksesueshmërinë e faqes sonë të internetit dhe për të siguruar që ajo mbetet e përdorshme për të gjithë vizitorët.",
    ],
  },
  {
    heading: "Reagimet dhe Kontakti",
    body: [
      "Nëse keni vështirësi në aksesin e përmbajtjes në këtë faqe interneti ose keni sugjerime se si mund të përmirësojmë aksesueshmërinë, ju lutemi na kontaktoni:",
      "Email: info@pannonianlogistics.com",
      "Ne do të bëjmë të mundur të përgjigjemi dhe të adresojmë çështjen sa më shpejt të jetë e mundur.",
    ],
  },
]

export default function AccessibilityPage() {
  return (
    <I18nProvider>
      <Navbar />
      <main className="min-h-screen pt-20">
        <LegalPage
          titleEn="Accessibility Statement"
          titleSq="Deklarata e Aksesueshmërisë"
          lastUpdatedEn="Last updated: March 14, 2026"
          lastUpdatedSq="Përditësuar për herë të fundit: 14 Mars 2026"
          sectionsEn={sectionsEn}
          sectionsSq={sectionsSq}
        />
      </main>
      <Footer />
    </I18nProvider>
  )
}
