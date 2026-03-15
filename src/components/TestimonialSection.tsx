"use client";

import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="py-24 layout-container border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center border border-black/10 dark:border-white/10 p-12 md:p-20 relative transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#0a0a0a] px-4 text-black/50 dark:text-white/50 text-xs tracking-widest uppercase transition-colors duration-300 font-bold">
          verified user
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg md:text-2xl font-bold leading-relaxed">
            "an absolute masterclass in restraint. it does exactly one thing—generating beautiful invoices—and does it perfectly."
          </p>
          
          <div className="mt-12 flex flex-col items-center">
            <div className="font-bold text-sm">alexander black</div>
            <div className="text-black/40 dark:text-white/40 text-xs mt-1">independent digital creator</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
