import { React, useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
function About() {
  const codeString = `<?php

    $name = "Mena Ehab";
    $age = 19;
    $education = "CS student at South Valley National University";
    $availability = true; // full_time || part_time
    $skills = [
        "Languages" => ["C", "C++", "PHP", "JS", "Python"],
        "Back-End" => ["Laravel", "Django"],
        "Front-End" => ["Bootstrap", "Tailwind", "React"],
    ];

?>`;

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < codeString.length) {
        setText((prevText) => prevText + codeString[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else if (index === codeString.length) {
        setTime(1000);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setTime(50);
        setText("");
        setIndex(0);
      }
    }, time);

    return () => clearInterval(interval);
  }, [index, codeString, time]);

  return (
    <div className="max-w-[1240px] mx-auto px-4 mb-20">
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
      <div className="projects-title mb-20">
        <h1 className="text-white text-4xl flex items-center">
          <span className="text-primary">#</span>About-Me
          <hr className="w-[40%] h-1 ml-4 border-3 border-primary hidden md:block" />
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center space-x-8 lg:space-x-8">
        <div className="text-xl text-secondary w-full lg:w-1/2 mb-8 lg:mb-0">
          <p className="mb-4">
            Hello, I'm <strong>Mena</strong>!
          </p>
          <p className="mb-4">
            I’m a <strong>backend developer</strong> specializing in{" "}
            <strong>PHP</strong> and <strong>Laravel</strong>, with experience
            in building dynamic web applications.
          </p>
          <p className="mb-4">
            I also have a strong interest in{" "}
            <strong>front-end development</strong>, particularly using{" "}
            <strong>React</strong>.
          </p>
          <div className="leftblur"></div>

          <p className="mb-8">
            Additionally, I’m an active contestant and mentor in the{" "}
            <strong>South Valley National University</strong>, where I continue
            to improve my coding skills and contribute to the{" "}
            <strong>ICPC</strong> community.
          </p>
          <div className="border border-primary w-16 h-28 absolute red-sqaure top-[220%] left-[-10px] hidden md:block"></div>
          <a
            href="mena_ehab.pdf"
            download="mena_ehab_cv.pdf"
            className="inline-flex items-center px-3 py-2 text-xl font-medium text-white border-2 border-primary hover:bg-primary transition duration-300 ease-in-out cursor-pointer"
          >
            Download CV
            <svg
              className="rtl:rotate-180 w-5 h-5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="border-y border-l border-primary w-16 h-28 absolute right-0 top-[260%] hidden md:block"></div>
        <div className="w-full lg:w-1/2 text-sm md:text-md hidden md:block border border-primary rounded shadow-md shadow-primary">
          <SyntaxHighlighter
            language="php"
            style={github}
            customStyle={{
              lineHeight: "1.8",
              borderRadius: "8px",
              backgroundColor: "#000000",
              height: "360px",
            }}
            wrapLongLines={true}
            lineProps={{
              style: {
                color: "#ffffff",
              },
            }}
          >
            {text}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default About;
