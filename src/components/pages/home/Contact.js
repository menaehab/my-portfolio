import React from "react";

function Contact() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
      <div className="projects-title mb-20">
        <h1 className="text-white text-4xl flex items-center">
          <span className="text-primary">#</span>Contact
          <hr className="w-[20%] h-1 ml-4 border-3 border-primary hidden md:block" />
        </h1>
      </div>
    </div>
  );
}

export default Contact;
