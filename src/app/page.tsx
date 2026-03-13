import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import MobileSection from "@/components/MobileSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <MobileSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
