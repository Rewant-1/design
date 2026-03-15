"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden layout-container pt-[160px] pb-12 min-h-[70vh]">

      <div className="relative z-20 flex flex-col items-center text-center max-w-[800px] w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center border border-black/10 dark:border-white/20 rounded-full px-5 py-1.5 text-[10px] tracking-[0.1em] text-black dark:text-white mb-6"
        >
          <span className="font-medium">free forever • no limits</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-[55px] font-bold leading-[1.05] tracking-tight text-black dark:text-white mb-8"
        >
          invoices for<br />
          digital products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[15px] md:text-[18px] leading-[1.8] text-black/50 dark:text-white/50 max-w-[500px] mx-auto font-medium mb-10"
        >
          professional invoicing built specifically for software, SaaS, and digital product sales. generate compliant PDFs in under 60 seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row items-center space-x-0 pt-2"
        >
          <button className="relative h-[48px] px-8 bg-black text-white dark:bg-white dark:text-black font-semibold text-[13px] tracking-wide flex items-center justify-center group overflow-hidden">
            <span className="relative z-10 flex items-center group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
              create invoice
              <motion.span
                className="ml-2 font-normal"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-white dark:bg-black translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 border border-black dark:border-white" />
          </button>

          <button className="h-[48px] px-8 bg-transparent border border-l-0 border-black/10 dark:border-white/20 text-black dark:text-white font-semibold text-[13px] tracking-wide hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300">
            view sample
          </button>
        </motion.div>
      </div>
    </section>
  );
}
