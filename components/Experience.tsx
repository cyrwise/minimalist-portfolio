"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { experiences } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ExperienceSlideshow = ({ slides }: { slides: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!slides || slides.length === 0) return null;

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];
  // Improved video detection
  const isVideo = currentSlide.image?.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div 
      className="mt-6 md:mt-8 ml-0 md:ml-16 border-t-[1px] border-border pt-6 cursor-default"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2 relative aspect-video bg-fg/[0.02] border-[1px] border-border rounded-sm overflow-hidden shrink-0 group/media">
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/media:opacity-100 transition-opacity z-10 pointer-events-none"></div>
          {isVideo ? (
            <video 
              key={currentSlide.image} // Crucial: forces re-render/reload when slide changes
              src={currentSlide.image} 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full h-full object-cover absolute inset-0"
            />
          ) : (
            <Image 
              src={currentSlide.image} 
              alt="Experience Insight" 
              fill 
              className="object-cover" 
            />
          )}
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center py-2">
          <p className="text-sm text-muted/80 leading-relaxed mb-6 font-sans">
            {currentSlide.description}
          </p>
          
          {slides.length > 1 && (
            <div className="flex items-center gap-4 select-none">
              <button 
                onClick={prevSlide} 
                className="w-8 h-8 flex items-center justify-center border-[1px] border-border hover:border-accent hover:text-accent transition-colors rounded-sm text-muted"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="text-[10px] font-mono text-muted tracking-widest">
                {currentIndex + 1} / {slides.length}
              </span>
              <button 
                onClick={nextSlide} 
                className="w-8 h-8 flex items-center justify-center border-[1px] border-border hover:border-accent hover:text-accent transition-colors rounded-sm text-muted"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const groupedExperiences = experiences.reduce((acc: any[], current: any) => {
    const last = acc[acc.length - 1];
    if (last && last.company === current.company) {
      last.roles.push({ 
        id: current.id, 
        role: current.role, 
        date: current.date, 
        description: current.description 
      });
    } else {
      acc.push({
        company: current.company,
        image: current.image,
        link: current.link,
        slides: current.slides, 
        roles: [{ 
          id: current.id, 
          role: current.role, 
          date: current.date, 
          description: current.description 
        }]
      });
    }
    return acc;
  }, []);

  return (
    <motion.section 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className="scroll-mt-[120px] border-none px-4 md:px-0"
    >
      <div className="mb-16 relative">
        <div className="w-full h-[1px] bg-border mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start md:items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6 block">02 / The Crucible</span>
            <h3 className="text-5xl md:text-7xl font-serif font-medium text-fg leading-none tracking-tight">Work History.</h3>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l-[1px] border-border pb-2">
            <p className="text-sm text-muted/80 leading-relaxed font-sans max-w-md">
              These roles gave me my first real exposure to how systems behave outside of theory. I started to understand the gap between building something that works and creating value that holds up.
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t-[1px] border-border">
        {groupedExperiences.map((group, index) => {
          const hasLink = group.link && group.link !== '#' && group.link !== '';

          const Content = (
            <div className="w-full">
              <div className="flex items-start gap-8 w-full">
                <div className="w-10 h-10 shrink-0 grayscale-0 group-hover:grayscale group-hover:opacity-50 transition-all opacity-100 mt-1">
                  <Image src={group.image} alt={group.company} width={40} height={40} className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h4 className={`text-xl font-serif text-fg transition-colors duration-300 ${hasLink ? 'group-hover:text-accent' : ''}`}>
                      {group.company}
                    </h4>
                    {hasLink && (
                      <svg className="w-3.5 h-3.5 text-accent opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    )}
                  </div>
                  <div className="space-y-6">
                    {group.roles.map((r: any) => (
                      <div key={r.id} className="relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-1">
                          <p className="text-[11px] font-mono uppercase tracking-widest text-accent transition-none">
                            {r.role}
                          </p>
                          <span className="text-[10px] font-mono text-muted/60 uppercase transition-colors duration-300 group-hover:text-muted">
                            {r.date}
                          </span>
                        </div>
                        <p className="text-sm text-muted/80 leading-relaxed max-w-3xl transition-colors duration-300 group-hover:text-muted">
                          {r.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {group.slides && <ExperienceSlideshow slides={group.slides} />}

            </div>
          );

          const containerClasses = "flex flex-col md:flex-row md:items-start justify-between py-10 border-b-[1px] border-border last:border-0 group hover:bg-fg/[0.015] dark:hover:bg-fg/[0.03] transition-colors duration-300 transform-gpu antialiased px-4 -mx-4 rounded-sm block text-left";

          return hasLink ? (
            <a key={index} href={group.link} target="_blank" rel="noreferrer" className={containerClasses}>
              {Content}
            </a>
          ) : (
            <div key={index} className={containerClasses}>
              {Content}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}