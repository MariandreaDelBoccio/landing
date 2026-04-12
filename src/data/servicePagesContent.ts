export interface ServiceAccordionItem {
  id: string
  label: string
  title: string
  body: string
}

export interface ServiceStat {
  value: string
  label: string
}

export const nlpPage = {
  heroEyebrow: 'NATURAL LANGUAGE PROCESSING',
  titleBefore: 'NLP: make your textual data ',
  titleHighlight: 'searchable',
  titleAfter: ', analyzable and actionable',
  subtitle:
    'Scientific language is nuanced. Our NLP stack extracts entities, relations, and evidence from literature and internal documents—so search, analytics, and downstream AI start from clean, traceable facts.',
  primaryCta: { label: 'Request a demo', href: '/contact' as const },
  infographic: {
    src: '/Infographics/Infographic NLP compressed.mp4',
    poster: '/Infographics/Infographic NLP.png',
    alt: 'Infographic describing NLP flow from unstructured data to FAIR-ready outputs',
  },
  featureCards: [
    {
      step: '1',
      title: 'Unlock context',
      body: 'Detect diseases, genes, drugs, and phenotypes with models tuned for biomedical phrasing—not generic news corpora.',
    },
    {
      step: '2',
      title: 'Normalize & link',
      body: 'Map mentions to community identifiers (e.g., MONDO, HGNC) and bridge siloed repositories without losing provenance.',
    },
  ],
  useCase: {
    eyebrow: 'USE CASE',
    title: 'Accelerating drug R&D with NLP',
    items: [
      {
        id: 'challenge',
        label: 'Challenge',
        title: 'High-value evidence trapped in PDFs and lab notes',
        body: 'Teams lose weeks reconciling heterogeneous documents before analyses can even begin.',
      },
      {
        id: 'solution',
        label: 'Solution',
        title: 'Structured extraction with review-ready provenance',
        body: 'We deploy extraction pipelines with confidence scoring, source spans, and export paths into your warehouse or graph.',
      },
      {
        id: 'results',
        label: 'Results',
        title: 'Faster evidence synthesis for program decisions',
        body: 'Researchers spend less time wrangling text and more time validating hypotheses and designing the next experiment.',
      },
    ] satisfies ServiceAccordionItem[],
  },
  stats: [
    { value: '60+', label: 'Biomedical entity types supported' },
    { value: '99.7%', label: 'Uptime on managed deployments' },
    { value: '700+', label: 'Models & rules composed in projects' },
  ] satisfies ServiceStat[],
  secondaryStats: [
    { value: '+1,700', label: 'Integration tests in CI' },
    { value: '22%', label: 'Avg. time saved in reviews' },
    { value: '120+', label: 'Curated ontologies leveraged' },
  ] satisfies ServiceStat[],
  insightsEyebrow: 'INSIGHTS',
  insightsTitle: 'Latest on NLP & data foundations',
} as const

export const aiKgPage = {
  heroEyebrow: 'AI & KNOWLEDGE GRAPHS',
  titleBefore: 'Connect evidence in a ',
  titleHighlight: 'living',
  titleAfter: ' biomedical graph',
  subtitle:
    'Knowledge graphs turn scattered facts into queryable, explainable structure. We design ontologies, ingestion, and graph ML so your teams can ask complex questions—and trust the answers.',
  primaryCta: { label: 'Book an architecture review', href: '/contact' as const },
  infographic: {
    src: '/Infographics/Infographic AI compressed.mp4',
    poster: '/Infographics/Infographic AI.png',
    alt: 'Infographic showing intelligent sources feeding a knowledge graph and applications',
  },
  featureCards: [
    {
      step: '1',
      title: 'Model the domain',
      body: 'Encode mechanisms, indications, and biomarkers with clear semantics aligned to public standards and your internal vocabularies.',
    },
    {
      step: '2',
      title: 'Fuse & reason',
      body: 'Blend curated databases, NLP extractions, and experimental results with lineage, versioning, and governance baked in.',
    },
  ],
  useCase: {
    eyebrow: 'USE CASE',
    title: 'Target discovery with a causal lens',
    items: [
      {
        id: 'challenge',
        label: 'Challenge',
        title: 'Silos hide relationships between modalities',
        body: 'Gene lists from omics rarely meet pathway context or clinical phenotypes in one navigable layer.',
      },
      {
        id: 'solution',
        label: 'Solution',
        title: 'A harmonized graph with explainable traversals',
        body: 'We integrate DISGENET-grade associations with your proprietary edges—ready for graph algorithms and human exploration.',
      },
      {
        id: 'results',
        label: 'Results',
        title: 'Prioritized hypotheses with traceable evidence',
        body: 'Teams compare mechanisms faster, with citations and scores attached to every edge you promote to production.',
      },
    ] satisfies ServiceAccordionItem[],
  },
  stats: [
    { value: '25,574+', label: 'Associations indexed in reference builds' },
    { value: '4', label: 'Graph stores supported out of the box' },
    { value: '92%', label: 'Accuracy on benchmark QA tasks' },
  ] satisfies ServiceStat[],
  secondaryStats: [
    { value: '38K+', label: 'Gene–disease edges (DISGENET)' },
    { value: '2010', label: 'Shipping curated graphs since' },
    { value: '15+', label: 'Years ontology & graph practice' },
  ] satisfies ServiceStat[],
  insightsEyebrow: 'INSIGHTS',
  insightsTitle: 'Latest on graphs & AI in life sciences',
} as const

export const serviceContactCta = {
  nlp: {
    titleBefore: 'NLP can help you build a better tomorrow through ',
    titleHighlight: 'data',
    titleAfter: '.',
    subtitle: 'Share a sample corpus or use case—we will propose an evaluation plan in days, not months.',
  },
  aiKg: {
    titleBefore: 'Graph-powered AI starts with a ',
    titleHighlight: 'solid',
    titleAfter: ' semantic core.',
    subtitle: 'We will review your sources, SLAs, and explainability needs to propose a pragmatic rollout.',
  },
} as const
