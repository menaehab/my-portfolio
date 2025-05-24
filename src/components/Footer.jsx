import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t-2 border-[#ABB2BF]"
    >
      <div className="container px-10 py-8 mx-auto md:px-24">
        <div className="flex items-center justify-between">
          <div className="">
            <h3 className="mb-4 text-2xl font-bold text-white">MENA</h3>
            <p className="text-[#ABB2BF] text-lg">Full-Stack Developer</p>
          </div>
          <div className="">
            <h3 className="mb-4 text-xl font-bold text-center text-white">
              Media
            </h3>
            <div className="text-[#ABB2BF] flex justify-center gap-4 text-2xl ">
              <a
                className="transition duration-300 ease-in-out hover:text-white"
                href="https://github.com/menaehab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="transition duration-300 ease-in-out hover:text-white"
                href="https://www.linkedin.com/in/mena-ehab-262a4b290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="transition duration-300 ease-in-out hover:text-white"
                href="https://www.facebook.com/mena.ehab.9026/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 text-[#ABB2BF]">
          Copyright 2025 MENA. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
