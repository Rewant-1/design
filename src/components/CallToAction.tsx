"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="py-32 layout-container border-t border-b border-black/10 dark:border-white/10 transition-colors duration-300 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter"
        >
          ready to bill?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button className="group relative px-10 py-4 bg-black text-white dark:bg-white dark:text-black font-bold tracking-tight transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              create free account
            </span>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-black/40 dark:text-white/40 font-bold text-xs tracking-widest uppercase"
        >
          no credit card required. free forever.
        </motion.p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-100">
        <span className="text-[20vw] font-bold text-black/[0.06] dark:text-white/[0.08] tracking-tighter whitespace-nowrap transition-colors duration-300">
          billbox
        </span>
      </div>
    </section>
  );
}
