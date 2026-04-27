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

export default function Footer() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      // Reduced py-32 to py-16, removed mt-16 so it stacks cleanly
      className="py-16 flex flex-col items-center border-t-[1px] border-border"
    >
      <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-accent mb-6">Built in Berkeley</span>
      <h2 className="text-5xl md:text-7xl font-serif font-medium mb-12 text-fg text-center">Ready to scale.</h2>
      <a href="mailto:cyr@berkeley.edu" className="font-mono text-xs uppercase tracking-[0.2em] border-b-[1px] border-fg pb-2 hover:text-accent hover:border-accent transition-all">
        Let's work together
      </a>
    </motion.section>
  );
}