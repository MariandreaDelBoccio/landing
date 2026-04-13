export interface ServiceItem {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  iconSrc?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export const homeHero = {
  title: "We Turn Biomedical Evidence into Knowledge",
  subtitle:
    "Speed up safe and sustainable product development by leveraging the power of AI, knowledge graphs and NLP.",
} as const;

export const homeSolutions = {
  eyebrow: "SOLUTIONS",
  titleBefore: "AI-ready ",
  titleHighlight: "biomedical",
  titleAfter: " knowledge systems",
} as const;

export const services: ServiceItem[] = [
  {
    title: "DISGENET",
    description:
      "Access curated gene–disease associations and evidence to accelerate target discovery and precision medicine.",
    ctaLabel: "Learn more",
    ctaHref: "https://www.disgenet.com/",
    iconSrc: "/icons/06.svg",
  },
  {
    title: "Natural Language Processing",
    description:
      "Make biomedical text searchable and actionable with models tuned for scientific language and entities.",
    ctaLabel: "Learn more",
    ctaHref: "/nlp",
    iconSrc: "/icons/010.svg",
  },
  {
    title: "AI & Knowledge Graphs",
    description:
      "Map complex molecular relationships in a graph you can query, explain, and integrate with your stack.",
    ctaLabel: "Learn more",
    ctaHref: "/ai-knowledge-graphs",
    iconSrc: "/icons/011.svg",
  },
  {
    title: "Clinical & real-world intelligence",
    description:
      "Combine literature, omics, and translational evidence to support safer, faster development decisions.",
    ctaLabel: "Learn more",
    ctaHref: "/contact",
    iconSrc: "/icons/011.svg",
  },
];

export const disgenetSection = {
  eyebrow: "DATABASES & PLATFORMS",
  titleBefore: "DISGENET, where human generics ",
  titleHighlight: "becomes",
  titleAfter: " actionable",
  body: "The genotype–phenotype–therapy infrastructure that turns biomedical evidence into structured, machine-readable intelligence for discovery and innovation.",
  ctaLabel: "Explore DISGENET",
  ctaHref: "https://www.disgenet.com/",
} as const;

export const stats: StatItem[] = [
  { value: "30M+", label: "Evidence-ranked associations" },
  { value: "+8,500", label: "Citations worldwide" },
  { value: "92%", label: "NLP accuracy" },
  { value: "2010", label: "— trusted from day one" },
];

export const companyIntro = {
  eyebrow: "OUR MISSION",
  titleBefore: "MedBioinformatics: ",
  titleHighlight: "The company",
  titleAfter: " behind DISGENET",
  body: "Founded as a spin-off of IMIM and Pompeu Fabra University, MedBioInformatics has spent 15 years building biomedical knowledge infrastructure that pharma, biotech, and AI organizations depend on. DISGENET™ is our flagship — and the same expertise in semantic integration, NLP, and knowledge graph construction powers our custom solutions for drug discovery, safety assessment, and precision medicine.",
  ctaLabel: "Read our story",
  ctaTo: "/about",
} as const;

export const testimonialsHeader = {
  eyebrow: "TESTIMONIALS",
  titleBefore: "Trusted by ",
  titleHighlight: "researchers",
  titleAfter: " worldwide",
} as const;

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "When exploring the DNA methylation of Cri du Chat patients, DISGENET helped me find interesting connections between genes with DNA methylation changes in the promoter and disease phenotypes.",
    name: "Petter Holland, PhD",
    role: "Researcher at Oslo University Hospital, Norway",
  },
  {
    quote:
      "We use DISGENET to search for variants that cause rare diseases. DISGENET’s large and well-structured database makes it easy to find appropriate references and evidence.",
    name: "June-Young Koh",
    role: "Chief Research Officer & Head of RARE TFT, Inocras",
  },
  {
    quote:
      "DISGENET has been a game-changer in our research endeavors. Our project revolves around understanding the consequences of protein misfolding and failed native structure adoption.",
    name: "Maria F. Anglero",
    role: "Research Assistant, Pennsylvania State University",
  },
];

export const contactCta = {
  titleBefore: "From target identification to safety assessment, ",
  titleHighlight: "we build the biomedical knowledge ",
  titleAfter: "infrastructure your teams can trust and build on.",
  subtitle:
    "Let's talk about your challenge.",
} as const;
