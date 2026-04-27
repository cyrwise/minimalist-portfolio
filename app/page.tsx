"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { experiences, projects } from "@/lib/data";

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

const getTagIcon = (tag: string) => {
  const icons: Record<string, string> = {
    'SWIFT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    'SWIFTUI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
    'FIREBASE': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
    'NODE.JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    'REACT': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'PYTHON': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'FASTAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
    'POSTGRES': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'OPENCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
    'FLASK': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'TENSORFLOW': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
    'DOCKER': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  };
  return icons[tag] || null;
};

// Extracted Slideshow Component with Video Support
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
  const isVideo = currentSlide.image?.endsWith('.mp4') || currentSlide.image?.endsWith('.webm');

  return (
    <div 
      className="mt-6 md:mt-8 ml-0 md:ml-16 border-t-[1px] border-border pt-6 cursor-default"
      onClick={(e) => {
        // Prevent click from propagating to the parent <a> link wrapper
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/2 relative aspect-video bg-fg/[0.02] border-[1px] border-border rounded-sm overflow-hidden shrink-0">
          {isVideo ? (
            <video 
              src={currentSlide.image} 
              autoPlay 
              loop 
              muted 
              playsInline 
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

export default function Home() {
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
    <main className="pb-12 text-fg font-sans w-full transition-colors duration-300">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-16 pb-24 flex flex-col-reverse md:flex-row gap-12 items-center justify-between border-none px-4 md:px-0"
      >
        <div className="md:w-3/5 text-center md:text-left z-10 relative">
          <div className="absolute left-[-1rem] md:left-[-1.5rem] top-0 bottom-[40%] w-[2px] bg-accent"></div>

          <p className="text-fg font-medium tracking-wide text-sm mb-6 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> Hello, I'm Cyrus
          </p>
          <h2 className="text-4xl md:text-6xl font-medium leading-tight mb-8 text-fg font-serif">
            Crafting systems <br /> & scaling ideas.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-muted font-normal leading-relaxed mb-10 mx-auto md:mx-0">
            I am a software engineer, machine learning researcher, and startup founder. I focus on the art of AI infrastructure and modern web development—bridging the gap between technical execution and visionary strategy.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-muted font-mono">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              SAN FRANCISCO, CA
            </div>
            <a href="mailto:cyr@berkeley.edu" className="text-sm font-medium tracking-wide text-muted hover:text-accent transition-colors font-mono uppercase">
              cyr@berkeley.edu
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://linkedin.com/in/cyruswise" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-transparent border-[1px] border-border hover:border-accent px-5 py-2.5 rounded-sm transition-all group">
              <span className="text-xs font-medium text-fg uppercase tracking-widest font-mono group-hover:text-accent">LinkedIn</span>
              <svg className="w-4 h-4 text-fg group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://github.com/cyrwise" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-transparent border-[1px] border-border hover:border-accent px-5 py-2.5 rounded-sm transition-all group">
              <span className="text-xs font-medium text-fg uppercase tracking-widest font-mono group-hover:text-accent">GitHub</span>
              <svg className="w-4 h-4 text-fg group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>

        <div className="md:w-2/5 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-[350px] md:h-[350px] relative bg-transparent shrink-0">
            <Image 
              src="/images/face.png" 
              alt="Cyrus Wise" 
              fill
              className="object-contain transition-all duration-500 brightness-0 dark:invert"
              style={{ filter: 'grayscale(100%)' }}
              priority 
            />
          </div>
        </div>
      </motion.section>

      {/* Education Section - Blueprint Roadmap Aesthetic */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-t-[1px] border-border pb-24 pt-12 px-4 md:px-0"
      >
        <div className="mb-16">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-2 block text-center md:text-left">The Journey</span>
          <h3 className="text-3xl font-serif font-medium text-fg text-center md:text-left">Academic Narrative</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          
          {/* Stage 1: BCC */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
            <div className="w-12 h-12 rounded-full border-[1px] border-border flex items-center justify-center mb-6 bg-fg/[0.02] text-[10px] font-mono">CC</div>
            <h4 className="text-sm font-serif font-medium mb-2">Berkeley City College</h4>
            <p className="text-[11px] text-muted leading-relaxed uppercase font-mono tracking-tighter">STEM Baseline & Foundational Logic</p>
            <p className="mt-3 text-[12px] text-muted/60 leading-relaxed hidden md:block">Establishing the mathematical and logical rigor required for high-level computation.</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block flex-1 h-[1px] bg-border relative">
            <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-border rotate-45"></div>
          </div>
          <div className="md:hidden w-[1px] h-12 bg-border relative">
             <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 border-b-[1px] border-r-[1px] border-border rotate-45"></div>
          </div>

          {/* Stage 2: Berkeley (The Focal Point) */}
          <div className="flex flex-col items-center text-center md:w-1/3 bg-fg/[0.02] border-[1px] border-border p-8 rounded-sm relative group">
            <div className="w-20 h-20 relative mb-6">
               <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" 
                alt="UC Berkeley" 
                className="w-full h-full object-contain grayscale-0 group-hover:grayscale transition-all duration-700"
              />
            </div>
            <h4 className="text-lg font-serif font-medium mb-1">UC Berkeley</h4>
            <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">EECS & AI Research</p>
            <p className="text-xs text-muted/80 leading-relaxed max-w-[220px]">
              Specializing in AI infrastructure. Solving technical debt through rigorous research and architectural deep-dives.
            </p>
            <div className="absolute -top-2 -right-2 px-2 py-1 bg-bg border-[1px] border-border text-[9px] font-mono text-muted uppercase">Currently Here</div>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block flex-1 h-[1px] bg-border relative">
            <div className="absolute right-0 -top-[3px] w-1.5 h-1.5 border-t-[1px] border-r-[1px] border-border rotate-45"></div>
          </div>
          <div className="md:hidden w-[1px] h-12 bg-border relative">
             <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 border-b-[1px] border-r-[1px] border-border rotate-45"></div>
          </div>

          {/* Stage 3: Future */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right md:w-1/4">
            <div className="w-12 h-12 rounded-full border-[1px] border-dashed border-accent flex items-center justify-center mb-6 text-[10px] font-mono text-accent">MBA</div>
            <h4 className="text-sm font-serif font-medium mb-2">MBA Aspiration</h4>
            <p className="text-[11px] text-muted leading-relaxed uppercase font-mono tracking-tighter">Organizational Scaling & Visionary Leadership</p>
            <p className="mt-3 text-[12px] text-muted/60 leading-relaxed hidden md:block">Bridging the technical gap to drive high-stakes business outcomes and scale global ventures.</p>
          </div>

        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-none py-16 px-4 md:px-0"
      >
        <div className="flex items-center gap-4 mb-8 relative">
          <div className="absolute left-[-1rem] md:left-[-1.5rem] w-[2px] h-[80%] bg-accent"></div>
          <h3 className="text-sm font-mono font-medium text-muted uppercase tracking-[0.3em]">Work History</h3>
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

                {/* Component specifically checking for our new slides array */}
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

      {/* Projects Section */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-none py-16 px-4 md:px-0"
      >
        <div className="flex items-center gap-4 mb-12 relative">
          <div className="absolute left-[-1rem] md:left-[-1.5rem] w-[2px] h-[80%] bg-accent"></div>
          <h3 className="text-sm font-mono font-medium text-muted uppercase tracking-[0.3em]">Code & Research</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-[1px] border-border">
          {projects.map((project) => (
            <div key={project.id} className="group bg-bg p-8 hover:bg-fg/[0.015] dark:hover:bg-fg/[0.03] transition-all flex flex-col justify-between min-h-[300px]">
              <div>
                <h4 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{project.title}</h4>
                <p className="text-sm text-muted/90 leading-relaxed mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                  const iconUrl = getTagIcon(tag);
                  return (
                    <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border-[1px] border-border px-2 py-1 text-muted flex items-center gap-1.5 group-hover:bg-fg/[0.05] transition-colors">
                      {iconUrl && <img src={iconUrl} alt={tag} className="w-3 h-3 grayscale-0 group-hover:grayscale group-hover:opacity-50 transition-all" />}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-32 flex flex-col items-center border-t-[1px] border-border mt-16"
      >
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-accent mb-6">Built in Berkeley</span>
        <h2 className="text-5xl md:text-7xl font-serif font-medium mb-12 text-fg text-center">Ready to scale.</h2>
        <a href="mailto:cyr@berkeley.edu" className="font-mono text-xs uppercase tracking-[0.2em] border-b-[1px] border-fg pb-2 hover:text-accent hover:border-accent transition-all">
          Initiate Contact
        </a>
      </motion.section>
    </main>
  );
}