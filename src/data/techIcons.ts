/**
 * Maps the tech names used in portfolio.ts onto simple-icons titles.
 *
 * simple-icons is CC0, so the marks need no attribution. Names not listed
 * here (or absent from the package) fall back to a plain text pill — a
 * wrong logo is worse than none.
 */
import { ICONS } from './techIconData';

export const TECH_ICON_TITLES: Record<string, string> = {
  // Deep learning / CV
  PyTorch: 'PyTorch',
  OpenCV: 'OpenCV',
  NumPy: 'NumPy',
  MediaPipe: 'MediaPipe',
  Keras: 'Keras',

  // NLP / GenAI
  'HuggingFace Transformers': 'Hugging Face',
  HuggingFace: 'Hugging Face',
  DistilBERT: 'Hugging Face',
  LangChain: 'LangChain',
  ElevenLabs: 'ElevenLabs',
  'Claude API': 'Anthropic',

  // Classical ML
  'Scikit-learn': 'scikit-learn',
  Pandas: 'Pandas',

  // Languages / web
  Python: 'Python',
  SQL: 'MySQL',
  Bash: 'GNU Bash',
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  React: 'React',
  Flask: 'Flask',
  Express: 'Express',
  Streamlit: 'Streamlit',
  n8n: 'n8n',

  // Infra / tools
  Docker: 'Docker',
  Linux: 'Linux',
  'Linux (CLI)': 'Linux',
  Git: 'Git',
  GitHub: 'GitHub',
  'Jupyter Notebook': 'Jupyter',
};

/** Brand colours are dark for some marks; these read poorly on a dark card,
 *  so they get a lightened stand-in. */
export const COLOR_OVERRIDES: Record<string, string> = {
  ElevenLabs: '#c9cfe0',
  Express: '#c9cfe0',
  GitHub: '#c9cfe0',
  Anthropic: '#d4a27f',
  NumPy: '#4d9fd6',
  Pandas: '#8b7fd4',
  SQLite: '#5aa9d6',
};

/** Resolves a tech name to its pre-extracted mark, or null when unmapped. */
export const findIcon = (tech: string) => {
  const title = TECH_ICON_TITLES[tech];
  if (!title) return null;
  const icon = ICONS[title];
  return icon ? { title, ...icon } : null;
};
