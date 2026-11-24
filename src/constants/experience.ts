export interface Role {
  title: string
  company: string
  place: string
  period: string
  // altitude marker on the survey rail
  elevation: string
  points: string[]
}

export const EXPERIENCE: Role[] = [
  {
    title: 'Software Engineer (Full-Stack / React Native)',
    company: 'iTechnolabs Inc',
    place: 'Mohali, Punjab',
    period: 'April 2026 – Present',
    elevation: '3,100 m',
    points: [
      'AI-first delivery with Claude Code, Antigravity and Copilot/Cursor: AI drafts and refactors, tests are generated and reviewed, every change passes human review and CI before merge.',
      'Automated real estate back-office workflows (inventory ledgers, payment plans, PDF receipts) with Python, Django and DRF for a multi-tenant ERP/CRM: RBAC, dynamic subdomain routing, optimized MySQL queries.',
      'Built event-driven Python automation pipelines for asynchronous communication, third-party API integrations and Google Workspace sync via Service Accounts.',
      'Maintained containerized services on AWS (EC2, RDS MySQL, SES, S3) with shell provisioning scripts and Docker configurations.',
      'Built audit logging and tracking services (SyncLog, CommunicationTracker) capturing latency metrics and error traces.',
      'Shipped a multi-chain crypto wallet in React Native with AES-256 secure storage, biometric auth and Talsec FreeRASP; fixed Android ANRs and startup race conditions with native Kotlin; released to Google Play and the App Store.',
    ],
  },
  {
    title: 'Associate Level - 2 (React Native Developer)',
    company: 'smartData Enterprises',
    place: 'Mohali, Punjab',
    period: 'Oct 2023 – April 2026',
    elevation: '1,800 m',
    points: [
      'Built AI-driven mobile modules with interactive dashboards and secure REST API integration (Mandate-360), working with backend and AI teams on API contracts.',
      'Developed cross-platform apps with React Native, TypeScript and Redux Toolkit; added real-time features with Socket.IO, BLE and Firebase.',
      'Fixed performance and memory issues with Flipper profiling; ran code reviews, mentored junior developers and contributed to CI/CD in Agile/Scrum sprints.',
    ],
  },
]
