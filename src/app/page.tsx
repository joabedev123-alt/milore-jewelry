import { CatalogProvider } from "@/context/CatalogContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Editorial } from "@/components/sections/Editorial";
import { Care } from "@/components/sections/Care";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Reviews } from "@/components/sections/Reviews";
import { Instagram } from "@/components/sections/Instagram";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { GlobalModals } from "@/components/modals/GlobalModals";

export default function HomePage() {
  return (
    <CatalogProvider>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Editorial />
        <Care />
        <HowItWorks />
        <Reviews />
        <Instagram />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <GlobalModals />
    </CatalogProvider>
  );
}
