import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaBriefcase,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import SocialIcon from "./socialIcon/Index";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This web page is designed by Dikshant Dak for educational and learning purposes.
                    Movies & TV shows data is fetched using TMDB API.
                    All copyrights are belonged to Dikshant Dak. <br />
                    Cinematic Suite : 2023

                </div>
                <div className="socialIcons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com"     
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/dikshant-dak"     
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedin />}
                        link="https://www.linkedin.com/in/dikshant-dak-55247919a/"     
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/dikshant_dak/"     
                    />
                    <SocialIcon
                        color="#da2f68"
                        icon={<FaBriefcase />}
                        link="https://portfolio-dikshant.netlify.app/"     
                    />
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;