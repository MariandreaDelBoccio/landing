export interface ServiceItem {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  iconSrc?: string
}

export interface StatItem {
  value: string
  label: string
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
}

export const homeHero = {
  title: 'We Turn Biomedical Evidence into Knowledge',
  subtitle:
    'Speed up safe and sustainable product development by leveraging the power of AI, knowledge graphs and NLP.',
} as const

export const homeSolutions = {
  eyebrow: 'SOLUTIONS',
  titleBefore: 'AI-ready ',
  titleHighlight: 'biomedical',
  titleAfter: ' knowledge systems',
} as const

export const services: ServiceItem[] = [
  {
    title: 'DISGENET',
    description:
      'Access curated gene–disease associations and evidence to accelerate target discovery and precision medicine.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.disgenet.com/',
    iconSrc: '/icons/06.svg',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Make biomedical text searchable and actionable with models tuned for scientific language and entities.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.medbioinformatics.com/nlp/',
    iconSrc: '/icons/010.svg',
  },
  {
    title: 'AI & Knowledge Graphs',
    description:
      'Map complex molecular relationships in a graph you can query, explain, and integrate with your stack.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.medbioinformatics.com/ai-knowledge-graphs/',
    iconSrc: '/icons/011.svg',
  },
  {
    title: 'Clinical & real-world intelligence',
    description:
      'Combine literature, omics, and translational evidence to support safer, faster development decisions.',
    ctaLabel: 'Learn more',
    ctaHref: '/contact',
    iconSrc: '/icons/011.svg',
  },
]

export const disgenetSection = {
  eyebrow: 'DATABASES & PLATFORMS',
  titleBefore: 'DISGENET, the world’s most ',
  titleHighlight: 'reliable',
  titleAfter: ' gene-disease database',
  body:
    'Get immediate access to curated evidence comparable to having synthesized insights from a vast biomedical literature corpus—ready for discovery and downstream AI.',
  ctaLabel: 'Explore DISGENET',
  ctaHref: 'https://www.disgenet.com/',
} as const

export const stats: StatItem[] = [
  { value: '38K+', label: 'Gene-disease associations' },
  { value: '+6,200', label: 'Citations worldwide' },
  { value: '8%', label: 'Precision uplift' },
  { value: '188', label: 'Countries served' },
]

export const companyIntro = {
  eyebrow: 'OUR MISSION',
  titleBefore: "Expanding DISGENET's ",
  titleHighlight: 'potential',
  titleAfter: '',
  body:
    'MedBioinformatics brings 15+ years of life-science expertise in analytics, semantic integration, and NLP—so you can ship safer, more innovative products with confidence.',
  ctaLabel: 'Read our story',
  ctaTo: '/about',
} as const

export const testimonialsHeader = {
  eyebrow: 'TESTIMONIALS',
  titleBefore: 'Trusted by ',
  titleHighlight: 'researchers',
  titleAfter: ' worldwide',
} as const

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'When exploring the DNA methylation of Cri du Chat patients, DISGENET helped me find interesting connections between genes with DNA methylation changes in the promoter and disease phenotypes.',
    name: 'Petter Holland, PhD',
    role: 'Researcher at Oslo University Hospital, Norway',
  },
  {
    quote:
      'We use DISGENET to search for variants that cause rare diseases. DISGENET’s large and well-structured database makes it easy to find appropriate references and evidence.',
    name: 'June-Young Koh',
    role: 'Chief Research Officer & Head of RARE TFT, Inocras',
  },
  {
    quote:
      'DISGENET has been a game-changer in our research endeavors. Our project revolves around understanding the consequences of protein misfolding and failed native structure adoption.',
    name: 'Maria F. Anglero',
    role: 'Research Assistant, Pennsylvania State University',
  },
]

export const contactCta = {
  titleBefore: 'Build a better tomorrow through ',
  titleHighlight: 'data',
  titleAfter: '',
  subtitle:
    'Tell us about your data challenges—we’ll help you turn evidence into actionable biomedical intelligence.',
} as const
