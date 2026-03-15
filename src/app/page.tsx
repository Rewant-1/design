import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Navbar />
      <HeroSection />
      
      {/* Adding some spacing to separate from later sections as we pivot the design */}
      <div className="pt-20">
        <ProcessSection />
        <FeatureGrid />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <CallToAction />
      </div>
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-black/10 dark:border-white/10 text-center text-black/40 dark:text-white/30 text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} billbox. editorial standard.</p>
      </footer>
    </main>
  );
}
