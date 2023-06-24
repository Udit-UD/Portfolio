import React from "react";
import "../style/project.css";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import projectDB from "../data/portfolioDB";

const Projects = () => {
  return (
    <>
      <div className="project-container" id="projects">
        <div className="project-box">
          <span>
            <h2 className="headings">Projects</h2>
            <h3
              className="description"
              style={{ color: "#E18A07", fontWeight: 600 }}
            >
              Transforming Ideas into Impactful Reality 💸
              
            </h3>
          </span>
          <div className="projects">
              {projectDB.map((project) => 
              (  
                
                <div className="project-div" key={project.id}>
                  <div className="left-box-project" style={project.id % 2 === 0 ? {order: 1} : {order: 0}}  >
                    <img src= {project.image} style={{borderRadius: "20px"}} alt={project.title} />
                  </div>
                  <div className="right-box-project">
                    <h2 className="project-heading">{project.title}</h2>

                    <h3 className="description">
                      <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    </h3>

                    
                    <span className="tech-stack">
                      <h3>
                        Tech Stack <span> | </span>
                      </h3>
                    <span>

                        {
                          project.tech.map((techImg, index) => (
                            
                            <img src={techImg} alt="" key = {index}/>
                          ))
                        }
                      </span>
                    </span>
                    <span className="projects-buttons-span">
                      <button className="buttons projBtn">
                        Live Demo &nbsp; <BsArrowUpRight />
                      </button>
                      <a href={project.github}>
                      <button className="buttons projBtn">
                        Github &nbsp; <BsGithub />
                      </button>
                      </a>

                    </span>
                  </div>
                </div>
              ))};
            </div>
          </div>
        </div>
    </>
  );
};

export default Projects;
