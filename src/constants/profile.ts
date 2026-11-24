export const PROFILE = {
  name: 'Aman Kumar Kulshreshtha',
  firstName: 'Aman',
  initials: 'AK',
  role: 'AI-Augmented Full-Stack Engineer',
  tagline: 'GenAI & Agentic Workflows',
  summary:
    'Full-Stack Engineer with 3+ years shipping production web and mobile products with Python/Django, React, TypeScript and React Native. I build with an AI-first workflow: specs before code, human review of every AI-generated change, tests and CI gates before merge.',
  location: 'Mohali, Punjab, India',
  // coordinates of Mohali, shown as a survey label
  coords: '30.70°N 76.72°E',
  email: 'amankulshreshtha340@gmail.com',
  phone: '+91 7302724295',
  phoneHref: 'tel:+917302724295',
  linkedin: 'https://www.linkedin.com/in/aman-kul',
  github: 'https://github.com/Amankulshreshtha',
  resume:
    'https://green-advisory-lizard-787.mypinata.cloud/ipfs/bafkreiaq732ak4y6ilrlgpger3atarcegoyfrakd3ptjqfathjycnqgdqq',
} as const

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const MARQUEE_ROWS = [
  ['Python', 'Django', 'React', 'TypeScript', 'React Native', 'MCP', 'Claude Code', 'AWS'],
  ['Prompt Engineering', 'Agent Workflows', 'REST APIs', 'Docker', 'MySQL', 'Tailwind CSS', 'Redux Toolkit', 'Playwright'],
] as const

// every figure below is backed by the resume
export const STATS = [
  { value: 3, suffix: '+', label: 'Years shipping' },
  { value: 2, suffix: '', label: 'Companies' },
  { value: 4, suffix: '', label: 'Products built' },
  { value: 2, suffix: '', label: 'Store-released apps' },
] as const

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Engineering',
  school: 'Amrapali Institute of Technology and Sciences',
  place: 'Haldwani, Uttarakhand',
  years: '2019 – 2023',
  certifications: [
    'Generative AI Fundamentals',
    'Prompt Engineering for LLMs',
    'React Native Development',
    'JavaScript & TypeScript',
    'Core Java',
    'Spring Boot Fundamentals',
  ],
} as const
