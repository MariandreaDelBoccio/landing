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
  title: 'AI‑ready biomedical knowledge systems for pharma, biotech, and AI organizations',
  subtitle:
    'Speed up safe and sustainable product development by leveraging the power of AI, knowledge graphs and NLP.',
} as const

export const services: ServiceItem[] = [
  {
    title: 'DISGENET',
    description:
      'Gain access to the most recent and relevant data on disease genomics to accelerate drug R&D and unlock new precision medicine possibilities.',
    ctaLabel: 'Visit',
    ctaHref: 'https://www.disgenet.com/',
    iconSrc: '/icons/06.svg',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Our state-of-the-art NLP makes your textual data searchable, analyzable and actionable. We help you speed up informed innovation with data unlocked from text.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.medbioinformatics.com/nlp/',
    iconSrc: '/icons/010.svg',
  },
  {
    title: 'AI & Knowledge Graphs',
    description:
      'We enable you to reveal insights from complex biological networks providing fine-grained, comprehensive coverage of intricate relationships between biomolecules.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.medbioinformatics.com/ai-knowledge-graphs/',
    iconSrc: '/icons/011.svg',
  },
  {
    title: 'Nueva card',
    description:
      'We enable you to reveal insights from complex biological networks providing fine-grained, comprehensive coverage of intricate relationships between biomolecules.',
    ctaLabel: 'Learn more',
    ctaHref: 'https://www.medbioinformatics.com/ai-knowledge-graphs/',
    iconSrc: '/icons/011.svg',
  },
]

export const stats: StatItem[] = [
  { value: '38K+', label: 'disease associations' },
  { value: '+8,200', label: 'citations worldwide' },
  { value: '92%', label: 'NLP F-score' },
  { value: '2010', label: 'est.' },
]

export const companyIntro = {
  title: "MedBioinformatics, expanding DISGENET's potential",
  body: 'MedBioinformatics is built on over 15 years of life science expertise. We unlock the true potential of your data through cutting-edge methods in data analytics, semantic integration, and NLP. This empowers you to develop innovative and safer products, prioritizing human health and well-being.',
  ctaLabel: 'Explore our story',
  ctaTo: '/about',
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
      'We use DISGENET to search for variants that cause rare diseases. The most difficult part of variant searching is finding appropriate references and presenting evidence, and DISGENET’s large and well-structured database makes it easy to find.',
    name: 'June-Young Koh',
    role: 'Chief Research Officer & Head of RARE TFT, Inocras',
  },
  {
    quote:
      'DISGENET has been a game-changer in our research endeavors. Our project revolves around understanding the consequences of protein misfolding, a phenomenon where proteins fail to adopt their native structure.',
    name: 'Maria F. Anglero',
    role: 'Research Assistant, Pennsylvania State University',
  },
]
