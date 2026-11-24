// the five the owner named come first, then the resume groups
export const FEATURED_SKILLS = ['React Native', 'Python', 'Django', 'JavaScript', 'AWS'] as const

export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: 'AI & GenAI', items: ['Prompt Engineering', 'Agent Workflows', 'LLM Tool Calling', 'MCP', 'Structured Outputs'] },
  { label: 'AI Dev Tools', items: ['Claude Code', 'Google Antigravity', 'GitHub Copilot', 'Cursor', 'ChatGPT', 'Gemini'] },
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Kotlin', 'SQL', 'Shell'] },
  { label: 'Backend', items: ['Django', 'Django REST Framework', 'REST API Design', 'Multi-Tenant SaaS', 'RBAC', 'Socket.IO'] },
  { label: 'Frontend & Mobile', items: ['React.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { label: 'Cloud & DevOps', items: ['AWS (EC2, RDS, S3, SES)', 'Docker', 'CI/CD', 'Git', 'GitHub', 'GitLab'] },
  { label: 'Databases', items: ['MySQL', 'MongoDB', 'Firebase Realtime DB'] },
  { label: 'Testing & Security', items: ['Maestro', 'Playwright', 'Postman', 'Talsec FreeRASP', 'AES-256', 'Biometric Auth'] },
]
