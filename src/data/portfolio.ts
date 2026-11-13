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
    'Computer vision on real, messy data: camera traps, cell microscopy and driver eye images.',
    'LLM apps built at hackathons, each checked against a baseline before I trust the numbers.',
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
    "I'm open to research collaborations, a 6-month internship from March 2027, and hackathon teams. Feel free to reach out!",
  email: 'pavinsp122002@gmail.com',
  phone: '+49 162 3828298',
  location: 'Würzburg, Germany',
};

export const education: Degree[] = [
  {
    degree: 'Master of Science in Artificial Intelligence',
    institution: 'THWS (Technical University of Applied Sciences Würzburg-Schweinfurt)',
    location: 'Würzburg, Germany · Mar 2026 - Present',
    intro:
      'Currently enrolled in the research-oriented Master of Artificial Intelligence (MAI) program, focusing on the mathematical and architectural foundations of intelligent systems.',
    modulesHeading: 'Selected Modules (CAIRO):',
    modules: [
      {
        title: 'Second Semester (Winter 2026/27, ongoing)',
        points: [
          {
            text: 'Computer Vision, Natural Language Processing, Fundamentals of Mobile Robotics, Ethics and Fundamentals of AI, and the CellFoundry project module.',
          },
        ],
      },
      {
        title: 'Reasoning and Decision Making under Uncertainty',
        summary:
          'Studied under Prof. Dr. Frank Deinzer. Comprehensive study of non-deterministic AI models.',
        points: [
          {
            label: 'Core Topics',
            text: 'Reinforcement Learning (Markov Decision Processes, policy and value functions) and Sensor Fusion (Bayesian approaches, Hidden Markov Models, Viterbi algorithm).',
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
          'Studied under Prof. Dr. Magda Gregorová. Deep neural network architectures and PyTorch implementations.',
        points: [
          {
            label: 'Core Topics',
            text: 'Deep Neural Networks, Backpropagation and Computation Graphs, Loss Functions and Gradient Descent, and CNN architectures (AlexNet, VGG16, ResNet).',
          },
          {
            label: 'Final Project',
            text: 'Clinical Image Triage, a team of 2 (see Projects): repairing and benchmarking a deliberately broken medical image classification pipeline.',
          },
        ],
      },
      {
        title: 'Mathematical Foundations of AI',
        summary: 'Studied under Prof. Dr. Martin Storath.',
        points: [
          {
            label: 'Core Topics',
            text: 'Orthogonal Projections, Ordinary Least Squares, Uncertainty and Statistical Tests for Model Evaluation, Probability Theory, and Optimization.',
          },
        ],
      },
    ],
  },
  {
    degree: 'Bachelor of Technology in AI & Data Science',
    institution: 'Panimalar Engineering College (Anna University)',
    location: 'Chennai, India · Sep 2021 - May 2025',
    intro:
      'Graduated with a CGPA of 8.51 (equivalent to 1.8 on the German grading scale), First Class with Distinction.',
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
    role: 'Student Research Assistant (HiWi), AI4WildLIVE',
    company: 'THWS Computer Vision & Imaging Lab',
    date: 'Oct 2026 - Present',
    bullets: [
      "Working on a wildlife monitoring computer vision project, improving the team's training codebase and supporting the machine learning pipeline, which fine-tunes OWLv2 (open vocabulary object detection) via LoRA adapters on real camera trap imagery to identify wildlife species in genuinely uncontrolled field data.",
      "Using the project's human-in-the-loop (HITL) annotation tool, where OWLv2 detection and SAM segmentation predictions assist annotators, who review and correct them rather than auto trusting model output, feeding back into training data quality.",
      'Wrote a tested tool (14 tests) that reports what differs between two training runs: settings, data sizes and split files.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    date: 'Dec 2024 - Apr 2025',
    links: [
      { label: 'View Offer Letter', url: 'certificates/Cognizant_Offer_Letter.pdf', icon: 'award' },
    ],
    bullets: [
      'Ran data-quality checks (schema validation, record counts, test cases) at every pipeline stage to catch silent data loss before it reached downstream tables.',
      'Built ETL pipelines on Databricks and Spark parsing deeply nested JSON from REST APIs, using explicit schemas and custom UDFs.',
      'Automated pipelines in Python and SQL on Azure over structured and semi-structured JSON and XML data.',
      'Wrote and optimised PostgreSQL queries in a distributed delivery team.',
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
      'Full-stack development with Flask, Django and React, connecting backend and frontend through REST APIs with input validation and clean error handling.',
    ],
  },
];

export const projects: ProjectCategory[] = [
  {
    category: 'Computer Vision',
    projects: [
      {
        name: 'CellFoundry: Measuring the Fat Proportion in Microscopy Images',
        badge: 'Ongoing',
        description: [
          'Research project for the Institute of Medical Engineering Schweinfurt (IMES), team of 3, mentor Prof. Dr. Magda Gregorová. It estimates what share of a microscopy image is covered by fat cells (fat pixels divided by all pixels), so the client can feed in an image and get one number back.',
          'I ran cpsam, DINOCell (LoRA) and nnU-Net on 28 confidential images, with 6 held out for one final test and 3 runs each. Mean absolute error of the fat share, in points of image area: zero-shot cpsam 6.3, fine-tuned cpsam 1.8 ± 0.4, nnU-Net 3.0, DINOCell 4.4. With 6 test images, only the gap to zero-shot is clear.',
          'Wrote the benchmark and the experiment tracking (numbers only, never images), found and fixed a loss bug that made DINOCell label every pixel as fat, and designed a review step where the model flags missed cells for an expert.',
        ],
        tech: ['PyTorch', 'Cellpose', 'nnU-Net', 'LoRA', 'Weights & Biases'],
        links: [
          { label: 'GitHub', url: 'https://github.com/cell-foundry-team/Cell-Foundry', icon: 'github' },
        ],
      },
      {
        name: 'Driver Drowsiness Detection from Eye State',
        description: [
          'Classifies whether a driver\'s eyes are open or closed from infrared eye images (Jun to Nov 2024). Fine-tuned MobileNetV3-Small with two-phase transfer learning on 84,898 images from the MRL Eye dataset: 98.2% validation accuracy.',
          'Split by person, not by image, so no face is in both training and test: on 12 held-out subjects (18,449 images) it reached 93.5% accuracy and 92.8% macro F1. The classifier runs at 5.4 ms per frame on a CPU (about 185 FPS, one thread). Glasses and reflections are the main failure cases.',
          'In progress: a live webcam demo with MediaPipe eye landmarks and PERCLOS to tell blinks from drowsiness. The model is trained on infrared images, so an ordinary webcam needs its own validation.',
        ],
        tech: ['PyTorch', 'MobileNetV3', 'MediaPipe', 'NumPy'],
      },
      {
        name: 'Clinical Image Triage: Repairing and Benchmarking CNNs',
        description: [
          'Introduction to Deep Learning final assignment, team of 2. We audited a deliberately broken medical image classification pipeline (21 logged bugs) and benchmarked AlexNet, VGG16 and ResNet18 on four datasets; the best models reached 97.3% on cells, 89.6% on chest X-rays, 74.1% on skin lesions and 92.3% on organs, above every target.',
          'My part: fixed AlexNet with batch normalisation (chest accuracy 82.2% to 89.2%) and redesigned GreenNet as a small ResNet with about 36x fewer parameters than ResNet18. It scored 97.8%, 89.7%, 74.5% and 91.8%, with about 0.27 ms inference per image against 2 to 2.4 ms for ResNet18.',
        ],
        tech: ['PyTorch', 'AlexNet', 'VGG16', 'ResNet18'],
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
          'Student Hackathon 2026 at Titanom, team of 2. You explain a topic out loud to one of nine AI listeners (six learners, three workplace roles and one that asks like a whole team), and a second model call checks whether each point was explained or only mentioned. I built the app: React frontend, Express API, ElevenLabs voice and deployment.',
          'The score is computed in code from per-point yes/no verdicts, with grading at temperature 0. I picked the grader by testing, four runs each: gemini-3.1-flash-lite scored a jargon-stuffed answer 1/4 and a good one 4/4, while two costlier models scored the jargon 3/4 and 4/4.',
          'Teach It To Your Team (document mode): upload a PDF, PowerPoint or Word file and rehearse explaining it to a workplace listener. A local model reads and grades the file, and the server refuses to run this mode with a cloud model. Also a two-device quiz game, a Teach-Off leaderboard and German support. Won the ElevenLabs Sonderpreis (3 months of ElevenLabs Scale).',
        ],
        tech: ['ElevenLabs', 'React', 'Express', 'Gemini', 'Ollama'],
        links: [
          { label: 'Try the live demo', url: 'https://titanom-hackathon-8xts.vercel.app/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/Teach-It-To-Grandma', icon: 'github' },
        ],
      },
      {
        name: 'Caire: AI Partner Matching for Caritas Würzburg',
        description: [
          'CAIRO.thws InclusivAI Hackathon 2026, team of 7. Ten scoring agents rate 224 regional companies against the Caritas values; missing evidence gives a neutral, low-confidence score instead of an invented one.',
          'I built the web app (map, a cited page per company, German and English, an ElevenLabs voice guide) and a backend that researches and scores a new company on demand with Gemini and Google Search grounding.',
        ],
        tech: ['Gemini', 'Python', 'Leaflet', 'ElevenLabs'],
        links: [
          { label: 'Try the live demo', url: 'https://pavinsp.github.io/InclusivAI-Caire/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/InclusivAI-Caire', icon: 'github' },
        ],
      },
      {
        name: 'LLM Cost Router: Picking the Cheapest Model per Task',
        description: [
          'European Hackathon League, viktor.com × TUM.ai, Munich 2026, team of 5 (Bayern CodeWerk). A rule-based router that picks the cheapest of nine LLMs (a 50x price range) able to do each task, fitted on one chunk of 1,000 tasks and applied cold to a held-out chunk.',
          'The cost saving held: 35% of the logged bill on the held-out chunk. Our quality claim did not (the baseline was 0.53 points better, with a 95% confidence interval excluding zero), so we claimed a cost cut only.',
        ],
        tech: ['Python', 'LLM routing', 'Bootstrap CIs'],
        links: [
          { label: 'Team repo', url: 'https://github.com/hxrshx/ehl-bayern-codewerk', icon: 'github' },
        ],
      },
      {
        name: 'SonicScapes: Sound Checkpoints on Alpine Hiking Trails',
        badge: '🥉 3rd place',
        description: [
          'Music & AI Hackathon 2026 in Salzburg (Austria × Japan, about 120 participants), in a team of six formed on site. Sound checkpoints along a real hiking trail, each tied to a 360 degree photo, in a CesiumJS 3D flyover.',
          'I built the voice narration (a cast of ElevenLabs voices, each tied to a real checkpoint and a true fact about it) and the guided tour of the 3D demo, and gave the final pitch.',
        ],
        tech: ['ElevenLabs', 'React', 'CesiumJS'],
      },
      {
        name: 'SSOT: AI-Powered Triage for Construction-Project Communication',
        description: [
          'Built at the ConStructAI Hackathon (CAIRO.THWS) to turn messy construction communication (emails, chats, notes) into a verified, categorized, routable record. Zero-shot classification into 7 project categories plus question-answering-based detail extraction, cross-referenced against live-parsed IFC/BIM building objects.',
          'Every extraction lands in an unverified buffer first; a human reviews and approves before anything routes to a target system (Schedule, Cost, QA, Task, Issue Log) or triggers a WhatsApp notification via Twilio.',
        ],
        tech: ['HuggingFace Transformers', 'Streamlit', 'IFC/BIM Parsing', 'Python'],
        links: [
          { label: 'Try the live demo', url: 'https://pavinsp.github.io/SSOT---Single-Source-of-Truth/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/SSOT---Single-Source-of-Truth', icon: 'github' },
        ],
      },
      {
        name: 'LLM-Orchestrated Resume Screening',
        description: [
          'Built a multi-step pipeline using LangChain and Azure OpenAI for structured information extraction from unstructured candidate documents.',
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
          'Led the AI/ML workstream at the DAAD East-West Dialogue Hackathon: mapped 12,000+ LIAR statements into manipulation categories and fine-tuned DistilBERT with a class-weighted loss. Per-class F1 ranged from 25% on the hardest category to 87% on the easiest.',
          'Deployed the model behind a REST API in a Docker container for a live interactive demo with real users.',
        ],
        tech: ['PyTorch', 'DistilBERT', 'Docker', 'REST API'],
        links: [
          { label: 'Try the live demo', url: 'https://pavinsp.github.io/snifftest-web/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/SniffTest-DIAL-Hackathon', icon: 'github' },
        ],
      },
    ],
  },
  {
    category: 'Machine Learning',
    projects: [
      {
        name: 'Sensor Fusion: Particle Filter for Multi-Object Tracking',
        description: [
          'Built a particle filter from scratch (Python/NumPy, no filtering libraries) to track multiple indistinguishable balls under projectile motion, from an unordered set of noisy, dropout-prone sensor observations where no observation is labelled with which object it came from.',
          'Used systematic resampling to prevent particle degeneracy and tracked effective sample size to detect when the filter was losing track and needed re-diversifying, recovering per-object position estimates by clustering the multimodal particle distribution.',
        ],
        tech: ['Python', 'NumPy', 'Particle Filters', 'Bayesian Inference'],
        links: [
          { label: 'Try the live demo', url: 'https://pavinsp.github.io/Sensor-Fusion_Portfolio-2/', icon: 'demo' },
          { label: 'GitHub', url: 'https://github.com/PavinSP/Sensor-Fusion_Portfolio-2', icon: 'github' },
        ],
      },
      {
        name: 'GPU-Accelerated Multi-Label Classification for Mechanism of Action Prediction in High-Throughput Drug Discovery',
        description: [
          'Bachelor Thesis Project: 206 independent GPU-accelerated XGBoost classifiers on real NIH LINCS cell data (gene expression and cell viability across 100 cell lines), explained with SHAP.',
          'Handled class imbalance as extreme as 0.08% positives with class weighting. Results: mean ROC-AUC 0.72, mean PR-AUC 0.13.',
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
          'Developed an interactive Streamlit dashboard to present predictive results to non-technical stakeholders.',
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
      'PyTorch, OpenCV, MediaPipe',
      'Object detection (OWLv2 with LoRA)',
      'Segmentation (Cellpose, DINOCell, nnU-Net, SAM)',
      'CNN transfer learning (MobileNetV3, ResNet, VGG)',
      'Human-in-the-loop labelling, active learning',
    ],
  },
  {
    title: 'ML & Evaluation',
    skills: [
      'Scikit-learn, XGBoost, CatBoost, SHAP',
      'Held-out splits, Dice, F1, IoU',
      'Bootstrap confidence intervals',
      'Weights & Biases, reproducible environments (uv)',
      'Reinforcement learning, particle filters',
    ],
  },
  {
    title: 'LLM Applications',
    skills: [
      'LLM APIs (Gemini, Claude, OpenAI-compatible)',
      'Local models with Ollama',
      'LangChain, LLM routing, LLM-as-judge grading',
      'Agentic AI (multi-agent scoring, voice agents)',
      'HuggingFace Transformers (DistilBERT fine-tuning)',
    ],
  },
  {
    title: 'Programming, Cloud & Tools',
    skills: [
      'Python, SQL, TypeScript, JavaScript, C++ (coursework)',
      'React, Express, Flask, Django, Streamlit',
      'Databricks, Apache Spark, ETL pipelines',
      'PostgreSQL, Redis, Docker, Git, GitHub Actions',
      'Microsoft Azure, Linux (CLI)',
    ],
  },
];

/** Abstract cover art per project category, in public/project-covers/.
 *  Purely decorative: they suggest the domain without depicting real work. */
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
    status: 'ongoing',
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
    title: 'Teach It To Grandma: understanding-graded voice loop',
    stages: [
      { label: 'You explain', detail: 'Spoken explanation of a topic you chose, or a document you uploaded' },
      { label: 'ElevenLabs', detail: 'One of nine AI listeners pushes back on jargon' },
      { label: 'Transcript', detail: 'Turn-by-turn record of what was actually said' },
      { label: 'LLM grading', detail: 'A yes/no verdict per point, at temperature 0' },
      { label: 'Recap', detail: 'The score is computed in code from those verdicts' },
    ],
    outcome: 'Won the ElevenLabs Sonderpreis for Best Project Built With ElevenLabs.',
    demoUrl: 'https://titanom-hackathon-8xts.vercel.app/',
  },
  {
    title: 'Driver drowsiness detection: inference pipeline',
    stages: [
      { label: 'Eye image', detail: 'Infrared eye crop (live webcam input in progress)' },
      { label: 'MobileNetV3', detail: 'Eye-state classifier: 93.5% accuracy on 12 unseen subjects' },
      { label: 'MediaPipe', detail: 'Eye landmarks from live video (in progress)' },
      { label: 'PERCLOS', detail: 'Share of time the eyes are closed (in progress)' },
      { label: 'Alert', detail: 'Drowsiness flagged when the threshold is crossed (in progress)' },
    ],
    outcome: '5.4 ms per frame for the classifier on a CPU (about 185 FPS). The live webcam and PERCLOS stages are in progress.',
  },
];
