"use client";

import { motion } from "framer-motion";
import { Copy, FileText, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "instant generation",
    description: "create pixel-perfect invoices in under 60 seconds. no bloated wizard workflows.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "tax compliant",
    description: "built-in compliance for global rules. reliable and robust.",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "1-click duplicate",
    description: "clone past invoices instantly. bill recurring clients efficiently.",
    icon: Copy,
    className: "md:col-span-1",
  },
  {
    title: "custom pdfs",
    description: "export clean, brutalist PDFs that command respect and prompt payment.",
    icon: FileText,
    className: "md:col-span-2",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 layout-container border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">the standard.</h2>
        <p className="text-black/50 dark:text-white/50 max-w-xl text-base mx-auto md:mx-0">
          everything you need to send professional invoices, elegantly packaged in a no-nonsense interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/10 dark:border-white/10 transition-colors duration-300">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`border-[0.5px] border-black/10 dark:border-white/10 p-8 md:p-10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group ${feature.className}`}
          >
            <feature.icon className="w-6 h-6 mb-8 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
