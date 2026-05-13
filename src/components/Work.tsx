import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { workData } from "../data/workData";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workData.map((item, index) => (
            <a 
              href={item.link || item.video || item.iframe || item.image} 
              target="_blank" 
              className="work-box" 
              key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.projectName}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage 
                video={item.video} 
                iframe={item.iframe} 
                image={item.image} 
                link={item.link} 
                alt={item.projectName} 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
