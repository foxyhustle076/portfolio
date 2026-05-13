import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor</h4>
                <h5>Foxy Studio</h5>
              </div>
              <h3>2023-25</h3>
            </div>
            <p>
              Edited and implemented advanced editing architectures, resulting in a 30% increase in operational efficiency. Led a group of youtube team in developing scalable solutions, ensuring alignment with business objectives and regulatory requirements. The YouTube Channel.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Diploma</h4>
                <h5>St. Joseph’s High School</h5>
              </div>
              <h3>2024-2026</h3>
            </div>
            <p>
              Score - 85%. Best Student. Recognition for Video Editor of School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
