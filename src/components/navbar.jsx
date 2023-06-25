import React, { useEffect, useState } from 'react'
import "../style/navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
const navBar = () => {
    const [navState, setNavState] = useState(false);
    const [toggle, setToggle] = useState(false);


    useEffect(() =>{
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setNavState(scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return(
        <>
            <nav className={`nav-container ${navState ? 'fixed' : ''} `} >
                <div className="nav-part-1">
                    <span>
                        <h1 className="primary-logo">
                            Udit.Dev
                        </h1>
                    </span>
                </div>
                <div className="nav-part-2">
                    <div className="menu-ham" onClick={() => {setToggle(!toggle)}}>
                        {(toggle) ? <>
                            <h2 className="primary-logo">
                            <RxCross2 />
                            </h2>
                           
                        
                        </>
                            
                        
                        
                        : 

                            <h2 className='primary-logo'>
                            <GiHamburgerMenu/>
                            </h2>
                        }
                       

                    </div>

                    <ul>

                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                </div>
                {
                    (toggle) ?
                    <>
                    <div style={{flexBasis: "100%", height: 0}}></div>
                    <div className="mobile-menu menu-ham" style={{flexDirection: "column"}}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    </div>  
                    </> :
                    <></>
                }
                
                
            </nav>
        </>
    )
};

export default navBar;