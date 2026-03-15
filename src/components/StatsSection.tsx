"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "12k+", label: "invoices" },
  { value: "800+", label: "users" },
  { value: "85%", label: "time saved" },
];

export default function StatsSection() {
  return (
    <section className="py-24 w-full flex justify-center bg-transparent transition-colors duration-300 border-b border-black/10 dark:border-white/10">
      <div className="max-w-2xl w-full px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 space-y-2"
        >
          <h2 className="text-[22px] md:text-[28px] font-bold tracking-tight">
            used by digital sellers
          </h2>
          <p className="text-black/50 dark:text-white/50 text-[11px] font-medium tracking-wide">
            from solo developers to enterprise SaaS companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center w-full max-w-[500px]"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 text-center flex flex-col items-center justify-center">
              <div className="text-[26px] md:text-[32px] font-bold tracking-tight mb-1.5 mt-1">
                {stat.value}
              </div>
              <div className="text-[10px] text-black/50 dark:text-white/50 tracking-widest uppercase font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
