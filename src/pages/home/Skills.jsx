import { motion } from "framer-motion";

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

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-[1240px] mx-auto px-4 mb-20"
    >
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
      <div className="mb-20 projects-title">
        <h1 className="flex items-center text-4xl text-white">
          <span className="text-primary">#</span>My-Skills
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "30%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-[1px] ml-4 bg-primary hidden md:block"
            style={{ minWidth: 0 }}
          />
        </h1>
      </div>
      <div className="border-y border-l border-primary w-16 h-28 absolute right-0 top-[190%] hidden md:block"></div>
      <div class="hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="relative">
          <div className="absolute top-10 left-[32%] w-20 h-20 border border-white hover:bg-white transition duration-300 ease-in-out"></div>
          <div className="absolute w-32 h-32 border top-40 left-60 border-primary"></div>
          <div className="absolute w-24 h-24 border top-70 left-30 border-primary"></div>
          <div className="absolute top-[-20px] left-[55%] w-40 h-40 border border-primary"></div>
          <div className="absolute top-56 left-[450px] w-20 h-20 border border-white hover:bg-white transition duration-300 ease-in-out"></div>
          <div className="absolute transition duration-300 ease-in-out border border-white top-32 left-10 w-28 h-28 hover:bg-white"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div className="">
            <div className="mb-4 border shadow max-w-72 border-gray">
              <h5>
                <h3 className="py-3 mb-2 text-xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                  Languages
                </h3>
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                <span className="flex flex-wrap justify-center">C C++ PHP</span>
                <span className="flex flex-wrap justify-center">Python JS</span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="mb-4 border shadow max-w-72 border-gray">
              <h5>
                <h3 className="py-3 mb-2 text-xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                  Back-End
                </h3>
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                <span className="flex flex-wrap justify-center">Laravel</span>
              </p>
            </div>
            <div className="mb-4 border shadow max-w-72 border-gray">
              <h5>
                <h3 className="py-3 mb-2 text-xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                  Front-End
                </h3>
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
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
            <div className="mb-4 border shadow max-w-72 border-gray">
              <h5>
                <h3 className="py-3 mb-2 text-xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                  Databases
                </h3>
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                <span className="flex flex-wrap justify-center">MySQl</span>
              </p>
            </div>
            <div className="mb-4 border shadow max-w-72 border-gray">
              <h5>
                <h3 className="py-3 mb-2 text-xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                  Others
                </h3>
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
                <span className="flex flex-wrap justify-center">HTML CSS</span>
                <span className="flex flex-wrap justify-center">EJS</span>
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
              <h5 className="py-3 mb-2 text-2xl font-bold tracking-tight text-center text-white border-b-2 border-secondary">
                {skill.category}
              </h5>
              <p className="px-2 mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
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
    </motion.div>
  );
}

export default Skills;
