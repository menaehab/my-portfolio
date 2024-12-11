import React from "react";

const skills = [
  {
    category: "Languages",
    items: ["C C++", "PHP", "Python", "Java-Script"]
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

function Skills() {
  return (
    <div className="container mx-auto px-4 mb-20">
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
      <div className="projects-title mb-20">
        <h1 className="text-white text-4xl flex items-center">
          <span className="text-primary">#</span>My Skills
          <hr className="w-1/3 h-1 ml-4 border-3  border-primary hidden md:block" />
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
                <span className="flex flex-wrap justify-center">C C++ PHP</span>
                <span className="flex flex-wrap justify-center">
                  Python Java-Script
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
                  HTML CSS EJS
                </span>
                <span className="flex flex-wrap justify-center">
                  Git Github
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="rightblur"></div>
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
  );
}

export default Skills;
