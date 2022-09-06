import React from "react";

import imageAbout from "../assets/mandela.png";
import aboutUS from "../assets/aboutus2.png"

import "../styles/About.css"

export function About() {
    return (<>
        <div className="rowAbout">
            <img src={imageAbout} alt="" />
            <div className="line"></div>
        </div>
        <div className="about" id="about">
            <div className="aboutUS">
                <div className="aboutSection">
                    <div className="aboutItem1">
                        <h3>About Us</h3>
                        <p>We Are Shaping The Future</p>
                        <p>By feeding the coming <br /> with safest food.</p>
                    </div>
                    <a href="#">Explore more</a>
                </div>
                <img src={aboutUS} alt="About us item 2" />
            </div>
        </div>
    </>
    )
}
