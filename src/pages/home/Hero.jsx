import { CircleGrid } from "react-awesome-shapes";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const fadeContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeButton = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
};
function Hero() {
  return (
    <div className="max-w-[1240px] px-4 mx-auto text-center h-[90vh] flex-col flex items-center justify-center mb-4">
      <CircleGrid
        className="hidden animation-shape sm:block"
        position="absolute"
        color="#ABB2BF"
        right="30px"
        bottom="20px"
        size="175px"
        zIndex={2}
      />
      <div className="topblur"></div>
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        animate="show"
        className="hero-section"
      >
        <motion.h3
          variants={fadeItem}
          className="text-3xl font-bold text-white sm:text-5xl"
        >
          Hey, I'm
        </motion.h3>
        <motion.h1
          variants={fadeItem}
          className="text-5xl font-[900] text-primary mt-8 mb-10 sm:text-7xl"
        >
          Mena Ehab
        </motion.h1>
        <motion.h4
          variants={fadeItem}
          className="mb-8 text-lg text-secondary sm:text-2xl"
        >
          <span className="text-primary">Full-Stack</span> Developer
          specializing in <span className="text-primary">Laravel</span> and{" "}
          <span className="text-primary">React</span>
        </motion.h4>
      </motion.div>
      <CircleGrid
        className="animation-shape"
        position="absolute"
        left="40px"
        top="30px"
        color="#ABB2BF"
        size="125px"
        zIndex={2}
      />
      <div className="rightblur"></div>
      <motion.div
        variants={fadeContainer}
        initial="hidden"
        animate="show"
        className="hero-section"
      >
        <motion.button
          variants={fadeButton}
          className="px-8 py-3 text-white transition duration-300 ease-in-out border cursor-pointer bg-dark hover:bg-primary border-primary"
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Contact Me!!
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
