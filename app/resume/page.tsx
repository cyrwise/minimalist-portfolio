"use client";

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ResumePage() {
  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="pb-24 text-offWhite h-[90vh] flex flex-col"
    >
      <div className="flex justify-between items-end mb-8 border-b border-offWhite/10 pb-6 shrink-0">
        <div>
          <h2 className="text-4xl font-black tracking-tighter mb-2">CURRICULUM VITAE</h2>
          <p className="text-offWhite/60 font-bold tracking-widest uppercase text-sm">Updated April 2026</p>
        </div>
        <a 
          href="/resume.pdf" 
          download
          className="hidden md:inline-block border border-offWhite/20 px-4 py-2 text-sm font-bold tracking-widest uppercase hover:border-redAccent hover:text-redAccent transition-colors"
        >
          Download PDF
        </a>
      </div>

      {/* BUILT-IN PDF VIEWER */}
      <div className="w-full flex-grow rounded-xl overflow-hidden border-2 border-offWhite/10 bg-offWhite/5">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-full"
          title="Cyrus Wise Resume"
        />
      </div>
    </motion.main>
  );
}