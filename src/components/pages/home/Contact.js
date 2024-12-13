import React from "react";
import { IoMail } from "react-icons/io5";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";

function Contact() {
  return (
    <div className="container mx-auto px-4 mb-56 relative" id="contact">
      <div className="projects-title mb-20">
        <h1 className="text-white text-4xl flex items-center">
          <span className="text-primary">#</span>Contact
          <hr className="w-[20%] h-1 ml-4 border-3 border-primary hidden md:block" />
        </h1>
      </div>
      <div className="rightblur"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p className="text-secondary text-lg">
          I’m interested in freelance opportunities. However, if you have other
          requests or questions, don’t hesitate to contact me.
        </p>
        <div className="border border-secondary max-w-sm mx-auto p-4">
          <h2 className="text-xl text-center text-white mb-3">
            Message me here
          </h2>
          <div className="flex justify-center items-center">
            <IoMail className="text-3xl text-secondary mr-2" />
            <a href="mailto:menaehab7996@gmail.com" className="text-secondary">
              menaehab7996@gmail.com
            </a>
          </div>
        </div>
      </div>

      <CircleGrid
        className="animation-shape hidden md:block"
        position="absolute"
        color="#ABB2BF"
        right="40px"
        top="0px"
        size="100px"
        zIndex={2}
      />
      <div className="w-20 h-20 border hidden lg:block border-white hover:bg-white transition ease-in-out absolute top-1 right-[500px]"></div>
      <div className="w-16 h-16 border hidden lg:block border-primary absolute right-[580px]"></div>
      <div className="w-12 h-12 border hidden lg:block border-white hover:bg-white transition ease-in-out absolute top-64 right-[180px]"></div>
    </div>
  );
}

export default Contact;
