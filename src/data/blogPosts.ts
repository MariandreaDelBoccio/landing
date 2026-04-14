export interface BlogPost {
  id: number
  slug: string
  title: string
  date: string
  category: string
  image: string
  cta: { label: string; href: string }
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: '29220439',
    title:
      'Text mining and expert curation to develop a database on psychiatric diseases and their genes',
    date: '2017-01-01',
    category: 'Data Standards',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/29220439/' },
  },
  {
    id: 2,
    slug: 'detecting-signs-of-depression-in-tweets-in-spanish-behavioral-and-linguistic-analysis',
    title:
      'Detecting Signs of Depression in Tweets in Spanish: Behavioral and Linguistic Analysis',
    date: '2019-06-27',
    category: 'Company News',
    image:
      'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/31250832/' },
  },
  {
    id: 3,
    slug: 'combining-machine-learning-crowdsourcing-and-expert-knowledge-to-detect-chemical-induced-diseases-in-text',
    title: 'Combining machine learning, crowdsourcing and expert knowledge to detect chemical-induced diseases in text',
    date: '2016-06-15',
    category: 'Drug Discovery',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/27307137/' },
  },
  {
    id: 4,
    slug: 'exploring-the-association-of-cancer-and-depression-in-electronic-health-records-combining-encoded-diagnosis-and-mining-free-text-clinical-notes',
    title: 'Exploring the Association of Cancer and Depression in Electronic Health Records: Combining Encoded Diagnosis and Mining Free-Text Clinical Notes',
    date: '2022-07-11',
    category: 'Drug Discovery',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/35816382/' },
  },
  {
    id: 5,
    slug: 'genomic-and-proteomic-biomarker-landscape-in-clinical-trials',
    title: 'Genomic and proteomic biomarker landscape in clinical trials',
    date: '2023-03-16',
    category: 'Drug Discovery',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/36968019/' },
  },
  {
    id: 6,
    slug: 'osirisv1-2-a-named-entity-recognition-system-for-sequence-variants-of-genes-in-biomedical-literature',
    title: 'OSIRISv1.2: a named entity recognition system for sequence variants of genes in biomedical literature',
    date: '2008-02-05',
    category: 'Drug Discovery',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/18251998/' },
  },
  {
    id: 7,
    slug: 'extraction-of-relations-between-genes-and-diseases-from-text-and-large-scale-data-analysis-implications-for-translational-research',
    title: 'Extraction of relations between genes and diseases from text and large-scale data analysis: implications for translational research',
    date: '2015-02-21',
    category: 'Drug Discovery',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1400&q=80',
    cta: { label: 'Read more', href: 'https://pubmed.ncbi.nlm.nih.gov/25886734/' },
  },
]
