"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    q: "how much does it cost?",
    a: "billbox is 100% free forever. no hidden fees, no credit card required. we believe standard tools should be accessible to all independent creators.",
  },
  {
    q: "are the generated invoices tax compliant?",
    a: "absolutely. you can add custom tax rates, localized currency symbols, and any required business identification numbers to strictly meet your local tax authority regulations.",
  },
  {
    q: "can i securely save my client details?",
    a: "yes. once entered, client details can be saved securely in your browser's local storage for instant, one-click retrieval on any future invoices.",
  },
  {
    q: "how is my financial & client data stored?",
    a: "privacy by design. all invoice and client data is stored locally on your device. we do not track, intercept, or store your personal client information on any of our servers.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 layout-container border-t border-black/10 dark:border-white/10 transition-colors duration-300">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">frequently<br />asked.</h2>
          <p className="text-black/50 dark:text-white/50 text-base">
            everything you need to know about our invoicing standard.
          </p>
        </div>

        <div className="space-y-10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-b border-black/10 dark:border-white/10 pb-8 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-4">{faq.q}</h3>
              <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
