import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Skills from "../home/Skills";
function AboutPage() {
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

  const skills = [
    {
      category: "Languages",
      items: ["C C++", "PHP", "Python", "JS"]
    },
    {
      category: "Back-End",
      items: ["Laravel", "Django"]
    },
    {
      category: "Front-End",
      items: ["Bootstrap", "React", "Tailwind CSS"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Others",
      items: ["HTML CSS", "EJS", "Git GitHub"]
    }
  ];

  return (
    <>
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="topblur"></div>
        <div className="absolute border border-primary w-24 h-24 right-48 hidden md:block"></div>
        <div className="absolute border border-white w-16 h-16 right-80 top-32 hidden md:block hover:bg-white transition duration-300 ease-in-out"></div>
        <div className="absolute border border-white w-16 h-16 right-96 top-56 hidden md:block hover:bg-white transition duration-300 ease-in-out"></div>
        <div className="absolute border border-primary w-20 h-20 top-24 right-[420px] hidden md:block"></div>
        <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[50%]"></div>
        <div className="mt-24 mb-32">
          <h1 className="text-white text-4xl flex items-center ">
            <span className="text-primary">/</span>about-me
          </h1>
          <div className="border border-primary w-16 h-28 absolute hidden md:block red-sqaure top-[80%] left-[-10px]"></div>
          <div className="border border-primary w-16 h-28 absolute hidden md:block red-sqaure top-[145%] left-[-10px]"></div>

          <p className="text-secondary mt-4">Who am I?</p>
        </div>
        <div className="flex flex-row lg:flex-row items-center space-x-8 lg:space-x-8 mb-32">
          <div className="text-xl text-secondary w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="mb-4">
              Hello, I'm <strong>Mena</strong>!
            </p>
            <div className="rightblur"></div>

            <p className="mb-4">
              I’m a <strong>backend developer</strong> specializing in{" "}
              <strong>PHP</strong> and <strong>Laravel</strong>, with experience
              in building dynamic web applications.
            </p>
            <p className="mb-4">
              I previously worked with <strong>Django</strong>, which
              strengthened and deepened my understanding of web architecture.
            </p>
            <p className="mb-4">
              I also have a strong interest in{" "}
              <strong>front-end development</strong>, particularly using{" "}
              <strong>React</strong>.
            </p>
            <p className="mb-8">
              Additionally, I’m an active contestant and mentor in the{" "}
              <strong>South Valley National University</strong>, where I
              continue to improve my coding skills and contribute to the{" "}
              <strong>ICPC</strong> community.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-3 py-2 text-xl font-medium text-white border-2 border-primary hover:bg-primary transition duration-300 ease-in-out cursor-pointer"
            >
              Read More
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
            </Link>
          </div>
          <div className="w-full lg:w-1/2 text-sm md:text-md hidden md:block border border-primary rounded shadow-md shadow-primary">
            <SyntaxHighlighter
              language="php"
              style={github}
              customStyle={{
                lineHeight: "1.8",
                borderRadius: "8px",
                backgroundColor: "#000000",
                height: "360px"
              }}
              wrapLongLines={true}
              lineProps={{
                style: {
                  color: "#ffffff"
                }
              }}
            >
              {text}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="mb-32">
          <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
          <div className="projects-title mb-20">
            <h1 className="text-white text-4xl flex items-center">
              <span className="text-primary">#</span>My-Skills
            </h1>
          </div>
          <div class="hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="relative">
              <div className="absolute top-10 left-[32%] w-20 h-20 border border-white hover:bg-white transition duration-300 ease-in-out"></div>
              <div className="absolute top-40 left-60 w-32 h-32 border border-primary"></div>
              <div className="absolute top-70 left-30 w-24 h-24 border border-primary"></div>
              <div className="absolute top-[-20px] left-[55%] w-40 h-40 border border-primary"></div>
              <div className="absolute top-56 left-[450px] w-20 h-20 border border-white hover:bg-white transition duration-300 ease-in-out"></div>
              <div className="absolute top-32 left-10 w-28 h-28 border border-white hover:bg-white transition duration-300 ease-in-out"></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div className="">
                <div className="max-w-72 border border-gray shadow mb-4">
                  <h3>
                    <h5 className="mb-2 py-3 text-center text-xl font-bold tracking-tight text-white border-b-2 border-secondary">
                      Languages
                    </h5>
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    <span className="flex flex-wrap justify-center">
                      C C++ PHP
                    </span>
                    <span className="flex flex-wrap justify-center">
                      Python JS
                    </span>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="max-w-72 border border-gray shadow mb-4">
                  <h3>
                    <h5 className="mb-2 py-3 text-center text-xl font-bold tracking-tight text-white border-b-2 border-secondary">
                      Back-End
                    </h5>
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    <span className="flex flex-wrap justify-center">
                      Laravel Django
                    </span>
                  </p>
                </div>
                <div className="max-w-72 border border-gray shadow mb-4">
                  <h3>
                    <h5 className="mb-2 py-3 text-center text-xl font-bold tracking-tight text-white border-b-2 border-secondary">
                      Front-End
                    </h5>
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    <span className="flex flex-wrap justify-center">
                      Bootstrap React
                    </span>
                    <span className="flex flex-wrap justify-center">
                      Tailwind css
                    </span>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="max-w-72 border border-gray shadow mb-4">
                  <h3>
                    <h5 className="mb-2 py-3 text-center text-xl font-bold tracking-tight text-white border-b-2 border-secondary">
                      Databases
                    </h5>
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    <span className="flex flex-wrap justify-center">MySQl</span>
                    <span className="flex flex-wrap justify-center">
                      PostgreSQL
                    </span>
                  </p>
                </div>
                <div className="max-w-72 border border-gray shadow mb-4">
                  <h3>
                    <h5 className="mb-2 py-3 text-center text-xl font-bold tracking-tight text-white border-b-2 border-secondary">
                      Others
                    </h5>
                  </h3>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    <span className="flex flex-wrap justify-center">
                      HTML CSS
                    </span>
                    <span className="flex flex-wrap justify-center">EJS</span>
                    <span className="flex flex-wrap justify-center">
                      Git Github
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="leftblur"></div>
          </div>
          <div className="block lg:hidden">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-[70%] border border-gray shadow mb-12 hover:translate-y-[-10px] transition duration-300 ease-in-out"
                >
                  <h5 className="mb-2 py-3 text-center text-2xl font-bold tracking-tight text-white border-b-2 border-secondary">
                    {skill.category}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400 text-center">
                    {skill.items.map((item, idx) => (
                      <span key={idx} className="flex flex-wrap justify-center">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
