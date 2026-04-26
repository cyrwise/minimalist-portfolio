"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 flex justify-between items-center pb-8 border-b-2 border-offWhite/10 mb-12 pt-12 backdrop-blur-md bg-navy/80"
    >
      <Link href="/">
        <h1 className="text-2xl font-black tracking-tighter hover:text-redAccent transition-colors cursor-pointer uppercase text-offWhite">
          CYRUS WISE<span className="text-redAccent">.</span>
        </h1>
      </Link>
      <div className="flex gap-6 items-center text-sm font-bold tracking-widest uppercase text-offWhite">
        <Link 
          href="/#experience" 
          className="hover:text-redAccent transition-colors"
        >
          Experience
        </Link>
        <Link 
          href="/#projects" 
          className="hover:text-redAccent transition-colors"
        >
          Projects
        </Link>
        <Link 
          href="/resume" 
          className="px-4 py-2 bg-offWhite text-navy hover:bg-redAccent hover:text-offWhite transition-colors"
        >
          Resume
        </Link>
      </div>
    </motion.nav>
  );
}