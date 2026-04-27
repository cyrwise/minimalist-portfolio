"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ResumePage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className="pb-24 text-fg h-[90vh] flex flex-col transition-none px-4 md:px-0"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-border pb-6 shrink-0 relative gap-4">
        <div>
          <div className="absolute left-[-1.25rem] top-[0.5rem] bottom-[1.25rem] w-[2px] bg-accent"></div>
          
          <h2 className="text-4xl font-medium tracking-tight mb-2 font-serif text-fg">
            Curriculum vitae
          </h2>
          <p className="text-muted/70 font-medium tracking-wide uppercase text-sm">
            Updated April 2026
          </p>
        </div>

        {/* Visible on all screens, square-ish radius, and 2px border for visibility */}
        <motion.a
          href="/resume.pdf"
          download
          className="flex items-center gap-3 border-2 border-border px-8 py-3 text-sm font-medium tracking-wide uppercase transition-all rounded-lg 
                     bg-transparent text-fg hover:border-accent hover:bg-accent hover:text-white group transition-none w-full md:w-auto justify-center"
        >
          <span>Download PDF</span>
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </motion.svg>
        </motion.a>
      </div>

      <div className="w-full flex-grow rounded-xl overflow-hidden border-2 border-dashed border-border bg-transparent p-1">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-lg"
          title="Cyrus Wise Resume"
        />
      </div>
    </motion.main>
  );
}