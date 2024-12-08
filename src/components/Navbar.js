import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "works" },
    { id: 3, text: "about" },
    { id: 4, text: "contact" }
  ];

  return (
    <div className="bg-dark flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-white">MENA</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 text-secondary m-1 cursor-pointer duration-300 hover:text-white"
          >
            <span className="text-primary mr-1">#</span>
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full z-50 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }`}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-primary m-4">MENA</h1>
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 text-secondary duration-300 hover:text-white cursor-pointer"
          >
            <span className="text-primary mr-1">#</span>
            {item.text}
          </li>
        ))}
        <div className="text-secondary flex justify-center gap-4 text-2xl relative top-80">
          <a
            href="https://github.com/menaehab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mena-ehab-262a4b290/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/mena.ehab.9026/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </ul>
      <div class="rounded-dashes"></div>
      <div className="hero-social-media">
        <a
          href="https://github.com/menaehab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mena-ehab-262a4b290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/mena.ehab.9026/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
