"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="py-24 layout-container border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">no complex tiers.</h2>
          <p className="text-black/50 dark:text-white/50 text-base max-w-xl mx-auto">
            exactly the tools you require to bill clients. nothing more.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-0 border border-black/10 dark:border-white/10"
        >
          {/* Free Tier */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 transition-colors duration-300 flex flex-col">
            <h3 className="text-sm font-bold tracking-widest mb-2 uppercase text-black/40 dark:text-white/40">community</h3>
            <div className="text-5xl font-bold mb-6">$0</div>
            <p className="text-black/50 dark:text-white/50 text-sm mb-10 min-h-[40px]">
              for freelancers and independent creators beginning their journey.
            </p>
            
            <ul className="space-y-4 mb-12 text-sm text-black/70 dark:text-white/70 flex-1">
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>unlimited invoices generated locally</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>access to standard templates</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>secure local device storage</span>
              </li>
            </ul>

            <button className="group relative w-full bg-black text-white dark:bg-white dark:text-black py-4 font-bold transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                begin free
              </span>
              <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>

          {/* Pro Tier */}
          <div className="p-8 md:p-12 bg-black/[0.02] dark:bg-white/[0.02] relative flex flex-col">
            <div className="absolute top-8 right-8 text-[10px] px-3 py-1 bg-black/5 dark:bg-white/10 font-bold tracking-widest uppercase text-black/50 dark:text-white/50">
              q3 2026
            </div>
            
            <h3 className="text-sm font-bold tracking-widest mb-2 uppercase text-black/40 dark:text-white/40">professional</h3>
            <div className="text-5xl font-bold mb-6">$12<span className="text-lg text-black/40 dark:text-white/40 font-normal">/mo</span></div>
            <p className="text-black/50 dark:text-white/50 text-sm mb-10 min-h-[40px]">
              advanced feature sets designed for growing studios and boutique agencies.
            </p>
            
            <ul className="space-y-4 mb-12 text-sm text-black/50 dark:text-white/50 flex-1">
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>custom branding presets</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>secure global cloud sync</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="w-4 h-4 mt-0.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span>stripe / paypal integrations</span>
              </li>
            </ul>

            <button className="group relative w-full border border-black/20 dark:border-white/20 text-black/50 dark:text-white/50 py-4 font-bold transition-all duration-300 overflow-hidden">
              <span className="relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">join waitlist</span>
              <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
