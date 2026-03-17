import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureRow from "@/components/FeatureRow";
import StatsSection from "@/components/StatsSection";
import FeatureGrid from "@/components/FeatureGrid";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main className="min-h-screen font-mono selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <Navbar />
      <HeroSection />
      
      {/* Exact Match Components */}
      <FeatureRow />
      <StatsSection />
      
      {/* Visual Divider / Our Extra Components */}
      <div className="w-full">
        <PricingSection />
      </div>
      
      {/* Simple Footer */}
      <footer className="py-12 border-t border-black/10 dark:border-white/10 text-center text-black/40 dark:text-white/30 text-xs font-bold tracking-widest uppercase transition-colors duration-300">
        <p>© {new Date().getFullYear()} billbox. highly concentrated design.</p>
      </footer>
    </main>
  );
}
