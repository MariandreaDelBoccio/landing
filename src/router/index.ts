import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../pages/About.vue'
import AiKnowledgeGraphsPage from '../pages/AiKnowledgeGraphs.vue'
import BlogPage from '../pages/Blog.vue'
import BlogPostPage from '../pages/BlogPost.vue'
import ContactPage from '../pages/Contact.vue'
import HomePage from '../pages/Home.vue'
import NlpPage from '../pages/Nlp.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Home | MedBioinformatics',
        description:
          'MedBioinformatics delivers AI and biomedical intelligence solutions for precision knowledge discovery.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'About | MedBioinformatics',
        description:
          'Learn about MedBioinformatics, our mission, and our expertise in biomedical data science and AI.',
      },
    },
    {
      path: '/nlp',
      name: 'nlp',
      component: NlpPage,
      meta: {
        title: 'Natural Language Processing | MedBioinformatics',
        description:
          'Biomedical NLP to make scientific text searchable, analyzable, and ready for analytics and AI.',
      },
    },
    {
      path: '/ai-knowledge-graphs',
      name: 'ai-knowledge-graphs',
      component: AiKnowledgeGraphsPage,
      meta: {
        title: 'AI & Knowledge Graphs | MedBioinformatics',
        description:
          'Design and deploy biomedical knowledge graphs with explainable AI and DISGENET-grade evidence.',
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
      meta: {
        title: 'Blog | MedBioinformatics',
        description:
          'Insights on biomedical NLP, knowledge graphs, and AI innovation in life sciences.',
      },
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPostPage,
      meta: {
        title: 'Article | MedBioinformatics',
        description:
          'Read in-depth articles from MedBioinformatics on biotech, clinical intelligence, and AI.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
      meta: {
        title: 'Contact | MedBioinformatics',
        description:
          'Get in touch with MedBioinformatics to discuss partnerships, solutions, and research opportunities.',
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      const id = to.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) return { el, behavior: 'smooth' as const }
    }

    return { top: 0, behavior: 'smooth' as const }
  },
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = String(to.meta.title)
  }

  const descriptionContent = to.meta.description
    ? String(to.meta.description)
    : 'MedBioinformatics: AI-powered biomedical data intelligence.'

  let descriptionTag = document.querySelector(
    'meta[name="description"]',
  ) as HTMLMetaElement | null

  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.name = 'description'
    document.head.appendChild(descriptionTag)
  }

  descriptionTag.content = descriptionContent
})

export default router
