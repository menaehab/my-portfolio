import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="border-t-2 border-secondary">
      <div className="container mx-auto px-10 md:px-24 py-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="text-2xl text-white font-bold mb-4">MENA</h3>
            <p className="text-secondary text-lg">Full-Stack Developer</p>
          </div>
          <div className="">
            <h3 className="text-white font-bold text-center mb-4 text-xl">
              Media
            </h3>
            <div className="text-secondary flex justify-center gap-4 text-2xl ">
              <a
                className="hover:text-white transition duration-300 ease-in-out"
                href="https://github.com/menaehab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-white transition duration-300 ease-in-out"
                href="https://www.linkedin.com/in/mena-ehab-262a4b290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="hover:text-white transition duration-300 ease-in-out"
                href="https://www.facebook.com/mena.ehab.9026/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 text-secondary">
          Copyright 2025 MENA. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
