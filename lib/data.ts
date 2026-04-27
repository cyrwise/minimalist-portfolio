export const experiences = [
  {
    id: 'ucb1',
    company: 'University of California, Berkeley',
    role: 'Co-Reader / Grader',
    date: 'Aug 2025 - Dec 2025',
    image: '/images/berkeley-logo.jpg',
    link: 'https://eecs.berkeley.edu/',
    description: 'Evaluated upper-division coursework and helped students think more clearly about problem-solving and structure.'
  },
  {
    id: 'ucb',
    company: 'University of California, Berkeley',
    role: 'Head Graduate Student Instructor',
    date: 'May 2025 - Aug 2025',
    image: '/images/berkeley-logo.jpg',
    link: 'https://eecs.berkeley.edu/',
    description: 'Led weekly discussion sections, helping students work through complex material and stay on track with course logistics.'  },
  {
    id: 'sfsu',
    company: 'SFSU',
    role: 'Machine Learning Researcher',
    date: 'May 2025 - Aug 2025',
    image: '/images/sfsu-logo.jpg',
    link: 'https://www.sfsu.edu/',
    description: 'Trained a StructGNN model to predict building forces with 99.2% accuracy, working closely with civil engineering constraints where model output had to reflect real-world physics; not just data patterns.',
    slides: [
      { image: '/images/sfsu-speech.png', description: 'Research collaborator Matthew Pascual presenting our team\'s research at the Gilead Research Symposium at San Francisco State University.'},
    ]      
  },
  {
    id: 'nasa',
    company: 'NASA',
    role: 'Lead Software Engineer (NCAS Missions I, II, III)',
    date: 'Jan 2025 - Jul 2025',
    image: '/images/nasa-logo.png',
    link: 'https://www.nasa.gov/',
    description: 'Prototyping an AI flight path for autonomous cargo drones at Langley meant working in a zero-margin-for-error environment, where simulated trajectories had to align with live wind tunnel data in real time.',
    slides: [
      { 
        image: '/images/nasa-speech.jpg', 
        description: 'Presenting our team’s autonomous flight path prototypes to NASA engineers during final review.'
      },
      { 
        image: '/images/nasa-team.png', 
        description: 'Summer 2025 NCAS cohort at NASA Langley Research Center in Hampton, Virginia.' 
      },
      { 
        image: '/images/nasa-team1.png', 
        description: 'Touring NASA Langley’s ISAAC facilities.' 
      },
      { 
        image: '/images/nasa-flight.mp4', 
        description: 'Using NASA’s flight simulator to better understand flight behavior for our drone project.'
      }
    ]
  },
  {
    id: 'baywest',
    company: 'Baywest Construction',
    role: 'Backend Developer',
    date: 'Jun 2024 - Aug 2024',
    image: '/images/baywest-logo.png',
    link: 'http://www.baywestconstruction.com/',
    description: 'Architected Node.js REST APIs for real-time inventory tracking, building backend systems that had to immediately support and scale with active supply chain logistics.'
  },
  {
    id: 'sccr',
    company: 'Stanford CCR',
    role: 'Deep Learning Researcher',
    date: 'Oct 2023 - Jan 2024',
    image: '/images/sccr-logo.jpg',
    link: 'https://med.stanford.edu/sccr.html',
    description: 'Developed a Mixture-of-Experts LLM for clinician training, navigating the constraints of domain-specific AI where model outputs had to strictly align with psychopathy-informed clinical standards.',
    slides: [
      { 
        image: '/images/sccr.jpg', 
        description: 'Whiteboarding the architecture for the guardrail system and keyword extraction pipeline to safely constrain the LLM.' 
      },
      { 
        image: '/images/sccr1.jpg', 
        description: 'Mapping out the main LLM formatter, dynamically injecting prompt traits to generate distinct, consistent patient personas.' 
      }
    ]
  },
  {
    id: 'anre',
    company: 'Anre Consulting',
    role: 'Software Engineer & Co-Founder',
    date: 'Oct 2023 - Present',
    image: '/images/anre-logo.png',
    link: 'https://anreai.com',
description: 'Co-founded an AI consulting venture, building the core infrastructure and working across product and engineering to deliver systems for clients.',
slides: [
      { 
        image: '/images/anre-table.jpg', 
        description: 'Pitching our mission to hundreds of new undergraduates at a massive UC Berkeley organizational fair.' 
      },
      { 
        image: '/images/anre-video.mp4', 
        description: 'Generating and structuring conversational data pipelines to fine-tune our core LLM architecture.' 
      },
      { 
        image: '/images/anre-team.jpg', 
        description: 'Deep in engineering with the core team, strategizing alongside our research mentor Ryosuke Negi.' 
      }
    ]
  },
  {
    id: 'bcc',
    company: 'Berkeley City College',
    role: 'Computer Science TA & Tutor',
    date: 'Aug 2023 - May 2025',
    image: '/images/bcc-logo.png',
    link: 'https://www.berkeleycitycollege.edu/lrc',
    description: 'Tutored 400+ hours across CS, math and physics, focusing on breaking down complex paradigms to their absolute first principles; a skill that still drives my approach to systems engineering.'
  }
];

export interface Project {
  id: string;
  title: string;
  why: string;
  what: string;
  insight: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 'gymber',
    title: 'Gymber',
    why: "Built to solve a simple problem: staying consistent is easier when you're not training alone.",
    what: 'Engineered an iOS application with an intuitive swipe-based matching interface, supported by a real-time Node.js and Firebase backend.',
    insight: 'The challenge was architecting low-latency, highly compatible matchmaking with limited early user data.',
    tags: ['SWIFT', 'SWIFTUI', 'FIREBASE', 'NODE.JS'],
    link: '#' // Add your project links here when ready
  },
  {
    id: 'transfer-ai',
    title: 'Transfer Pathway AI',
    why: 'The university transfer process is structurally opaque; I wanted to build a clear, data-driven bridge to top institutions.',
    what: 'Developed a full-stack platform integrating LLMs for context-aware essay revisions, tapping the assist.org API to dynamically map schedules.',
    insight: 'Focus: wrangling scattered public data APIs into a unified, actionable graph structure.',
    tags: ['REACT', 'PYTHON', 'FASTAPI', 'POSTGRES'],
    link: '#'
  },
  {
    id: 'cram',
    title: 'CRAM',
    why: 'Built around a question: can technical reading speed be radically improved without sacrificing deep comprehension?',
    what: 'Implemented a computer vision model utilizing Rapid Serial Visual Presentation, eye-tracking, and intelligent formula parsing.',
    insight: 'The constraint: processing dense, complex material while maintaining the low latency required for real-time tracking.',
    tags: ['OPENCV', 'REACT', 'FLASK', 'PYTHON'],
    link: '#'
  },
  {
    id: 'script-gen',
    title: 'Script & Engagement Gen',
    why: 'Marketing teams burn thousands of hours guessing what resonates; I wanted to mathematically solve engagement.',
    what: 'Created an automated pipeline integrating TensorFlow and Facebook Ads APIs to analyze video performance and generate converting scripts.',
    insight: 'The focus was embedding heavy neural network inference natively into a highly scalable C++ backend.',
    tags: ['PYTHON', 'C++', 'TENSORFLOW', 'DOCKER'],
    link: '#'
  }
];