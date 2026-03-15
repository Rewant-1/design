"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-black dark:bg-white" />
          <span className="font-bold text-base tracking-tight">billbox</span>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <ThemeToggle />
          <Link href="#" className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
            sign in
          </Link>
          <Link 
            href="#" 
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 font-bold hover:bg-black/90 dark:hover:bg-white/90 transition-all"
          >
            start free
          </Link>
        </div>
      </div>
    </nav>
  );
}
