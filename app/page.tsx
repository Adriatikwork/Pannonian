import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { DeliverySection } from "@/components/delivery-section"
import { WarehouseSection } from "@/components/warehouse-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <I18nProvider defaultLocale="sq">
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <About />
          <Services />
          <DeliverySection />
          <WarehouseSection />
          <WhyChooseUs />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  )
}
