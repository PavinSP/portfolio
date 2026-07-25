const Experience = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-number">02.</span>
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="experience-list">
        {/* Cognizant */}
        <div className="experience-item">
          <div className="experience-meta">
            <h3>Programmer Analyst Trainee</h3>
            <p className="company">Cognizant Technology Solutions</p>
            <p className="date mono-text">Dec 2024 — Apr 2025</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>Worked within an agile software development team, learning how different roles collaborate to ship reliable enterprise systems.</li>
              <li>Built automated data pipelines in Python and SQL on Microsoft Azure.</li>
              <li>Integrated REST APIs to ingest, orchestrate, and process structured and semi-structured data from disparate sources.</li>
              <li>Automated data validation and quality checks, benchmarking pipeline reliability across transformation workflows to ensure zero data loss.</li>
              <li>Documented technical processes clearly and presented results to both technical and non-technical stakeholders, bridging the gap between engineering and business.</li>
            </ul>
          </div>
        </div>

        {/* Edify */}
        <div className="experience-item">
          <div className="experience-meta">
            <h3>Software Engineering Intern</h3>
            <p className="company">Edify Techno Solutions</p>
            <p className="date mono-text">May 2024</p>
          </div>
          <div className="experience-details">
            <ul>
              <li>Contributed to full-stack application development, seamlessly integrating backend business logic with frontend interactive applications using React.</li>
              <li>Assisted with rigorous testing and logging to identify failure points early, ensuring stable and reproducible behaviour in production environments.</li>
              <li>Maintained comprehensive technical documentation to support knowledge transfer and onboarding within the development team.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
