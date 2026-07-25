const Education = () => {
  return (
    <div className="page-wrapper fade-in">
      <div className="section-header">
        <span className="section-number">01.</span>
        <h2 className="section-title">Academic Journey</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="experience-list">
        {/* Master's Degree */}
        <div className="experience-item">
          <div className="experience-meta">
            <h3>Master of Science in Artificial Intelligence</h3>
            <p className="company">THWS (Technical University of Applied Sciences Würzburg-Schweinfurt)</p>
            <p className="date mono-text">Germany</p>
          </div>
          <div className="experience-details">
            <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Currently enrolled in the research-oriented Master of Artificial Intelligence (MAI) program, focusing on the deep mathematical and architectural foundations of intelligent systems.
            </p>
            
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Key First-Semester Modules (CAIRO):</h4>
            <ul>
              <li>
                <strong>Artificial Intelligence and Machine Learning:</strong> Comprehensive study of core ML paradigms, including a deep dive into <strong>Reinforcement Learning</strong> (actions, states, policies, rewards, value functions) and the formalisms of agent-environment interaction.
              </li>
              <li>
                <strong>Introduction to Deep Learning:</strong> Advanced exploration of deep neural network architectures, optimization algorithms, and practical implementations using PyTorch.
              </li>
              <li>
                <strong>Mathematical Foundations of AI:</strong> Studied under Prof. Dr. Martin Storath, focusing on the rigorous mathematical intuition (Linear Algebra, Calculus, Probability, Optimization) necessary to understand and build models beyond "black boxes".
              </li>
            </ul>
          </div>
        </div>

        {/* Bachelor's Degree */}
        <div className="experience-item">
          <div className="experience-meta">
            <h3>Bachelor of Technology in AI & Data Science</h3>
            <p className="company">Panimalar Engineering College (Anna University)</p>
            <p className="date mono-text">Chennai, India</p>
          </div>
          <div className="experience-details">
            <p style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Graduated with a strong academic record, achieving a CGPA of 8.51 (equivalent to a 1.8 on the German grading scale).
            </p>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Focus Areas:</h4>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems & SQL</li>
              <li>Applied Machine Learning & Predictive Modeling</li>
              <li>Software Engineering Principles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
