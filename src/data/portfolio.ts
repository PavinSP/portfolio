// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update the portfolio;
// components read from it and never hardcode copy.
// ─────────────────────────────────────────────────────────────────────────────
import type {
  Certification, Contact, Degree, Greeting, Job, ProjectCategory, SkillGroup, Social,
} from './types';

export const greeting: Greeting = {
  name: 'Pavin Sumathi Palanichamy',
  title: 'M.Sc. Student in Artificial Intelligence at THWS',
  subtitle: [
    'Building robust AI platforms, cloud infrastructure, and data-driven solutions.',
    'Bridging the gap between intelligent algorithms and scalable enterprise architecture.',
  ],
};

export const socials: Social[] = [
  { label: 'GitHub', url: 'https://github.com/PavinSP', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/pavin-sp', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:pavinsp122002@gmail.com', icon: 'mail' },
];

export const contact: Contact = {
  tag: 'Want to collaborate?',
  heading: 'Get In Touch',
  description:
    "I'm always open to discussing research opportunities, HiWi positions, or new challenges in AI, Cloud, and Infrastructure engineering. Feel free to reach out!",
  email: 'pavinsp122002@gmail.com',
  phone: '+49 162 3828298',
  location: 'Würzburg, Germany',
};

export const education: Degree[] = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    institution: 'THWS (Technical University of Applied Sciences Würzburg-Schweinfurt)',
    location: 'Würzburg, Germany · Mar 2026 — Present',
    intro:
      'Currently enrolled in the research-oriented Master of Artificial Intelligence (MAI) program, focusing on the deep mathematical and architectural foundations of intelligent systems.',
    modulesHeading: 'Key First-Semester Modules (CAIRO):',
    modules: [
      {
        title: 'Reasoning and Decision Making under Uncertainty',
        summary:
          'Studied under Prof. Dr. Frank Deinzer. Comprehensive study of non-deterministic AI models.',
        points: [
          {
            label: 'Core Topics',
            text: 'Deep dive into Reinforcement Learning (Markov Decision Processes, policy/value functions) and Sensor Fusion (Bayesian approaches, Hidden Markov Models, Viterbi algorithm).',
          },
          {
            label: 'Final Paper',
            text: 'Authored "Deriving Blackjack Card-Counting Systems via Simulated Effect of Removal". Developed a tabular first-visit Monte Carlo RL agent to derive card-counting weights (correlating with professional Wong Halves at r=0.981), evaluating zero-sum balancing and ROI.',
          },
        ],
      },
      {
        title: 'Introduction to Deep Learning',
        summary:
          'Studied under Prof. Dr. Magda Gregorová. Advanced exploration of deep neural network architectures and PyTorch implementations.',
        points: [
          {
            label: 'Core Topics',
            text: 'Deep Neural Networks, Backpropagation & Computation Graphs, Loss Functions & Gradient Descent, and advanced CNN architectures (AlexNet, VGG16, ResNet).',
          },
          {
            label: 'Final Project ("Operation Cyber-Histology")',
            text: 'Audited and reconstructed a sabotaged clinical triage ML pipeline. Rebuilt missing evaluation infrastructure and stabilized numerical explosions for models like AlexNet, VGG16, and ResNet18 on medical datasets.',
          },
        ],
      },
      {
        title: 'Mathematical Foundations of AI',
        summary: 'Studied under Prof. Dr. Martin Storath.',
        points: [
          {
            label: 'Core Topics',
            text: 'Orthogonal Projections, Ordinary Least Squares, Uncertainty and Statistical Tests for Model Evaluation, Probability Theory, and Optimization. Focused on the rigorous mathematical intuition necessary to understand and build models beyond treating them as "black boxes".',
          },
        ],
      },
    ],
  },
  {
    degree: 'Bachelor of Technology in AI & Data Science',
    institution: 'Panimalar Engineering College (Anna University)',
    location: 'Chennai, India · Sep 2021 — May 2025',
    intro:
      'Graduated with a strong academic record, achieving a CGPA of 8.51 (equivalent to a 1.8 on the German grading scale).',
    modulesHeading: 'Core AI & Data Science Curriculum (Regulation 2021):',
    modules: [
      {
        title: 'Artificial Intelligence, Deep Learning & NLP',
        points: [
          {
            text: 'Artificial Intelligence and Expert Systems, Machine Learning, Deep Learning, Knowledge Engineering and Intelligent Systems, Natural Language Processing.',
          },
        ],
      },
      {
        title: 'Computer Vision, AR/VR & Robotics',
        points: [
          {
            text: 'Digital Image Processing, Computer Vision, Augmented Reality & Virtual Reality (AR/VR) with AI, AI and Robotics.',
          },
        ],
      },
      {
        title: 'Data Science & Big Data',
        points: [
          {
            text: 'Basics of Data Science, Data Exploration and Visualization, Data Analytics, Business Analytics, Probability and Statistical Modeling.',
          },
        ],
      },
      {
        title: 'Core Computer Science',
        points: [
          {
            text: 'Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Software Engineering, Formal Language and Automata Theory, Internals of Computer Systems, System Software and Operating Systems.',
          },
        ],
      },
    ],
  },
];

