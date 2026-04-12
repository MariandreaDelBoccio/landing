export interface LeaderProfile {
  name: string
  title: string
  image: string
  linkedin?: string
}

export const aboutHero = {
  eyebrow: 'ABOUT MEDBIOINFORMATICS',
  titleBefore: 'Evidence-led teams building ',
  titleHighlight: 'trusted',
  titleAfter: ' biomedical intelligence',
  subtitle:
    'We combine curated knowledge engineering, NLP, and graph analytics so pharma, biotech, and AI teams can move from complex data to decisions with confidence.',
} as const

export const aboutMission = {
  eyebrow: 'OUR MISSION',
  titleBefore: 'From fragmented evidence to ',
  titleHighlight: 'actionable',
  titleAfter: ' knowledge',
  paragraphs: [
    'MedBioInformatics grew out of the team behind DISGENET—one of the most widely used gene–disease resources in translational research. We help organizations harmonize literature, omics, and clinical signals into FAIR-ready assets that integrate cleanly with modern analytics and AI.',
    'Whether you are prioritizing targets, strengthening safety assessment, or powering copilots with grounded biomedical facts, we meet you where your data lives and build the semantic layer your teams can trust.',
  ],
} as const

export const aboutStats = [
  { value: '15+', label: 'Years curating biomedical evidence' },
  { value: '38K+', label: 'Gene–disease associations (DISGENET)' },
  { value: '120+', label: 'Enterprise & research partners' },
] as const

export const leadershipIntro = {
  eyebrow: 'LEADERSHIP',
  titleBefore: 'People behind ',
  titleHighlight: 'DISGENET',
  titleAfter: ' & MedBioInformatics',
  body:
    'Our leadership blends academic rigor, product discipline, and hands-on experience shipping data platforms for life-science R&D.',
} as const

export const leadershipTeam: LeaderProfile[] = [
  {
    name: 'Janet',
    title: 'Chief Executive Officer',
    image: '/images/leadership-team/Janet.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Laura',
    title: 'Head of Product & Partnerships',
    image: '/images/leadership-team/Laura.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Ferran',
    title: 'Chief Scientific Officer',
    image: '/images/leadership-team/Ferran.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Felix',
    title: 'Chief Technology Officer',
    image: '/images/leadership-team/Felix.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
]

export const aboutCta = {
  titleBefore: 'Planning a ',
  titleHighlight: 'knowledge',
  titleAfter: ' initiative?',
  body: 'Tell us about your roadmap—we will map the fastest path from data to trusted insights.',
  buttonLabel: 'Talk to our team',
  buttonTo: '/contact' as const,
}
