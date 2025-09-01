export const RESUME_PROJECTS = [
  {
    title: 'Brief Me the Case',
    subtitle: 'AI-powered legal & news summarization system',
    cover: '/Images/summary.png', 
    href: 'https://github.com/VarshaHemakumar/brief-me-the-case',
    bullets: [
      'Built a full-stack pipeline combining extractive, abstractive and rewriter models.',
      'LoRA-optimized DistilBERT for sentence scoring (ROUGE-1: 0.25, ROUGE-L: 0.16).',
      'Fine-tuned BART (BERTScore 0.87; ROUGE-1 0.45; GPT-2 PPL 19.19).',
      'T5/BART rewriter for fluency; FastAPI service for real-time summaries.',
    ],
    tags: ['Python', 'FastAPI', 'BART', 'T5', 'NLP'],
  },
  {
    title: 'CourseBase',
    subtitle: 'Course management + hybrid recommendations',
    cover: '/Images/cb.png',
    href: 'https://github.com/VarshaHemakumar/coursebase-app',
    bullets: [
      'Flask + PostgreSQL app with normalized schema (BCNF).',
      'Hybrid recommender: CF (cosine) + content-based features.',
      'Analytics via Tableau; constraints & indexing for scale.',
    ],
    tags: ['Flask', 'PostgreSQL', 'Recommender', 'Tableau'],
  },
  {
    title: 'Face Anti-Spoofing',
    subtitle: 'DenseNet-161 vs CDCN++ on 50k+ images',
    cover: '/Images/fap.png',
    href: 'https://github.com/VarshaHemakumar/Face-Anti-Spoofing',
    bullets: [
      '12% accuracy lift with DenseNet/CCDN++ optimizations.',
      '18% fewer false positives via depth-map & co-occurrence features.',
      'Robust evaluation toward deployable biometric security.',
    ],
    tags: ['PyTorch', 'CNN', 'Computer Vision'],
  },
];
