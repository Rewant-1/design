"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden layout-container pt-32 pb-16">
      
      <div className="relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center border border-black/10 dark:border-white/20 rounded-full px-5 py-2 text-xs mb-4"
        >
          <span className="text-black/50 dark:text-white/50 tracking-wide">free forever - no limits</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.05] tracking-tighter text-black dark:text-white"
        >
          invoices for<br />
          digital products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-black/50 dark:text-white/50 max-w-2xl leading-relaxed"
        >
          professional invoicing built specifically for<br className="hidden md:block"/>
          software, SaaS, and digital product sales. generate<br className="hidden md:block"/>
          compliant PDFs in under 60 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
        >
          <button className="group relative w-[200px] py-4 bg-black text-white dark:bg-white dark:text-black font-medium transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              create invoice &rarr;
            </span>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
          
          <button className="group relative w-[200px] py-4 bg-transparent border border-black/10 dark:border-white/20 text-black dark:text-white font-medium transition-all duration-300 overflow-hidden">
            <span className="relative z-10">view sample</span>
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-100">
        <span className="text-[20vw] font-bold text-black/[0.03] dark:text-white/[0.03] tracking-tighter whitespace-nowrap mt-20 transition-colors duration-300">
          billbox
        </span>
      </div>
    </section>
  );
}
