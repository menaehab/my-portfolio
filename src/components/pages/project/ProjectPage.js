import React, { useEffect } from "react";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";

function Work() {
  const completedProjects = [
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
      name: "portfolio",
      tech: "js React Tailwind",
      description:
        "Modern portfolio built with React and Tailwind, showcasing creativity effectively",
      link: "https://github.com/menaehab/my-portfolio"
    },
    {
      id: 4,
      name: "communication platform",
      tech: "Python Django SQLite3",
      description:
        "Dynamic communication platform using Django, enabling chat rooms and blog sharing seamlessly",
      link: "https://github.com/menaehab/communication-platform"
    },
    {
      id: 5,
      name: "library system",
      tech: "Python Django SQLite3",
      description:
        "Comprehensive library system managing books, users, lending, and returns efficiently with ease",
      link: "https://github.com/menaehab/library-system"
    }
  ];

  const smallProjects = [
    {
      id: 1,
      name: "Food Delivery",
      tech: "js React Bootstrap",
      description:
        "Food delivery app built with React and Bootstrap connecting customers with restaurant for quick, delicious meals",
      link: "https://github.com/menaehab/Food-Delivery"
    },
    {
      id: 2,
      name: "Company Portfolio",
      tech: "JS React Bootstrap",
      description:
        "Building innovative, user-friendly React applications for exceptional digital experiences and business",
      link: "https://github.com/menaehab/business-co"
    },
    {
      id: 3,
      name: "basic ecommerce",
      tech: "js React Bootstrap",
      description:
        "Basic e-commerce platform built with React, Redux, and Bootstrap for seamless shopping experience.",
      link: "https://github.com/menaehab/basic-ecommerce"
    },
    {
      id: 4,
      name: "certificates generator",
      tech: "HTML CSS PHP Boostrap",
      description:
        "Certificate generator built with HTML, CSS, PHP, and Bootstrap for customizable certificate creation",
      link: "https://github.com/menaehab/certificates-generator"
    },
    {
      id: 5,
      name: "Recipes app",
      tech: "HTML CSS JS",
      description:
        "Recipe app built with HTML, CSS, Bootstrap, JS, API integration for interactive recipe browsing",
      link: "https://github.com/menaehab/library-system"
    },
    {
      id: 6,
      name: "company website",
      tech: "PHP Laravel Mysql",
      description:
        "Company website with a Laravel-powered admin dashboard with multi language support",
      link: "https://github.com/menaehab/library-system"
    }
  ];

  const teamProjects = [
    {
      id: 1,
      name: "simple portfolio",
      tech: "JS React Bootstrap",
      description:
        "Collaborative portfolio project built with React and Bootstrap, showcasing creativity and teamwork effectively",
      link: "https://github.com/menaehab/React-simple-portfolio"
    },
    {
      id: 2,
      name: "E-commerce",
      tech: "HTML CSS JS Bootstrap",
      description:
        "Collaborative e-commerce project crafted with HTML, CSS, JavaScript, and Bootstrap",
      link: "https://github.com/menaehab/e-commerce"
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="topblur"></div>
      <CircleGrid
        className="animation-shape hidden md:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        bottom="210px"
        size="130px"
        zIndex={2}
      />
      <div className="mt-24 mb-32">
        <h1 className="text-white text-4xl flex items-center ">
          <span className="text-primary">/</span>projects
        </h1>
        <p className="text-secondary mt-4">List of my projects</p>
      </div>
      <div className="my-16">
        <div className="text-white text-4xl">
          <span className="text-primary">#</span>Completed-projects
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
        <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[150%]"></div>
        <div className="rightblur"></div>
        {completedProjects.map((item) => (
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
      <div className="my-16">
        <div className="text-white text-4xl">
          <span className="text-primary">#</span>small-projects
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center ">
        <div className="leftblur"></div>
        {smallProjects.map((item) => (
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
      <div className="border border-primary w-16 h-28 absolute hidden md:block red-sqaure top-[80%] left-[-10px]"></div>
      <div className="my-16">
        <div className="text-white text-4xl">
          <span className="text-primary">#</span>teamwork-projects
        </div>
      </div>
      <div className="border-y border-l border-primary w-16 h-28 absolute hidden md:block right-0 top-[250%]"></div>
      <div className="flex flex-wrap gap-4 justify-center ">
        <div className="border border-primary w-16 h-28 absolute hidden md:block red-sqaure top-[210%] left-[-10px]"></div>
        <div className="rightblur"></div>
        {teamProjects.map((item) => (
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
      <div className="my-32">
        <h1 className="text-white text-4xl flex justify-center items-center mb-8">
          <hr className="w-[20%] h-1 mr-4 border-3 border-primary hidden md:block" />
          Explore more of my projects
          <hr className="w-[20%] h-1 ml-4 border-3 border-primary hidden md:block" />
        </h1>
        <div className="leftblur"></div>
        <CircleGrid
          className="animation-shape hidden md:block"
          position="absolute"
          left="40px"
          top="1200px"
          color="#ABB2BF"
          size="125px"
          zIndex={2}
        />
        <div className="flex justify-center">
          <Link
            className="inline-flex items-center border-2 py-2 px-4 text-xl text-white border-primary hover:bg-primary transition duration-300 ease-in-out"
            to={"https://github.com/menaehab?tab=repositories"}
          >
            Click Me!!!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
