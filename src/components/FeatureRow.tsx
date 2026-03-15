"use client";

import { motion } from "framer-motion";
import { Clock, FileText, ShieldCheck, Download } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "< 60 seconds",
    desc: "From start to PDF download",
  },
  {
    icon: FileText,
    title: "Digital-first",
    desc: "Built for SaaS & software sales",
  },
  {
    icon: ShieldCheck,
    title: "Tax compliant",
    desc: "GST/VAT ready formatting",
  },
  {
    icon: Download,
    title: "Instant export",
    desc: "Client-side PDF generation",
  },
];

export default function FeatureRow() {
  return (
    <section className="py-24 w-full flex justify-center bg-transparent transition-colors duration-300 border-b border-black/10 dark:border-white/10">
      <div className="max-w-[1000px] w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center space-y-5"
          >
            <div className="w-12 h-12 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-xl bg-black/5 dark:bg-white/5 transition-colors duration-300 text-black/70 dark:text-white/70">
              <item.icon className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <h3 className="font-bold text-sm tracking-tight">{item.title}</h3>
              <p className="text-black/50 dark:text-white/50 text-[11px] font-medium max-w-[150px] leading-relaxed mx-auto">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
