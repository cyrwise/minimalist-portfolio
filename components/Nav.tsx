"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Snappy spring transition for the hamburger lines
  const lineTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 flex flex-col pb-4 md:pb-8 border-b-2 border-offWhite/10 mb-12 pt-8 md:pt-12 backdrop-blur-md bg-navy/80 w-full"
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/">
          <h1 className="text-2xl font-black tracking-tighter hover:text-redAccent transition-colors cursor-pointer uppercase text-offWhite">
            CYRUS WISE<span className="text-redAccent">.</span>
          </h1>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center text-sm font-bold tracking-widest uppercase text-offWhite">
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

        {/* Mobile Hamburger Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 text-offWhite"
          aria-label="Toggle Navigation Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={lineTransition}
            className="w-6 h-0.5 bg-current block mb-1.5"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-current block mb-1.5"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={lineTransition}
            className="w-6 h-0.5 bg-current block"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full overflow-hidden"
          >
            {/* Inner wrapper for layout. 
              Keeping padding/margin off the motion.div fixes the closing stutter. 
            */}
            <div className="flex flex-col gap-4 text-sm font-bold tracking-widest uppercase text-offWhite items-center mt-6 pb-2">
              <Link 
                href="/#experience" 
                onClick={toggleMenu}
                className="hover:text-redAccent transition-colors py-2 w-full text-center"
              >
                Experience
              </Link>
              <Link 
                href="/#projects" 
                onClick={toggleMenu}
                className="hover:text-redAccent transition-colors py-2 w-full text-center"
              >
                Projects
              </Link>
              <Link 
                href="/resume" 
                onClick={toggleMenu}
                className="px-4 py-2 mt-2 bg-offWhite text-navy hover:bg-redAccent hover:text-offWhite transition-colors w-full text-center"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}