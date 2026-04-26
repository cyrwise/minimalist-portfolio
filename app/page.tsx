"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { experiences, projects } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  return (
    <main className="pb-12 text-offWhite font-sans">
      
      {/* HERO SECTION */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="pt-12 pb-24 flex flex-col-reverse md:flex-row gap-12 items-center justify-between border-none"
      >
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-redAccent font-bold tracking-widest uppercase text-sm mb-4">■ Available for work</p>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            BUILDING SYSTEMS <br /> & SCALING IDEAS.
          </h2>
          <p className="text-lg md:text-xl max-w-2xl text-offWhite/80 font-medium mb-10 mx-auto md:mx-0">
            I am a software engineer, machine learning researcher, and startup founder focusing on AI infrastructure and modern web development. 
            Bridging the gap between technical execution and high-level strategy.
          </p>

          {/* HORIZONTAL CONTACT STRIP */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-6">
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-offWhite/60">
              <svg className="w-4 h-4 text-redAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              San Francisco, CA
            </div>
            <a href="mailto:cyr@berkeley.edu" className="text-sm font-bold tracking-widest uppercase text-offWhite/60 hover:text-redAccent transition-colors">
              cyr@berkeley.edu
            </a>
          </div>

          {/* HIGH VISIBILITY SOCIALS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://linkedin.com/in/cyruswise" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-offWhite/5 border border-offWhite/10 hover:border-redAccent px-4 py-2 rounded-full transition-all group">
              <svg className="w-4 h-4 text-offWhite group-hover:text-redAccent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              <span className="text-sm font-bold text-offWhite group-hover:text-redAccent transition-colors">LinkedIn</span>
              <span className="bg-[#0077b5] text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-1 shadow-lg tracking-wider">19K+</span>
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-offWhite/5 border border-offWhite/10 hover:border-redAccent px-4 py-2 rounded-full transition-all group">
              <svg className="w-4 h-4 text-offWhite group-hover:text-redAccent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.936H5.08z" /></svg>
              <span className="text-sm font-bold text-offWhite group-hover:text-redAccent transition-colors">Twitter</span>
            </a>
            <a href="https://github.com/cyrwise" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-offWhite/5 border border-offWhite/10 hover:border-redAccent px-4 py-2 rounded-full transition-all group">
              <svg className="w-4 h-4 text-offWhite group-hover:text-redAccent transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="text-sm font-bold text-offWhite group-hover:text-redAccent transition-colors">GitHub</span>
            </a>
          </div>
        </div>

        {/* PORTRAIT */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-redAccent relative overflow-hidden bg-offWhite shrink-0 shadow-2xl">
            <Image 
              src="/images/face.png" 
              alt="Cyrus Wise" 
              fill
              className="object-cover transition-all duration-500"
              priority 
            />
          </div>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-none pb-16 pt-8"
      >
        <h3 className="text-xl font-bold tracking-widest uppercase mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-redAccent"></span> Education
        </h3>
        <div className="flex items-start md:items-center gap-6 group p-8 border border-offWhite/10 bg-offWhite/5 rounded-xl hover:border-offWhite/20 transition-colors">
          <div className="w-16 h-16 shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" 
              alt="UC Berkeley Seal" 
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-white">University of California, Berkeley</h4>
            <p className="text-offWhite/80 font-medium mt-1 text-sm md:text-base">B.S. Electrical Engineering & Computer Sciences, Minor in Data Science</p>
            <p className="text-sm font-bold tracking-widest uppercase text-offWhite/60 mt-2">Expected 2026</p>
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE - Reverted to Simple List */}
      <motion.section 
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-none py-16"
      >
        <h3 className="text-xl font-bold tracking-widest uppercase mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-redAccent"></span> Places I've Worked
        </h3>
        
        <div className="border-t border-b border-dashed border-offWhite/30 py-2">
          {experiences.map((exp) => {
            const hasLink = exp.link && exp.link !== '#' && exp.link !== '';

            const ExperienceContent = (
              <div className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-dashed border-offWhite/20 last:border-0 group hover:bg-offWhite/5 transition-colors px-4 -mx-4 rounded-lg w-full">
                <div className="flex items-center gap-6 mb-2 md:mb-0">
                  <div className="w-12 h-12 shrink-0 bg-white rounded flex items-center justify-center relative overflow-hidden">
                    <Image src={exp.image} alt={exp.company} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold flex items-center gap-2 transition-colors ${hasLink ? 'group-hover:text-redAccent' : ''}`}>
                      {exp.company}
                      {hasLink && (
                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-redAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      )}
                    </h4>
                    <p className="text-offWhite/60 text-sm mt-1 font-normal">{exp.role}</p>
                  </div>
                </div>
                <div className="text-sm font-bold tracking-widest uppercase text-offWhite/50 md:text-right pl-18 md:pl-0">
                  {exp.date}
                </div>
              </div>
            );

            return hasLink ? (
              <a key={exp.id} href={exp.link} target="_blank" rel="noreferrer" className="block">
                {ExperienceContent}
              </a>
            ) : (
              <div key={exp.id} className="block">
                {ExperienceContent}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section 
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="border-none py-16"
      >
        <h3 className="text-xl font-bold tracking-widest uppercase mb-8 flex items-center gap-4">
          <span className="w-8 h-[2px] bg-redAccent"></span> Projects
        </h3>
        
        <div className="border-t border-b border-solid border-offWhite/10 py-2">
          {projects.map((project) => {
            const hasLink = project.link && project.link !== '#' && project.link !== '';

            const Content = (
               <>
                 <div className="md:w-2/3 pr-4">
                    <h4 className={`text-2xl font-bold mb-2 flex items-center gap-2 transition-colors ${hasLink ? 'group-hover:text-redAccent' : ''}`}>
                      {project.title}
                      {hasLink && (
                        <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-redAccent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      )}
                    </h4>
                    <p className="text-offWhite/70 text-sm leading-relaxed">{project.description}</p>
                 </div>
                 <div className="md:w-1/3 mt-4 md:mt-0 flex flex-wrap gap-2 md:justify-end content-start">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold tracking-widest border border-offWhite/20 px-2 py-1 rounded text-offWhite/60 bg-navy">
                        {tag}
                      </span>
                    ))}
                 </div>
               </>
            );

            const containerClasses = "flex flex-col md:flex-row md:items-start justify-between py-6 border-b border-solid border-offWhite/10 last:border-0 hover:bg-offWhite/5 transition-colors px-4 -mx-4 rounded-lg block group";

            return hasLink ? (
              <a key={project.id} href={project.link} target="_blank" rel="noreferrer" className={containerClasses}>
                {Content}
              </a>
            ) : (
              <div key={project.id} className={containerClasses}>
                {Content}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="border-none py-24 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">LET'S BUILD.</h2>
        <a href="mailto:cyr@berkeley.edu" className="inline-block bg-offWhite text-navy text-lg font-bold px-8 py-4 hover:bg-redAccent hover:text-offWhite transition-colors">
          GET IN TOUCH
        </a>
      </motion.section>

    </main>
  );
}