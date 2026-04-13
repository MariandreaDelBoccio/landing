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
    '15 Years Building the Biomedical Knowledge Infrastructure Behind Drug Discovery and Precision Medicine​.',
} as const

export const aboutMission = {
  eyebrow: 'OUR MISSION',
  titleBefore: 'From fragmented evidence to ',
  titleHighlight: 'actionable',
  titleAfter: ' knowledge',
  paragraphs: [
    'Biomedical data is vast, fragmented, and inconsistent — spread across millions of publications, clinical databases, genomic repositories, and regulatory submissions. The teams that win in drug discovery and precision medicine are not the ones with the most data. They are the ones who can reason over it: connecting genes to diseases, variants to clinical outcomes, and molecular mechanisms to therapeutic hypotheses.',
    'That is the problem MedBioInformatics was built to solve. We design and build knowledge infrastructure that transforms dispersed biomedical evidence into structured, semantically integrated, provenance-tracked systems that discovery and AI teams can trust and build on.​',
  ],
} as const

export const aboutPlatformSection = {
  titleBefore: 'MedBioInformatics: ',
  titleAfter: 'From Platform to Full Knowledge Infrastructure Company',
  paragraphs: [
    "As DISGENET's scientific impact translated into commercial demand, it became clear that pharma, biotech, and AI organizations needed more than access to a platform — they needed partners who could design, build, and integrate biomedical knowledge infrastructure into their specific workflows.",
    'MedBioInformatics Solutions was incorporated in 2020 to meet that need. Drawing on the same expertise in NLP, semantic integration, and knowledge graph construction that powers DISGENET™, we work with organizations across drug discovery, chemical safety, and precision medicine to deliver:',
  ],
  bullets: [
    {
      lead: 'Target identification and prioritization',
      body:
        'evidence-ranked gene-disease associations that connect genomic data to therapeutic hypotheses',
    },
    {
      lead: 'Drug safety and chemical risk assessment',
      body: 'AI-powered tools for anticipating adverse effects and supporting regulatory submissions',
    },
    {
      lead: 'Drug repurposing intelligence',
      body: 'knowledge graph analysis that surfaces new indications for existing compounds',
    },
    {
      lead: 'Biomarker and variant interpretation',
      body: 'structured genomic evidence for precision medicine and clinical decision support',
    },
    {
      lead: 'Custom NLP and knowledge graph solutions',
      body: 'bespoke pipelines built on our core infrastructure for any biomedical data challenge',
    },
  ],
  quote:
    'Whether you need to integrate DISGENET™ into your discovery pipeline, build a custom knowledge graph from your proprietary data, or extract structured intelligence from scientific literature — our team brings 15 years of biomedical knowledge engineering to your challenge.',
  ctaPhrase: "Let's talk about what you're building.",
} as const

export const aboutDisgenetOrigins = {
  titleBefore: 'DISGENET: ',
  titleAfter: 'Where It Started',
  paragraphs: [
    'In 2010, a research team at IMIM and Pompeu Fabra University in Barcelona set out to answer a question that was reshaping drug development: what does the human genome tell us about disease, and how can we make that knowledge actionable at scale?',
    'The result was DISGENET™ — a systematically curated, evidence-scored network of gene-disease and variant-disease associations, built from the ground up with semantic structure, full provenance tracking, and scientific rigor at its core. Today it is the most cited gene-disease knowledge platform in the world, with 8,500+ citations and adoption by leading pharma companies, AI organizations, and clinical research institutions globally.',
  ],
  imageSrc: '/images/imim-upf-disgenet.jpg',
  imageAlt: 'Barcelona coastline with IMIM, UPF and DISGENET partner branding',
} as const

export const aboutStats = [
  { value: '21,000+', label: 'Researchers and teams rely on DISGENET™ worldwide' },
  { value: '8,500+', label: 'citations across pharma, biotech and clinical research' },
  { value: '2010', label: '— trusted from day one' },
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
    name: 'Dr. Janet Piñero',
    title: 'Co-Founder & Head of Bioinformatics',
    image: '/images/leadership-team/Janet.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Dr. Laura Furlong',
    title: 'Co-Founder & Chief Scientific Officer',
    image: '/images/leadership-team/Laura.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Dr. Ferran Sanz',
    title: 'Co-Founder & Advisor',
    image: '/images/leadership-team/Ferran.jpg',
    linkedin: 'https://www.linkedin.com/company/medbioinformatics/',
  },
  {
    name: 'Felix Slager',
    title: 'Chief Executive Officer',
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
