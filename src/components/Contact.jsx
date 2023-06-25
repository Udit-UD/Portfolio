import React from 'react'
import "../style/contact.css"
import { MdLocationPin } from "react-icons/md";
import {SiGmail} from "react-icons/si"
import {BsFillTelephoneFill} from "react-icons/bs"

export default function Contact() {
  return (
    <>
        <div className="contact-container" id='contact'>
            <div className="contact-box">
                <span>
                    <h2 className="headings">
                        Contact Me
                    </h2>
                    <h3 className="description"
                      style={{ color: "#E18A07", fontWeight: 600, paddingLeft: "4%" }}   
                    >
                        Don't be shy, Hit me Up 👇
                    </h3>
                </span>

                <div className="contact-content">
                    <div className="contact-item">
                        <span style={{fontSize:"2rem", color: "#1029ff"}}>
                        <MdLocationPin />
                        </span> 
                        <div style={{paddingLeft: "1em"}}>
                        <span style={{color: "blue", fontWeight: "bolder"}}>
                            Location
                        </span>
                        <h4>
                            Chandigarh, India
                        </h4>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span style={{fontSize:"2rem", color: "#ff1010"}}>
                            <SiGmail/> 
                        </span>
                        <div style={{paddingLeft: "1em"}}>
                        <span style={{color: "#ff1010", fontWeight: "bolder"}}>
                            Mail
                        </span>
                        <h4>
                            udgupta33@gmail.com
                        </h4>
                        </div>
                        
                        
                    </div>
                    <div className="contact-item">
                    <span style={{fontSize:"2rem", color: "green"}}>
                            <BsFillTelephoneFill/> 
                        </span>
                        <div style={{paddingLeft: "1em"}}>
                        <span style={{color: "green", fontWeight: "bolder"}}>
                            Phone no.
                        </span>
                        <h4>
                            9368875433
                        </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
