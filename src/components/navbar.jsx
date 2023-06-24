import React, { useEffect, useState } from 'react'
import "../style/navbar.css"

const navBar = () => {
    const [navState, setNavState] = useState(false);

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
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default navBar;