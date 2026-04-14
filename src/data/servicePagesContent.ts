import type { StatItem } from "./homeContent";

export interface ServiceAccordionItem {
  id: string;
  label: string;
  title: string;
  body?: string;
  icon?: string;
  items?: {
    title: string;
    body: string;
  }[];
}

export interface ServiceStat {
  value: string;
  label: string;
}

export const nlpPage = {
  heroVideo: { src: '/images/medbio-nlp.mp4', alt: 'MedBioinformatics NLP video', poster: '/images/still-medbio.jpg' },
  heroEyebrow: "NATURAL LANGUAGE PROCESSING",
  titleBefore: "NLP: make your textual data ",
  titleHighlight: "searchable",
  titleAfter: ", analyzable and actionable",
  subtitle:
    "Don’t let valuable insights get lost in unstructured, unsearchable documents—use advanced NLP to uncover deeper insights. By automating information extraction, you can streamline product development, save time and resources, and make data-driven decisions that improve both business and customer outcomes.",
  primaryCta: { label: "Request a demo", href: "/contact" as const },
  infographic: {
    src: "/Infographics/Infographic NLP compressed.mp4",
    poster: "/Infographics/Infographic NLP.png",
    alt: "Infographic describing NLP flow from unstructured data to FAIR-ready outputs",
  },
  howItWorks: {
    title: "How it works",
    cards: [
      {
        step: "1",
        title: "Unlock the data",
        subtitle: "Information Extraction Enrichment.",
        body: "Identify and extract relevant data.​ Key information that was previously unsearchable becomes amenable for downstream analysis.​",
      },
      {
        step: "2",
        title: "Standardize the data​",
        subtitle: "Semantic Normalization Integration.",
        body: "Ensure consistent data representation and integration through domain-specific ontologies and terminologies, adhering to FAIR principles.​",
      },
      {
        step: "3",
        title: "Innovate with data​​",
        subtitle: "Informed innovation with comprehensive data.",
        body: "Unlock the full potential of comprehensive data exploration and integration. Newly discovered insights empower you to make fully-informed decisions and drive innovation.​​",
      },
    ],
  },
  useCase: {
    eyebrow: "USE CASE",
    title: "Accelerating drug R&D with NLP",
    items: [
      {
        id: "challenge",
        icon: "05",
        label: "Challenge",
        title:
          "Challenges in reviewing countless papers and databases to understand diseases and identify new drug targets",
        items: [
          {
            title: "Bottlenecks",
            body: "The sheer volume of textual data necessitates labor-intensive manual curation, creating bottlenecks and impeding the drug R&D pipeline.",
          },
          {
            title: "Data quality",
            body: "Extracting information from diverse sources with complex terminology and inconsistent formats can introduce inconsistencies and errors, compromising research reliability and reproducibility.",
          },
          {
            title: "Limited Knowledge Discovery",
            body: "Human limitations in processing information can lead to overlooked relevant insights, potentially missing crucial drug target candidates.",
          },
        ],
      },
      {
        id: "solution",
        icon: "03",
        label: "Solution",
        title:
          "Tailor-made, state-of-the-art NLP solutions designed to understand the nuances of biomedical language and extract insights efficiently.",
        items: [
          {
            title: "Unlock hidden patterns",
            body: "Discover insights that manual methods would miss.",
          },
          {
            title: "Accelerate research",
            body: "Automate extraction, save researchers time, and speed up discoveries.",
          },
        ],
      },
      {
        id: "results",
        icon: "04",
        label: "Results",
        title: "Faster evidence synthesis for program decisions",
        items: [
          {
            title: "Faster project completion times",
            body: "Automate information extraction and save valuable time.",
          },
          {
            title: "Improved research efficiency",
            body: "Gain deeper insights from your data and accelerate R&D efforts through reproducible workflows.",
          },
          {
            title: "Data-driven decision making",
            body: "Make informed decisions based on comprehensive and accurate data analysis.",
          },
        ],
      },
    ] satisfies ServiceAccordionItem[],
  },
  stats: [
    {
      value: "15+",
      label: "Years of experience in text mining and bioinformatics research​",
    },
    {
      value: "IMIM · UPF",
      label: "Partnered with prestigious academic institutions​",
    },
    { value: "200", label: "Published research papers in top-tier journals" },
  ] satisfies ServiceStat[],
  insightsEyebrow: "Published research",
  insightsTitle:
    "Discover the foundation of our NLP solutions by reading our published works.​",
  nlpSolutions: {
    title: "Our NLP Solution in action",
    body: "DISGENET, the world’s most reliable & extensive gene-disease database, developed with our NLP tools.​",
    cta: { label: "Visit DISGENET", href: "https://disgenet.com/" as const },
    img: { src: "/images/dgn-nlp.jpg", alt: "NLP solution in action" },
  },
} as const;

