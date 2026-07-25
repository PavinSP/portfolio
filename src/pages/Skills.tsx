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
            <li>PyTorch & Torchvision</li>
            <li>CNN fine-tuning & Transfer learning</li>
            <li>Foundation model fine-tuning (SAM-family)</li>
            <li>Real-time inference benchmarking</li>
            <li>Subject-level generalisation testing</li>
            <li>Image preprocessing (illumination/contrast)</li>
          </ul>
        </div>
        
        <div className="skill-category">
          <h3>NLP & Machine Learning</h3>
          <ul className="skill-list mono-text">
            <li>HuggingFace Transformers</li>
            <li>LLM Orchestration (LangChain)</li>
            <li>Prompt Engineering</li>
            <li>Scikit-learn, XGBoost, CatBoost</li>
            <li>Model evaluation (F1, ROC-AUC)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Software & Cloud Engineering</h3>
          <ul className="skill-list mono-text">
            <li>Python (OOP), SQL, Java</li>
            <li>React, TypeScript, JavaScript</li>
            <li>Flask, Streamlit, REST APIs</li>
            <li>Microsoft Azure (VMs, Synapse)</li>
            <li>Docker, Git, Linux (CLI)</li>
            <li>Data Engineering (Pandas, ETL pipelines)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Certifications & Courses</h3>
          <ul className="skill-list mono-text">
            <li>Deep Learning for CV (MathWorks, Coursera)</li>
            <li>Data Warehouse Fundamentals (Udemy)</li>
            <li>Data Modeling & Relational DB Design</li>
            <li>Data Science for Beginners (NASSCOM)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
