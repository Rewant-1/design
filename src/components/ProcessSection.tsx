"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "enter client details",
    desc: "input essential information in a completely distraction-free environment.",
  },
  {
    num: "02",
    title: "add line items",
    desc: "detail your services with instant, accurate taxation calculation.",
  },
  {
    num: "03",
    title: "export & send",
    desc: "generate a flawless PDF ready for your client's inbox.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="layout-container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">
            complexity <br /> reduced.
          </h2>
          <p className="text-black/50 dark:text-white/50 text-base max-w-md mx-auto">
            we systematically stripped away the unnecessary, leaving only the essential tools required to bill your clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-black/10 dark:border-white/10 transition-colors duration-300">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 last:border-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group"
            >
              <div className="text-xs text-black/40 dark:text-white/40 mb-4 font-bold tracking-widest">{step.num}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-black dark:group-hover:text-white transition-colors">{step.title}</h3>
              <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
