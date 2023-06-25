import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-me-section">
          <span className="about-span">
            <h2 className="headings">About Me</h2>
            <h3
              className="description"
              style={{ color: "rgb(31 41 129)", fontWeight: 700, paddingLeft: "4%" }}
            >
              Passionate Creator of Engaging Digital Experiences 💻
            </h3>
          </span>
          <div className="about-box">

                <div className="about-left-box">
                    <img src="Images/animated-boy.gif" alt="" />

                </div>

                <div className="about-right-box">
                    <h3 className="project-heading">
                        About Me
                    </h3>
                    <h2 className="project-heading" style={{textAlign:"left", margin:"5px 0px"}}>
                        A dedicated Full Stack Developer based in Chandigarh 📍
                    </h2>
                    <p className="description">
                    I am a junior full stack developer with a deep passion for the world of programming and technology. Continuously seeking knowledge and growth, I eagerly explore new concepts and technologies to expand my skills in this dynamic field. Additionally, when I'm not immersed in code, I enjoy engaging in the thrilling virtual battles of BGMI. This multiplayer game not only provides me with an adrenaline rush but also helps me develop my strategic thinking and teamwork abilities. 
                    </p>
                    <span className="social-stack">
                      <h3>
                        Social Handles <span> | </span>
                      </h3>
                      <div className="social-handles">
                        <a href="https://www.instagram.com/_udit_ud_/">
                        <span>
                            <img src="Images/insta.png" className="social-image" alt="" />
                        </span>
                        </a>
                        <a href="https://www.linkedin.com/in/udit-gupta33/">
                        <span>
                            <img src="Images/linked.png" className="social-image" alt="" />
                        </span>
                        </a>



                      </div>
                    </span>
                </div>


          </div>
        </div>
      </div>
    </>
  );
}