export const experience: Job[] = [
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    date: 'Dec 2024 — Apr 2025',
    links: [
      { label: 'View Offer Letter', url: 'certificates/Cognizant_Offer_Letter.pdf', icon: 'award' },
    ],
    bullets: [
      'Ran systematic data-quality checks — schema validation, record-count verification, test-case validation — at each pipeline stage, to catch silent data loss before it reached downstream tables rather than discovering it at the far end.',
      'Built ETL pipelines on Databricks and Spark parsing deeply nested JSON, using explicit schemas and custom UDFs to unnest arrays.',
      'Automated pipelines in Python and SQL on Azure, integrating REST APIs over structured and semi-structured JSON and XML data.',
      'Optimised PostgreSQL queries and worked across Azure and AWS in a distributed delivery team.',
      'Documented technical processes clearly and presented results to both technical and non-technical stakeholders, bridging the gap between engineering and business.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Edify Techno Solutions',
    date: 'May 2024',
    links: [
      { label: 'View Certificate', url: 'certificates/Edify_Internship_Certificate.pdf', icon: 'award' },
    ],
    bullets: [
      'Full-stack development with Flask, Django and React, integrating backend and frontend through robust API communication with input validation and clean error handling.',
      'Assisted with rigorous testing and logging to identify failure points early, ensuring stable and reproducible behaviour in production environments.',
      'Maintained comprehensive technical documentation to support knowledge transfer and onboarding within the development team.',
    ],
  },
];

