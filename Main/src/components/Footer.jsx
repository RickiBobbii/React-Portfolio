import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-center p-2 fixed-bottom bg-dark">
            <div className="d-flex align-items-center">
            &copy; 2024 RickiBobbi.
            </div>
            <div className="">
                <a className="mx-3" href="https://github.com/your-github-profile">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile">
                    <FaLinkedin size={30} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
