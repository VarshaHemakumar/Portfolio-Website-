import ProjectsGrid from '../components/ProjectsGrid';
import { RESUME_PROJECTS } from '../data/resumeProjects';
import { FOUNDATION_REPOS } from '../data/foundations';

const GH = 'VarshaHemakumar';


export const revalidate = 3600;

const normRepo  = (s) => s?.toLowerCase().trim();
const normTitle = (s) => s?.replace(/[-_]/g, ' ').toLowerCase().trim();

async function getRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GH}/repos?per_page=100&sort=updated`,
    {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate },
    }
  );
  if (!res.ok) return [];
  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  
  const featuredSet   = new Set(RESUME_PROJECTS.map((p) => normTitle(p.title)));
  const foundationsSet = new Set(FOUNDATION_REPOS.map((n) => normRepo(n)));

   const items = [
  
  {
    title: 'SentimentLSTM Deep Learning for Text Sentiment Classification',
    href: 'https://github.com/VarshaHemakumar/SentimentLSTM-Deep-Learning-for-Text-Sentiment-Classification',
    description : 'Implemented sentiment analysis on the IMDB dataset using PyTorch LSTM and Bidirectional LSTM models. Built preprocessing pipeline (tokenization, padding, embeddings), trained baseline vs improved models with GloVe embeddings, and achieved ~87% accuracy with strong F1 scores. Includes evaluation with confusion matrices, loss/accuracy curves, and interpretability visualizations.',
    tags: ['PyTorch', 'LSTM', 'GRU', 'NLP', 'Sentiment Analysis']
  },
  {
    title: 'TimeSeriesLSTM Predicting Temporal Trends from Scratch',
    href: 'https://github.com/VarshaHemakumar/TimeSeriesLSTM-Predicting-Temporal-Trends-from-Scratch',
    description : 'Implemented and compared RNN vs LSTM architectures from scratch in PyTorch for univariate and multivariate time-series forecasting. Applied sliding-window sequence generation, normalization, and early stopping, achieving strong predictive accuracy with LSTM significantly outperforming RNN on MAE, RMSE, and R² metrics.',
    tags: ['PyTorch', 'RNN', 'LSTM', 'Time-Series Forecasting', 'Deep Learning']
  },
  {
    title: 'DeepGrad Investigating Vanishing Gradients with VGG Deep',
    href: 'https://github.com/VarshaHemakumar/DeepGrad-Investigating-Vanishing-Gradients-with-VGG-Deep',
    description : 'Investigated the vanishing gradient problem by extending VGG-16 (VGG-Deep) and comparing it with ResNet-18. Used PyTorch gradient hooks to track gradient norms across layers, showing severe degradation in VGG-Deep while residual connections in ResNet stabilized training and achieved higher accuracy. Included experiments on kernel size, pooling, activations, and 1×1 convolutions to analyze CNN design tradeoffs.',
    tags: ['PyTorch', 'CNN', 'VGG', 'ResNet', 'Vanishing Gradients']
  },
  {
    title: 'VisionNet Comparing VGG 16 and ResNet 18 from Scratch',
    href: 'https://github.com/VarshaHemakumar/VisionNet-Comparing-VGG-16-and-ResNet-18-from-Scratch',
    description : 'Implemented VGG-16 (Version C) and ResNet-18 from scratch in PyTorch for a 3-class image classification task (Dogs, Cars, Food). Conducted experiments with optimizers, regularization, and data augmentation to evaluate training behavior. Results showed ResNet-18 converged faster and achieved ~85% accuracy, outperforming VGG-16 (~80%) by leveraging residual connections for stronger generalization.',
    tags: ['PyTorch', 'CNN', 'VGG16', 'ResNet18', 'Image Classification']
  },
  {
    title: 'TextFusion',
    href: 'https://github.com/VarshaHemakumar/TextFusion',
    description : 'Fine-tuned BART on the Billsum dataset to generate abstractive summaries of U.S. legislative texts. Built a custom training pipeline with preprocessing, beam-search decoding, and evaluation achieving strong ROUGE, BLEU, and BERTScore results.',
    tags: ['Python', 'NLP', 'BART', 'Summarization', 'Billsum']
  },
  {
    title: 'Busdood',
    href: 'https://github.com/VarshaHemakumar/Busdood',
    description : 'Developed the responsive frontend for a real-time bus tracking system, designing UI flows in Figma and implementing live positioning with Google Maps APIs. Integrated with a Django backend to display routes, markers, and arrival times in a browser-based interface.',
    tags: ['HTML', 'CSS', 'Figma', 'Google Maps API', 'Frontend', 'Django Integration']
  },
  {
    title: 'Taxi Fare Guru',
    href: 'https://github.com/VarshaHemakumar/Taxi-Fare-Guru',
    description : 'Built an end-to-end ML pipeline to predict NYC taxi fares, including data cleaning, feature engineering (distance, time, geospatial terms), and model benchmarking. Achieved strong performance with Random Forest and MLP, evaluated using MAE, RMSE, and R² metrics.',
    tags: ['Python', 'Machine Learning', 'EDA', 'Random Forest', 'MLP', 'Feature Engineering', 'Kaggle']
  },
  {
    title: 'AI Chatbot for ADHD Kids',
    href: 'https://github.com/VarshaHemakumar/AI-Chatbot-for-ADHD-Kids?tab=readme-ov-file#ai-chatbot-for-adhd-kids',
    description : 'Developed an AI chatbot tailored for kids with ADHD using GPT-3.5 and Prompt Perfect APIs, incorporating custom prompt engineering and age-specific response modes. Designed a child-friendly yellow UI to improve engagement and accessibility.',
    tags: ['JavaScript', 'GPT-3.5', 'Prompt Engineering', 'Accessibility', 'ADHD Support', 'Frontend']
  },
  {
    title: 'Lab Inventory System',
    href: 'https://github.com/VarshaHemakumar/Lab-Inventory-System',
    description : 'Built a Lab Inventory System using splay trees for fast chemical lookup and graphs to check compatibility between compounds. Implemented a CLI to add/remove chemicals and suggest safe combinations efficiently.',
    tags: ['C++', 'Data Structures', 'Splay Tree', 'Graph Algorithms', 'CLI Application']
  }


  
];

  return (
    <ProjectsGrid
      items={items}
      title="All Projects"
      sub="A curated collection of AI, ML, and software engineering projects demonstrating applied research and real-world solutions."
    />
  );
}