export const stats: StatItem[] = [
  { value: "45M+", label: "Disease Associations" },
  { value: "+5,500", label: "Citations worldwide" },
  { value: "92%", label: "NLP F-score" },
  { value: "30M+", label: "articles" },
];

export const nlpInfo = {
  paragraphs: [
    "Don’t let valuable insights get lost in your unsearchable, unstructured, free-text documents. Use state-of-the-art NLP solutions to gain deeper insights you wouldn’t otherwise uncover.​",
    "By automating information extraction you can streamline your product development process, save time and resources, and make data-driven decisions that optimize your offerings for better business and customer outcomes.​",
  ],
  bullets: [
    {
      body: "Scientific publications",
    },
    {
      body: "Electronic health records​",
    },
    {
      body: "Social media content​",
    },
    {
      body: "Industry legacy documents​",
    },
    {
      body: "Clinical trial databases​",
    },
  ],
} as const;

export const aiKgPage = {
  heroEyebrow: "AI & KNOWLEDGE GRAPHS",
  titleBefore: "Connect evidence in a ",
  titleHighlight: "living",
  titleAfter: " biomedical graph",
  subtitle:
    "Knowledge graphs turn scattered facts into queryable, explainable structure. We design ontologies, ingestion, and graph ML so your teams can ask complex questions—and trust the answers.",
  primaryCta: {
    label: "Book an architecture review",
    href: "/contact" as const,
  },
  infographic: {
    src: "/Infographics/Infographic AI compressed.mp4",
    poster: "/Infographics/Infographic AI.png",
    alt: "Infographic showing intelligent sources feeding a knowledge graph and applications",
  },
  featureCards: [
    {
      step: "1",
      title: "Model the domain",
      body: "Encode mechanisms, indications, and biomarkers with clear semantics aligned to public standards and your internal vocabularies.",
    },
    {
      step: "2",
      title: "Fuse & reason",
      body: "Blend curated databases, NLP extractions, and experimental results with lineage, versioning, and governance baked in.",
    },
  ],
  useCase: {
    eyebrow: "USE CASE",
    title: "Target discovery with a causal lens",
    items: [
      {
        id: "challenge",
        label: "Challenge",
        title: "Silos hide relationships between modalities",
        body: "Gene lists from omics rarely meet pathway context or clinical phenotypes in one navigable layer.",
      },
      {
        id: "solution",
        label: "Solution",
        title: "A harmonized graph with explainable traversals",
        body: "We integrate DISGENET-grade associations with your proprietary edges—ready for graph algorithms and human exploration.",
      },
      {
        id: "results",
        label: "Results",
        title: "Prioritized hypotheses with traceable evidence",
        body: "Teams compare mechanisms faster, with citations and scores attached to every edge you promote to production.",
      },
    ] satisfies ServiceAccordionItem[],
  },
  stats: [
    { value: "25,574+", label: "Associations indexed in reference builds" },
    { value: "4", label: "Graph stores supported out of the box" },
    { value: "92%", label: "Accuracy on benchmark QA tasks" },
  ] satisfies ServiceStat[],
  secondaryStats: [
    { value: "38K+", label: "Gene–disease edges (DISGENET)" },
    { value: "2010", label: "Shipping curated graphs since" },
    { value: "15+", label: "Years ontology & graph practice" },
  ] satisfies ServiceStat[],
  insightsEyebrow: "INSIGHTS",
  insightsTitle: "Latest on graphs & AI in life sciences",
} as const;

export const serviceContactCta = {
  nlp: {
    titleBefore: "NLP can help you build a better tomorrow through ",
    titleHighlight: "data",
    titleAfter: ".",
    subtitle:
      "Share a sample corpus or use case—we will propose an evaluation plan in days, not months.",
  },
  aiKg: {
    titleBefore: "Graph-powered AI starts with a ",
    titleHighlight: "solid",
    titleAfter: " semantic core.",
    subtitle:
      "We will review your sources, SLAs, and explainability needs to propose a pragmatic rollout.",
  },
} as const;
