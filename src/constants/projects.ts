import goBuilder1 from '../assets/images/go-builder-1.png'
import goBuilder2 from '../assets/images/go-builder-2.png'
import goBuilder3 from '../assets/images/go-builder-3.png'
import goBuilder4 from '../assets/images/go-builder-4.png'
import goBuilder5 from '../assets/images/go-builder-5.png'
import goBuilder6 from '../assets/images/go-builder-6.png'
import goBuilder7 from '../assets/images/go-builder-7.png'
import mind1 from '../assets/images/mindgtc-1.png'
import mind2 from '../assets/images/mindgtc-2.png'
import mind3 from '../assets/images/mindgtc-3.png'
import feel1 from '../assets/images/feelgood-1.jpeg'
import feel2 from '../assets/images/feelgood-2.jpeg'
import feel3 from '../assets/images/feelgood-3.jpeg'
import feel4 from '../assets/images/feelgood-4.jpeg'
import feel5 from '../assets/images/feelgood-5.jpeg'
import feel6 from '../assets/images/feelgood-6.jpeg'
import zen1 from '../assets/images/zenframe-1.jpeg'
import zen2 from '../assets/images/zenframe-2.jpeg'
import zen3 from '../assets/images/zenframe-3.jpeg'
import zen4 from '../assets/images/zenframe-4.jpeg'

export interface Project {
  id: string
  name: string
  kind: string
  period: string
  stack: string[]
  summary: string
  // frame decides which device chrome wraps the shots
  frame: 'laptop' | 'phone'
  // add images here to replace the placeholder; the order is the gallery order
  images: string[]
  link?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'gobuildergo',
    name: 'GoBuilderGo.com',
    kind: 'Real Estate ERP & CRM Platform',
    period: '2026',
    stack: ['Python', 'Django', 'DRF', 'TypeScript', 'MySQL', 'Docker'],
    summary:
      'Multi-tenant SaaS with REST APIs, RBAC and subdomain routing. Automated payment plans, inventory ledgers and PDF receipts that were previously manual.',
    frame: 'laptop',
    images: [goBuilder1, goBuilder2, goBuilder3, goBuilder4, goBuilder5, goBuilder6, goBuilder7],
    link: 'https://gobuildergo.com',
  },
  {
    id: 'mindgtc',
    name: 'MindGTC',
    kind: 'Multi-Chain Web3 Crypto Wallet',
    period: 'April 2026 – Present',
    stack: ['React Native', 'TypeScript', 'Ethers.js', 'Solana Web3.js', 'WalletConnect v2', 'FreeRASP', 'Kotlin'],
    summary:
      'Non-custodial wallet for EVM, Solana and Bitcoin with BIP-39/BIP-44 key management, biometric-gated AES-256 storage and WalletConnect v2 signing. On Google Play and the App Store.',
    frame: 'phone',
    images: [mind1, mind2, mind3],
  },
  {
    id: 'zenframe',
    name: 'Zenframe',
    kind: 'Family Companion App',
    period: 'Sept 2024 – July 2025',
    stack: ['React Native', 'JavaScript', 'Firebase'],
    summary:
      'Real-time family management app with live updates. Owned delivery from development to release and client coordination.',
    frame: 'phone',
    images: [zen1, zen2, zen3, zen4],
  },
  {
    id: 'feelgood',
    name: 'feel good',
    kind: 'Mobile App',
    period: '',
    stack: [],
    // TODO(owner): resume has no entry for this app; replace summary, stack and period with real details
    summary: '“A space to feel good, within.” Mobile app with Apple and email sign-in.',
    frame: 'phone',
    images: [feel1, feel2, feel3, feel4, feel5, feel6],
  },
]
