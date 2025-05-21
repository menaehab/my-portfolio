import { Link } from "react-router-dom";
import { CircleGrid } from "react-awesome-shapes";
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
    <div className="max-w-[1240px] mx-auto px-4 mb-20">
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[110%]"></div>
      <div className="projects-title mb-20">
        <h1 className="text-white text-4xl flex items-center">
          <span className="text-primary">#</span>Projects
          <hr className="w-1/2 h-1 ml-4 border-3  border-primary hidden md:block" />
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
        className="animation-shape hidden md:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        top="600px"
        size="100px"
        zIndex={2}
      />
      <CircleGrid
        className="animation-shape hidden min1650:block"
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
          className="text-white px-6 py-3 border border-primary hover:bg-primary transition duration-300 ease-in-out"
        >
          View All
        </Link>
      </div>
    </div>
  );
}

export default Projects;
