const Skills = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-number">04.</span>
        <h2 className="section-title">Technical Skills & Certifications</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>Computer Vision & Deep Learning</h3>
          <ul className="skill-list mono-text">
            <li>PyTorch, OpenCV, NumPy</li>
            <li>Deep Neural Networks (CNNs, ResNet)</li>
            <li>MobileNetV3, SAM Models (Micro-SAM, CellSAM)</li>
            <li>Computer Vision (General)</li>
            <li>Reinforcement Learning, Sensor Fusion (HMMs, Bayesian)</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>NLP, GenAI & Classical ML</h3>
          <ul className="skill-list mono-text">
            <li>HuggingFace Transformers, DistilBERT</li>
            <li>OpenAI / Azure OpenAI APIs, LangChain</li>
            <li>Prompt Engineering, RAG Pipelines</li>
            <li>Natural Language Processing, Information Extraction</li>
            <li>Scikit-learn, CatBoost, XGBoost</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Programming & Web</h3>
          <ul className="skill-list mono-text">
            <li>Python, SQL, Java, Bash</li>
            <li>JavaScript, React, Flask</li>
            <li>n8n (Workflow Automation)</li>
            <li>REST APIs, JSON</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Cloud, DevOps & Tools</h3>
          <ul className="skill-list mono-text">
            <li>Docker, Git & GitHub, CI/CD Concepts</li>
            <li>Microsoft Azure (VMs, Synapse)</li>
            <li>Linux (CLI)</li>
            <li>Streamlit, Jupyter Notebook</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Certifications & Courses</h3>
          <ul className="skill-list mono-text">
            <li>Deep Learning for CV (MathWorks, Coursera)</li>
            <li>Data Warehouse Fundamentals (Udemy)</li>
            <li>Data Modeling & Relational DB Design</li>
            <li>
              <a href="/portfolio/certificates/NASSCOM_Data_Science_Certificate.pdf" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-color)', textDecoration: 'none'}}>
                Data Science for Beginners (NASSCOM) 📄
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
