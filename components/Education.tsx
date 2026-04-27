"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Education() {
  return (
    <motion.section 
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="scroll-mt-[120px] border-t-[1px] border-border pt-12 px-4 md:px-0"
    >
      <div className="mb-16 relative">
        <div className="w-full h-[1px] bg-border mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start md:items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6 block">01 / The Pathway</span>
            <h3 className="text-5xl md:text-7xl font-serif font-medium text-fg leading-none tracking-tight">My Academic Narrative.</h3>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l-[1px] border-border pb-2">
            <p className="text-sm text-muted/80 leading-relaxed font-sans max-w-md">
              This is where I built my foundation in math, systems, and problem-solving. Over time, I've become more interested in how those ideas actually hold up in real-world systems.          
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
        
        <div className="flex flex-col items-center text-center md:w-1/4">
          <div className="w-14 h-14 rounded-full border-[1px] border-border flex items-center justify-center mb-6 bg-fg/[0.02] text-xs font-mono">CC</div>
          <h4 className="text-lg font-serif font-medium mb-2">Berkeley City College</h4>
          <p className="text-xs text-muted leading-relaxed uppercase font-mono tracking-tighter">STEM Baseline & Logic</p>
          <p className="mt-3 text-xs md:text-sm text-muted/70 leading-relaxed">
            Built foundational rigor in mathematics and logic, which shaped my approach to problem-solving in later systems work.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2 border-[1px] border-border px-3 py-1.5 rounded-sm">
            <div className="w-1.5 h-1.5 bg-border rounded-full"></div>
            <span className="text-[9px] font-mono text-muted tracking-widest">2023 — 2025</span>
          </div>
        </div>

        {/* Arrow 1 - Desktop */}
        <motion.div 
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="hidden md:flex flex-1 items-center px-2"
        >
          <div className="flex-1 h-[2px] bg-fg/40"></div>
          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-fg/40 -ml-[1px]"></div>
        </motion.div>
        
        {/* Arrow 1 - Mobile */}
        <motion.div 
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="md:hidden flex flex-col items-center h-16 py-1"
        >
           <div className="w-[2px] flex-1 bg-fg/40"></div>
           <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] border-t-fg/40 -mt-[1px]"></div>
        </motion.div>

        <a 
          href="https://www.berkeley.edu/directory/?search-term=Cyrus+Wise"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center text-center md:w-1/3 bg-fg/[0.02] border-[1px] border-border p-10 rounded-sm relative group hover:border-accent transition-colors duration-500 cursor-pointer"
        >
          <div className="w-24 h-24 relative mb-6">
             <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" 
              alt="UC Berkeley" 
              className="w-full h-full object-contain grayscale-0 group-hover:grayscale transition-all duration-700"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-2xl font-serif font-medium text-fg group-hover:text-accent transition-colors">UC Berkeley</h4>
            <svg className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </div>

          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">EECS & Data Science</p>
          <p className="text-xs md:text-sm text-muted/80 leading-relaxed max-w-[250px]">
            Shifted toward AI systems and infrastructure, focusing less on theory and more on how models translate into real-world systems.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 border-[1px] border-accent px-3 py-1.5 rounded-sm bg-accent/5 group-hover:bg-accent/10 transition-colors">
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <span className="text-[9px] font-mono text-accent tracking-widest">Exp Grad: 2027 — 2028</span>
          </div>

          <div className="absolute -top-3 -right-3 px-3 py-1.5 bg-bg border-[1px] border-border text-[10px] font-mono text-muted uppercase tracking-widest shadow-sm">Currently Here</div>
        </a>

        {/* Arrow 2 - Desktop */}
        <motion.div 
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.25 }}
          className="hidden md:flex flex-1 items-center px-2"
        >
          <div className="flex-1 h-[2px] bg-fg/40"></div>
          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-fg/40 -ml-[1px]"></div>
        </motion.div>
        
        {/* Arrow 2 - Mobile */}
        <motion.div 
          animate={{ opacity: [0.15, 1, 0.15] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1.25 }}
          className="md:hidden flex flex-col items-center h-16 py-1"
        >
           <div className="w-[2px] flex-1 bg-fg/40"></div>
           <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] border-t-fg/40 -mt-[1px]"></div>
        </motion.div>

        <div className="flex flex-col items-center text-center md:w-1/4">
          <div className="w-14 h-14 rounded-full border-[1px] border-dashed border-accent flex items-center justify-center mb-6 text-xs font-mono text-accent">MBA</div>
          <h4 className="text-lg font-serif font-medium mb-2">MBA Aspiration</h4>
          <p className="text-xs text-muted leading-relaxed uppercase font-mono tracking-tighter">Scaling & Visionary</p>
          <p className="mt-3 text-xs md:text-sm text-muted/70 leading-relaxed">
            Increasingly focused on scaling technical systems into products and organizations, with an interest in leadership and business execution.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 border-[1px] border-border border-dashed px-3 py-1.5 rounded-sm">
            <div className="w-1.5 h-1.5 border-[1px] border-muted rounded-full"></div>
            <span className="text-[9px] font-mono text-muted tracking-widest">2028 — 2030</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}