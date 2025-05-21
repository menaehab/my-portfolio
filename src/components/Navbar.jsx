import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -50
        });
      }, 100);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50
      });
    }
  };

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "works", link: "/project" },
    { id: 3, text: "contact", link: "#contact" }
  ];

  return (
    <div className="bg-[#282C33] flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-white">MENA</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) =>
          item.link.startsWith("#") ? (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.link.substring(1))}
              className="p-4 text-[#ABB2BF] m-1 cursor-pointer duration-300 hover:text-white"
            >
              <span className="text-[#FC0C13] mr-1">#</span>
              {item.text}
            </li>
          ) : (
            <RouterLink to={item.link} key={item.id}>
              <li className="p-4 text-[#ABB2BF] m-1 cursor-pointer duration-300 hover:text-white">
                <span className="text-[#FC0C13] mr-1">#</span>
                {item.text}
              </li>
            </RouterLink>
          )
        )}
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
        <h1 className="w-full text-3xl font-bold text-[#FC0C13] m-4">MENA</h1>
        {navItems.map((item) =>
          item.link.startsWith("#") ? (
            <li
              key={item.id}
              onClick={() => {
                setNav(false);
                scrollToSection(item.link.substring(1));
              }}
              className="p-4 text-[#ABB2BF] duration-300 hover:text-white cursor-pointer"
            >
              <span className="text-[#FC0C13] mr-1">#</span>
              {item.text}
            </li>
          ) : (
            <RouterLink
              to={item.link}
              key={item.id}
              onClick={() => setNav(false)}
            >
              <li className="p-4 text-[#ABB2BF] duration-300 hover:text-white cursor-pointer">
                <span className="text-[#FC0C13] mr-1">#</span>
                {item.text}
              </li>
            </RouterLink>
          )
        )}

        <div className="text-[#ABB2BF] flex justify-center gap-4 text-2xl absolute bottom-8 left-0 w-full">
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
      <div className="rounded-dashes"></div>
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
