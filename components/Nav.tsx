"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Transition } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const lineTransition: Transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <>
      <div className="h-[96px] md:h-[112px] w-full shrink-0" />
      
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 z-50 flex flex-col py-6 md:py-8 border-b-[1px] border-border backdrop-blur-md bg-bg/80 w-full transition-colors duration-300"
      >
        {/* Removed max-w-7xl and adjusted padding to space the elements properly across the full width */}
        <div className="flex justify-between items-center w-full px-6 md:px-12 lg:px-16">
          <Link href="/" onClick={handleLogoClick} className="cursor-pointer">
            <h1 className="text-2xl font-black tracking-tighter hover:text-accent transition-colors uppercase text-fg">
              CYRUS WISE<span className="text-accent">.</span>
            </h1>
          </Link>
          
          <div className="hidden md:flex gap-6 items-center text-sm font-bold tracking-widest uppercase text-fg">
            <Link href="/#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-accent transition-colors cursor-pointer">
              Experience
            </Link>
            <Link href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-accent transition-colors cursor-pointer">
              Projects
            </Link>
            <Link href="/resume" className="px-4 py-2 bg-fg text-bg hover:bg-accent hover:text-fg transition-colors">
              Resume
            </Link>
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="cursor-pointer p-2 border-[1px] border-border rounded-full hover:border-accent hover:text-accent transition-all flex items-center justify-center w-10 h-10"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="cursor-pointer p-2 text-fg hover:text-accent transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            )}

            <button 
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-8 h-8 z-50 text-fg cursor-pointer"
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
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden w-full overflow-hidden px-6"
            >
              <div className="flex flex-col gap-4 text-sm font-bold tracking-widest uppercase text-fg items-center mt-6 pb-2">
                <Link href="/#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover:text-accent transition-colors py-2 w-full text-center">
                  Experience
                </Link>
                <Link href="/#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-accent transition-colors py-2 w-full text-center">
                  Projects
                </Link>
                <Link href="/resume" onClick={toggleMenu} className="px-4 py-2 mt-2 bg-fg text-bg hover:bg-accent hover:text-fg transition-colors w-full text-center">
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}