import React, {useEffect, useRef} from 'react';
import "../style/home.css"
import Typed from 'typed.js';
import {BsDownload, BsGithub} from 'react-icons/bs';



const Home = ()=>{
    const el = useRef(null);
    const githubLink = "https://github.com/Udit-UD";

    useEffect(() => {

        const typed = new Typed(el.current, {
          strings: ['Full Stack Web Developer'],
          typeSpeed: 40,
        });
  
        return () => {
          typed.destroy();
        };
    }, []);


    return(
        <>
            <div className="home-container" id="home">
                <div className="home-box">
                    <div className="left-box">
                    <div className="box-1">
                        <div className="box-1-content">
                            <h1 className='intro-heading'> A &nbsp;  
                            <span ref={el} /> 🚀</h1>
                            <br />
                            <h3 className='description'>
                            Hi, I am Udit Gupta, a passionate full stack developer on a mission to transform ideas into powerful, scalable web applications that make a lasting impact.
                            </h3>
                            <br />
                            <span className="buttons-section" style={{display: "flex", flexWrap: 'no-wrap'}}>
                                <button className='buttons'id="resume" >Resume <BsDownload/></button>
                                <a href={githubLink} target="_blank"  rel="noopener noreferrer">
                                <button id="github" className='buttons'>
                                    Github <BsGithub />
                                </button>
                                </a>
                            </span>

                        </div>
                        
                    </div>
                    </div>
                    
                    <div className="box2">
                    
                        <div className="box-img"> 
                        <img src="Images/Udit-Img.jpg" alt="" />
                        </div>
                    </div>

                    <div className="break"></div>
                    <div className='skill-span'>
                            <h2 className="heading" >
                                    Tech Stack 
                            </h2>
                            <div className="skills">
                                
                                <img src="Images/htmlCssJs.png" alt="" />
                                <img src="Images/mongoDB.png" alt="" />
                                <img src="Images/nodeJS.png" alt="" />
                                <img src="Images/reactJS.png" alt="" />
                                <img src="Images/tailwind.png" alt="" />

                            </div>
                </div>

                </div>
                

            </div>
            
        </>
    )
}

export default Home;