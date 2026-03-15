"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-black transition-colors duration-300 border-b border-black/10 dark:border-white/10">
      <div className="max-w-[1200px] w-full mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3.5 h-3.5 bg-black dark:bg-white" />
          <span className="font-bold text-[15px] tracking-tight">billbox</span>
        </div>

        <div className="flex items-center space-x-6 text-[13px] font-bold">
          <ThemeToggle />
          <Link href="#" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            sign in
          </Link>
          <Link
            href="#"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 tracking-wide hover:opacity-80 transition-opacity"
          >
            start free
          </Link>
        </div>
      </div>
    </nav>
  );
}
