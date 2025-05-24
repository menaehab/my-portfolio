import { Link } from "react-router-dom";
import { CircleGrid } from "react-awesome-shapes";
import { motion } from "framer-motion";
import Card from "../../components/Card";
const ProjectsItems = [
  {
    id: 1,
    name: "Job Board",
    tech: "Laravel PHP JS MySQl",
    description:
      "A platform enabling employers to post jobs and candidates to apply seamlessly",
    link: "https://github.com/menaehab/Job-board"
  },
  {
    id: 2,
    name: "Blog Platform",
    tech: "Laravel PHP MySQl",
    description:
      "A dynamic platform for creating, sharing, and exploring engaging blog posts effortlessly",
    link: "https://github.com/menaehab/blog-app"
  },
  {
    id: 3,
    name: "Company Portfolio",
    tech: "React JS Bootstrap",
    description:
      "Building innovative, user-friendly React applications for exceptional digital experiences and business",
    link: "https://github.com/menaehab/business-co"
  }
];
function Projects() {
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
          <span className="text-primary">#</span>Projects
          <hr className="hidden w-1/2 h-1 ml-4 border-3 border-primary md:block" />
        </h1>
      </div>
      <div className="leftblur"></div>
      <div className="border border-primary w-16 h-28 absolute hidden md:block red-sqaure top-[140%] left-[-10px]"></div>
      <div className="flex flex-wrap justify-center gap-4">
        {ProjectsItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            tech={item.tech}
            name={item.name}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
      <CircleGrid
        className="hidden animation-shape md:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        top="600px"
        size="100px"
        zIndex={2}
      />
      <CircleGrid
        className="hidden animation-shape min1650:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        top="1000px"
        size="100px"
        zIndex={2}
      />
      <div className="flex justify-center">
        <Link
          to="/project"
          className="px-6 py-3 text-white transition duration-300 ease-in-out border border-primary hover:bg-primary"
        >
          View All
        </Link>
      </div>
    </motion.div>
  );
}

export default Projects;
