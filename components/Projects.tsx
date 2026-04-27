"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const getTagData = (tag: string) => {
  const data: Record<string, { icon: string, url: string }> = {
    'SWIFT': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg', url: 'https://developer.apple.com/swift/' },
    'SWIFTUI': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg', url: 'https://developer.apple.com/xcode/swiftui/' },
    'FIREBASE': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com/' },
    'NODE.JS': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    'REACT': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev/' },
    'PYTHON': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://www.python.org/' },
    'FASTAPI': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', url: 'https://fastapi.tiangolo.com/' },
    'POSTGRES': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', url: 'https://www.postgresql.org/' },
    'OPENCV': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg', url: 'https://opencv.org/' },
    'FLASK': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', url: 'https://flask.palletsprojects.com/' },
    'C++': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org/' },
    'TENSORFLOW': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', url: 'https://www.tensorflow.org/' },
    'DOCKER': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://www.docker.com/' }
  };
  return data[tag] || null;
};

export default function Projects() {
  return (
    <motion.section 
      id="projects"
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
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-accent mb-6 block">03 / The Sandbox</span>
            <h3 className="text-5xl md:text-7xl font-serif font-medium text-fg leading-none tracking-tight">Featured Projects.</h3>
          </div>
          <div className="md:col-span-5 md:pl-8 md:border-l-[1px] border-border pb-2">
            <p className="text-sm text-muted/80 leading-relaxed font-sans max-w-md">
              Most of these projects started from needs I ran into myself or saw others run into. I used them as a way to explore possible solutions by actually building them.            
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-[1px] border-border">
        {projects.map((project: any) => (
          <div key={project.id} className="group bg-bg p-8 hover:bg-fg/[0.015] dark:hover:bg-fg/[0.03] transition-all flex flex-col justify-between min-h-[350px]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-serif group-hover:text-accent transition-colors">{project.title}</h4>
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-[13px] text-muted/90 leading-relaxed">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest mr-3">The Spark</span>
                  <span className="italic">{project.why}</span>
                </p>
                <p className="text-[13px] text-muted/90 leading-relaxed">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest mr-3">The Build</span>
                  {project.what}
                </p>
                <p className="text-[13px] text-muted/90 leading-relaxed">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest mr-3">The Insight</span>
                  {project.insight}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-[1px] border-border/50">
              {project.tags.map((tag: string) => {
                const tagData = getTagData(tag);
                return tagData ? (
                  <a 
                    key={tag} 
                    href={tagData.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] font-mono uppercase tracking-widest border-[1px] border-border px-2 py-1 text-muted flex items-center gap-1.5 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    <img src={tagData.icon} alt={tag} className="w-3 h-3 grayscale-0 group-hover:grayscale group-hover:opacity-50 transition-all hover:!grayscale-0 hover:!opacity-100" />
                    {tag}
                  </a>
                ) : (
                  <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border-[1px] border-border px-2 py-1 text-muted flex items-center gap-1.5">
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}