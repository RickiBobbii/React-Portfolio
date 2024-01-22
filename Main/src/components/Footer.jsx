import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center fixed-bottom bg-dark">
            <div className="d-flex align-items-center">
            &copy; 2024 Made by Dusty Gray.
            </div>
            <div className="">
                <a className="mx-3" href="https://github.com/your-github-profile">
                <i className="social-links">
                    <FaGithub />
                    </i>
                </a>
                <a className="" href="mailto:rickibobbiii@gmail.com" >
                  <i className="social-links">
                    <FaEnvelope />
                  </i>
                </a>
                <a className="mx-3" href="https://www.linkedin.com/in/your-linkedin-profile">
                <i className="social-links">
                    <FaLinkedin />
                    </i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