export const projects: ProjectCategory[] = [
  {
    category: 'Computer Vision',
    projects: [
      {
        name: 'Real-Time Driver Drowsiness Detection',
        description: [
          'Fine-tuned MobileNetV3-Small in PyTorch for eye-state classification on the MRL Eye dataset (84,898 infrared images), reaching 98.2% validation accuracy.',
          'Benchmarked single-frame CPU inference at 5.4 ms (~185 FPS), proving viability for on-device edge deployment. Integrated MediaPipe for real-time facial landmark tracking and PERCLOS calculation.',
        ],
        tech: ['PyTorch', 'MobileNetV3', 'MediaPipe', 'NumPy'],
      },
      {
        name: 'CellFoundry: Foundation Models for Instance Segmentation',
        badge: 'Ongoing',
        description: [
          'Working under Prof. Dr. Magda Gregorová to benchmark and fine-tune foundation models (Micro-SAM, CellSAM) for adipocyte instance segmentation in brightfield microscopy.',
          'Scope includes robust image preprocessing and systematic experiment design in collaboration with IMES Schweinfurt to advance medical imaging analysis.',
        ],
        tech: ['SAM Models', 'Computer Vision', 'Medical Imaging'],
      },
    ],
  },
  {
    category: 'Generative AI',
    projects: [
      {
        name: 'Teach It To Grandma: Voice AI That Grades Understanding, Not Keywords',
        badge: '🏆 ElevenLabs Sonderpreis',
        description: [
          'A voice app where you explain a concept out loud to an AI "Grandma" persona (ElevenLabs Conversational AI) who pushes back on jargon and vague answers instead of teaching it back to you, testing real understanding via the Feynman technique.',
          'Built an LLM grading layer (via an OpenAI-compatible gateway) on an Express backend that judges whether each point was genuinely explained versus just keyword-matched, replacing the original plain-JS keyword grading as the source of truth on the recap screen. Model choice came from a measured comparison across four candidates: gemini-3.1-flash-lite correctly scored a jargon-stuffed answer 1/4 and a genuine explanation 4/4 in ~1.7s, while stronger models rubber-stamped the jargon. Claude 4.5 Sonnet handles the judgement-heavy jury and closed-world recall paths. Won the ElevenLabs Sonderpreis for Best Project Built With ElevenLabs, awarded 3 months of ElevenLabs Scale.',
        ],
        tech: ['ElevenLabs', 'React', 'Express', 'Gemini', 'Claude API'],
        links: [
          { label: 'Try the live demo', url: 'https://titanom-hackathon-8xts.vercel.app/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/titanom-hackathon', icon: 'github' },
        ],
      },
      {
        name: 'SSOT: AI-Powered Triage for Construction-Project Communication',
        description: [
          'Built at the ConStructAI Hackathon (CAIRO.THWS) to turn messy construction communication (emails, chats, notes) into a verified, categorized, routable record. Zero-shot classification into 7 project categories plus question-answering-based detail extraction, cross-referenced against live-parsed IFC/BIM building objects.',
          'Every extraction lands in an unverified buffer first; a human reviews and approves before anything routes to a target system (Schedule, Cost, QA, Task, Issue Log) or triggers a WhatsApp notification via Twilio.',
        ],
        tech: ['HuggingFace Transformers', 'Streamlit', 'IFC/BIM Parsing', 'Python'],
        links: [
          { label: 'GitHub', url: 'https://github.com/PavinSP/SSOT---Single-Source-of-Truth', icon: 'github' },
        ],
      },
      {
        name: 'LLM-Orchestrated Resume Screening',
        description: [
          'Built a multi-step pipeline using LangChain and Azure OpenAI for structured information extraction from highly unstructured candidate documents.',
          'Co-authored "Python-Powered ML for Next-Gen Resume Screening". Published in TIJER (Vol 11, Issue 7, July 2024).',
        ],
        tech: ['LangChain', 'Azure OpenAI', 'React', 'Flask'],
        links: [
          { label: 'Read Paper', url: 'https://tijer.org/tijer/papers/TIJERC001274.pdf', icon: 'paper' },
          { label: 'Certificate', url: 'https://tijer.org/tijer/certificatemanager.php?a_rid=153454', icon: 'award' },
        ],
      },
    ],
  },
  {
    category: 'Natural Language Processing',
    projects: [
      {
        name: 'SniffTest: AI-Powered Disinformation Detection',
        description: [
          'Led the AI/ML workstream at the DAAD East-West Dialogue Hackathon. Fine-tuned DistilBERT for multi-class text classification, reaching 86% F1 score.',
          'Deployed the model behind a REST API in a Docker container for a live interactive demo with real users.',
        ],
        tech: ['PyTorch', 'DistilBERT', 'Docker', 'REST API'],
        links: [
          { label: 'GitHub', url: 'https://github.com/PavinSP/SniffTest-DIAL-Hackathon', icon: 'github' },
        ],
      },
    ],
  },
  {
    category: 'Machine Learning',
    projects: [
      {
        name: 'GPU-Accelerated Multi-Label Classification for Mechanism of Action Prediction in High-Throughput Drug Discovery',
        description: [
          'Bachelor Thesis Project: Developed an end-to-end multi-label classification pipeline utilizing GPU-accelerated XGBoost to predict the biological mechanisms of action of various drugs.',
          'Engineered comprehensive statistical features and handled extreme class imbalance, evaluating robust model performance via ROC-AUC and Precision-Recall metrics.',
        ],
        tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas'],
        links: [
          {
            label: 'Thesis Report',
            url: 'https://github.com/PavinSP/moa-prediction-thesis/blob/main/MoA_Prediction_Bachelor_Thesis.pdf',
            icon: 'paper',
          },
          { label: 'GitHub', url: 'https://github.com/PavinSP/moa-prediction-thesis', icon: 'github' },
        ],
      },
      {
        name: 'AI-Driven Ticket Confirmation Prediction',
        description: [
          'Built an end-to-end ML pipeline predicting waitlisted railway ticket confirmations using CatBoost, evaluating robustness with F1-score and ROC-AUC.',
          'Developed an interactive Streamlit dashboard to present complex predictive results to non-technical stakeholders.',
        ],
        tech: ['Python', 'CatBoost', 'Streamlit', 'Scikit-learn'],
      },
      {
        name: 'Bionic Eye Research Publication',
        description: [
          'Research study exploring the mechanics, constraints, and technological improvements of the Argus II retinal prosthesis system for restoring vision.',
          'Co-authored "Bionic Eye". Published in TIJER (Vol 11, Issue 2, February 2024).',
        ],
        tech: ['Research', 'Prosthetics', 'Biomedical Engineering'],
        links: [
          { label: 'Read Paper', url: 'https://tijer.org/tijer/papers/TIJERB001114.pdf', icon: 'paper' },
          { label: 'Certificate', url: 'https://tijer.org/tijer/certificatemanager.php?a_rid=151048', icon: 'award' },
        ],
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Computer Vision & Deep Learning',
    skills: [
      'PyTorch, OpenCV, NumPy',
      'Deep Neural Networks (CNNs, ResNet)',
      'MobileNetV3, SAM Models (Micro-SAM, CellSAM)',
      'Computer Vision (General)',
      'Reinforcement Learning, Sensor Fusion (HMMs, Bayesian)',
    ],
  },
  {
    title: 'NLP, GenAI & Classical ML',
    skills: [
      'HuggingFace Transformers, DistilBERT',
      'OpenAI / Azure OpenAI APIs, LangChain, LangGraph',
      'Model Context Protocol (MCP), Agent Frameworks (CrewAI, AutoGen)',
      'LLM-as-Judge Evaluation, Prompt Engineering, RAG Pipelines',
      'Vector Databases (ChromaDB, FAISS)',
      'Scikit-learn, CatBoost, XGBoost, SHAP',
    ],
  },
  {
    title: 'Programming & Web',
    skills: [
      'Python, SQL, TypeScript, Java, C++, Bash',
      'JavaScript, React, Express, Flask, Django',
      'n8n (Workflow Automation)',
      'REST APIs, JSON, XML',
    ],
  },
  {
    title: 'Cloud, DevOps & Tools',
    skills: [
      'Docker, Git & GitHub, GitHub Actions',
      'Microsoft Azure (VMs, Synapse, Data Factory), AWS',
      'Databricks, Apache Spark, ETL/ELT Pipelines',
      'PostgreSQL, Redis',
      'Linux (CLI)',
      'Streamlit, Jupyter Notebook',
    ],
  },
];

/** Abstract cover art per project category, in public/project-covers/.
 *  Purely decorative — they suggest the domain without depicting real work. */
export const categoryCovers: Record<string, string> = {
  'Computer Vision': 'project-covers/computer-vision.jpg',
  'Generative AI': 'project-covers/generative-ai.jpg',
  'Natural Language Processing': 'project-covers/nlp.jpg',
  'Machine Learning': 'project-covers/machine-learning.jpg',
};

export const certifications: Certification[] = [
  {
    name: 'Computer Vision Specialization',
    issuer: 'University of Colorado Boulder · Coursera',
    provider: 'Coursera',
    status: 'ongoing',
  },
  {
    name: 'RAG and Agentic AI Professional Certificate',
    issuer: 'IBM',
    provider: 'IBM',
    status: 'ongoing',
  },
  {
    name: 'AI for Medical Diagnosis',
    issuer: 'DeepLearning.AI · Coursera',
    provider: 'DeepLearning.AI',
    status: 'ongoing',
  },
  {
    name: 'Develop Generative AI Applications: Get Started',
    issuer: 'IBM · Coursera',
    provider: 'IBM',
    status: 'completed',
    url: 'certificates/IBM_GenAI_Applications_Certificate.pdf',
  },
  {
    name: 'Build RAG Applications: Get Started',
    issuer: 'IBM · Coursera',
    provider: 'IBM',
    status: 'completed',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    provider: 'Anthropic',
    status: 'completed',
  },
  {
    name: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    provider: 'Anthropic',
    status: 'completed',
  },
  {
    name: 'TUM.ai Munich Hackathon 2026',
    issuer: 'TUM.ai × EHL · Team Bayern CodeWerk',
    provider: 'TUM.ai',
    status: 'completed',
    url: 'certificates/TUMai_Munich_Hackathon_Certificate.pdf',
  },
  {
    name: 'Data Warehouse Fundamentals',
    issuer: 'Udemy',
    provider: 'Udemy',
    status: 'completed',
    url: 'certificates/Data_Warehouse_Certificate.pdf',
  },
  {
    name: 'Data Modeling & Relational DB Design',
    issuer: 'Udemy',
    provider: 'Udemy',
    status: 'completed',
    url: 'certificates/Data_Modeling_Certificate.pdf',
  },
  {
    name: 'Intro to Linux',
    issuer: 'Udemy',
    provider: 'Udemy',
    status: 'completed',
    url: 'certificates/Intro_to_Linux_Certificate.pdf',
  },
  {
    name: 'Data Science for Beginners',
    issuer: 'NASSCOM',
    provider: 'NASSCOM',
    status: 'completed',
    url: 'certificates/NASSCOM_Data_Science_Certificate.pdf',
  },
];

/** Pipeline diagrams for flagship projects, shown in the Projects section.
 *  Stage detail comes from the project descriptions above. */
export const pipelines = [
  {
    title: 'Teach It To Grandma — understanding-graded voice loop',
    stages: [
      { label: 'You explain', detail: 'Spoken explanation of a concept you chose' },
      { label: 'ElevenLabs', detail: 'Conversational agent pushes back on jargon' },
      { label: 'Transcript', detail: 'Turn-by-turn record of what was actually said' },
      { label: 'LLM grading', detail: 'gemini-3.1-flash-lite judges whether each point was genuinely explained' },
      { label: 'Recap', detail: 'Per-point verdicts replace keyword matching' },
    ],
    outcome: 'Won the ElevenLabs Sonderpreis for Best Project Built With ElevenLabs.',
    demoUrl: 'https://titanom-hackathon-8xts.vercel.app/',
  },
  {
    title: 'Driver drowsiness detection — inference pipeline',
    stages: [
      { label: 'Camera frame', detail: 'Live video captured frame by frame' },
      { label: 'MediaPipe', detail: 'Facial landmarks locate the eye regions' },
      { label: 'MobileNetV3', detail: 'Fine-tuned eye-state classifier, 98.2% val accuracy' },
      { label: 'PERCLOS', detail: 'Percentage of eyelid closure over a rolling window' },
      { label: 'Alert', detail: 'Drowsiness flagged when the threshold is crossed' },
    ],
    outcome: '5.4 ms single-frame CPU inference (~185 FPS), viable for on-device edge deployment.',
  },
];
