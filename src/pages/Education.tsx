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
            <ul className="module-list">
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Reasoning and Decision Making under Uncertainty</strong>
                <p style={{ marginTop: '0.25rem', marginBottom: '0.75rem' }}>Studied under Prof. Dr. Frank Deinzer. Comprehensive study of non-deterministic AI models.</p>
                <ul>
                  <li><strong>Core Topics:</strong> Deep dive into Reinforcement Learning (Markov Decision Processes, policy/value functions) and Sensor Fusion (Bayesian approaches, Hidden Markov Models, Viterbi algorithm).</li>
                  <li><strong>Final Paper:</strong> Authored <em>"Deriving Blackjack Card-Counting Systems via Simulated Effect of Removal"</em>. Developed a tabular first-visit Monte Carlo RL agent to derive card-counting weights (correlating with professional Wong Halves at r=0.981), evaluating zero-sum balancing and ROI.</li>
                </ul>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Introduction to Deep Learning</strong>
                <p style={{ marginTop: '0.25rem', marginBottom: '0.75rem' }}>Studied under Prof. Dr. Magda Gregorová. Advanced exploration of deep neural network architectures and PyTorch implementations.</p>
                <ul>
                  <li><strong>Core Topics:</strong> Deep Neural Networks, Backpropagation & Computation Graphs, Loss Functions & Gradient Descent, and advanced CNN architectures (AlexNet, VGG16, ResNet).</li>
                  <li><strong>Final Project ("Operation Cyber-Histology"):</strong> Audited and reconstructed a sabotaged clinical triage ML pipeline. Rebuilt missing evaluation infrastructure and stabilized numerical explosions for models like AlexNet, VGG16, and ResNet18 on medical datasets.</li>
                </ul>
              </li>
              <li style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>Mathematical Foundations of AI</strong>
                <p style={{ marginTop: '0.25rem', marginBottom: '0.75rem' }}>Studied under Prof. Dr. Martin Storath.</p>
                <ul>
                  <li><strong>Core Topics:</strong> Orthogonal Projections, Ordinary Least Squares, Uncertainty and Statistical Tests for Model Evaluation, Probability Theory, and Optimization. Focused on the rigorous mathematical intuition necessary to understand and build models beyond treating them as "black boxes".</li>
                </ul>
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
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', marginTop: '1.5rem' }}>Core AI & Data Science Curriculum (Regulation 2021):</h4>
            <ul className="module-list" style={{ marginTop: '0.5rem' }}>
              <li>
                <strong>Artificial Intelligence, Deep Learning & NLP:</strong> Artificial Intelligence and Expert Systems, Machine Learning, Deep Learning, Knowledge Engineering and Intelligent Systems, Natural Language Processing.
              </li>
              <li>
                <strong>Computer Vision, AR/VR & Robotics:</strong> Digital Image Processing, Computer Vision, Augmented Reality & Virtual Reality (AR/VR) with AI, AI and Robotics.
              </li>
              <li>
                <strong>Data Science & Big Data:</strong> Basics of Data Science, Data Exploration and Visualization, Data Analytics, Business Analytics, Probability and Statistical Modeling.
              </li>
              <li>
                <strong>Core Computer Science:</strong> Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Software Engineering, Formal Language and Automata Theory, Internals of Computer Systems, System Software and Operating Systems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
