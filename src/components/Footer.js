import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex justify-center">
        <p className="mx-auto text-sm leading-5">
          Developed by <b>Jayant Ghadge</b>
          <br />
          <div className="flex justify-center">
            <a target="_blank" href="https://twitter.com/JayantGhadge">
              <FaTwitter className="social-media-icons text-blue-500 " />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jayant-ghadge-700739181"
            >
              <FaLinkedin className="social-media-icons text-blue-500 " />
            </a>
            <a target="_blank" href="https://github.com/jayantghadge">
              <FaGithub className="social-media-icons" />
            </a>
          </div>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
