const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Projects = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-number">03.</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-line"></div>
      </div>
      
      {/* Computer Vision Section */}
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '1rem', fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Computer Vision
      </h3>
      <div className="projects-grid">
        
        <div className="project-card">
          <div className="project-top">
            <h3 className="project-name">Real-Time Driver Drowsiness Detection</h3>
            <div className="project-desc">
              <p>Fine-tuned MobileNetV3-Small in PyTorch for eye-state classification on the MRL Eye dataset (84,898 infrared images), reaching 98.2% validation accuracy.</p>
              <p>Benchmarked single-frame CPU inference at 5.4 ms (~185 FPS), proving viability for on-device edge deployment. Integrated MediaPipe for real-time facial landmark tracking and PERCLOS calculation.</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>PyTorch</li>
            <li>MobileNetV3</li>
            <li>MediaPipe</li>
            <li>NumPy</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-top">
            <h3 className="project-name">CellFoundry: Foundation Models for Instance Segmentation</h3>
            <div className="project-desc">
              <p>Working under Prof. Dr. Magda Gregorová to benchmark and fine-tune foundation models (Micro-SAM, CellSAM) for adipocyte instance segmentation in brightfield microscopy.</p>
              <p>Scope includes robust image preprocessing and systematic experiment design in collaboration with IMES Schweinfurt to advance medical imaging analysis.</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>SAM Models</li>
            <li>Computer Vision</li>
            <li>Medical Imaging</li>
          </ul>
        </div>

      </div>

      {/* Generative AI Section */}
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '3rem', fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Generative AI
      </h3>
      <div className="projects-grid">
        
        <div className="project-card">
          <div className="project-top">
            <div className="project-header-flex">
              <div className="project-links">
                <a href="https://github.com/PavinSP/hackathon" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>
            <h3 className="project-name">ConStructAI: Information Extraction & Routing</h3>
            <div className="project-desc">
              <p>Built a "single source of truth" prototype for construction communication. Extracted key information from unstructured inputs (emails, chats, notes) and routed it correctly.</p>
              <p>Designed a human-in-the-loop verification step for trustworthiness, preventing AI hallucinations from reaching production workflows.</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>GenAI</li>
            <li>Information Extraction</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-top">
            <div className="project-header-flex">
              <div className="project-links">
                <a href="https://www.tijer.org/viewpaperforall?paper=TIJERC001274" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  📄 Read Paper
                </a>
              </div>
            </div>
            <h3 className="project-name">LLM-Orchestrated Resume Screening</h3>
            <div className="project-desc">
              <p>Built a multi-step pipeline using LangChain and Azure OpenAI for structured information extraction from highly unstructured candidate documents.</p>
              <p>Co-authored <em>"Python-Powered ML for Next-Gen Resume Screening"</em>. Published in TIJER (Vol 11, Issue 7, July 2024).</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>LangChain</li>
            <li>Azure OpenAI</li>
            <li>React</li>
            <li>Flask</li>
          </ul>
        </div>

      </div>

      {/* Natural Language Processing Section */}
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '3rem', fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Natural Language Processing
      </h3>
      <div className="projects-grid">

        <div className="project-card">
          <div className="project-top">
            <div className="project-header-flex">
              <div className="project-links">
                <a href="https://github.com/PavinSP/SniffTest-DIAL-Hackathon" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>
            <h3 className="project-name">SniffTest: AI-Powered Disinformation Detection</h3>
            <div className="project-desc">
              <p>Led the AI/ML workstream at the DAAD East-West Dialogue Hackathon. Fine-tuned DistilBERT for multi-class text classification, reaching 86% F1 score.</p>
              <p>Deployed the model behind a REST API in a Docker container for a live interactive demo with real users.</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>PyTorch</li>
            <li>DistilBERT</li>
            <li>Docker</li>
            <li>REST API</li>
          </ul>
        </div>

      </div>

      {/* Machine Learning Section */}
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', marginTop: '3rem', fontSize: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        Machine Learning
      </h3>
      <div className="projects-grid">

        <div className="project-card">
          <div className="project-top">
            <h3 className="project-name">AI-Driven Ticket Confirmation Prediction</h3>
            <div className="project-desc">
              <p>Built an end-to-end ML pipeline predicting waitlisted railway ticket confirmations using CatBoost, evaluating robustness with F1-score and ROC-AUC.</p>
              <p>Developed an interactive Streamlit dashboard to present complex predictive results to non-technical stakeholders.</p>
            </div>
          </div>
          <ul className="project-tech-list mono-text">
            <li>Python</li>
            <li>CatBoost</li>
            <li>Streamlit</li>
            <li>Scikit-learn</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Projects;
