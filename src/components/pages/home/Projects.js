import React from "react";
import { Link } from "react-router-dom";
import { CircleGrid } from "react-awesome-shapes";

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
    <div className="container mx-auto px-4 mb-20">
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
          <div
            key={item.id}
            className="max-w-sm border border-gray shadow mb-12"
          >
            <p className="text-sm border-b-2 text-center border-secondary text-secondary p-2">
              {item.tech}
            </p>
            <Link to={item.link}>
              <h5 className="mb-2 py-3 text-center text-2xl font-bold tracking-tight text-white border-b-2 border-secondary">
                {item.name}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 px-2 dark:text-gray-400">
              {item.description}
            </p>
            <Link
              to={item.link}
              className="inline-flex items-center px-3 py-2 ml-2 mb-2 text-sm font-medium text-center text-white border-2 border-primary hover:bg-primary transition duration-300 ease-in-out"
            >
              GitHub
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        ))}
      </div>
      <CircleGrid
        className="animation-shape hidden md:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        top="550px"
        size="100px"
        zIndex={2}
      />
      <div className="flex justify-center">
        <Link className="text-white px-6 py-3 border border-primary hover:bg-primary transition duration-300 ease-in-out">
          View All
        </Link>
      </div>
    </div>
  );
}

export default Projects;
