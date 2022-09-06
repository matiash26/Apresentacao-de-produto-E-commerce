import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import logoFooter from "../assets/logoFooter.png"
import "../styles/Footer.css"

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <h1>Join Our Community</h1>
                <div className="footer-item">
                    <input type="email" name="email" placeholder="Your Email Address" />
                    <button type="submit">Sign Up</button>
                    <img src={logoFooter} alt="" />
                </div>
                <div className="socialMedia">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><LinkedInIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                </div>
            </div>
            <p>&copy; 2021 STWA. VIBRATHON TECHNOLOGIES ALL RIGHTS RESERVED.</p>
        </div>
    )
}