export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'making-preclinical-data-interoperable-and-regulatory-aligned-the-transsend-approach',
    title:
      'Making Preclinical Data Interoperable and Regulatory Aligned: The TransSEND Approach',
    date: '2026-03-23',
    category: 'Data Standards',
    excerpt:
      'How SEND and semantic integration can transform preclinical toxicology data into reusable, regulatory-ready assets.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80',
    content:
      'Preclinical toxicology studies generate vast amounts of heterogeneous information. TransSEND aligns data structure, semantics, and compliance to accelerate downstream analysis and submissions.',
  },
  {
    id: 2,
    slug: 'medbioinformatics-announces-participation-in-vict3r-initiative',
    title:
      'MedBioinformatics Announces Participation in VICT3R Initiative',
    date: '2024-09-16',
    category: 'Company News',
    excerpt:
      'A major collaboration to advance virtual controls in nonclinical safety evaluation and reduce animal testing.',
    image:
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1400&q=80',
    content:
      'The VICT3R initiative brings together public and private partners to modernize nonclinical safety science with data-driven methods and advanced AI.',
  },
  {
    id: 3,
    slug: 'genetics-drug-discovery-clinical-trial-success',
    title: 'Genetics in Drug Discovery: The Key to Clinical Trial Success?',
    date: '2024-08-28',
    category: 'Drug Discovery',
    excerpt:
      'Genetics-backed targets consistently improve development success rates and reduce late-stage failure risk.',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    content:
      'Human genetic evidence helps prioritize mechanisms with stronger causal links to disease, improving decision quality across R&D pipelines.',
  },
]
