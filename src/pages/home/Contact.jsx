import { IoMail } from "react-icons/io5";
import { CircleGrid } from "react-awesome-shapes/dist/shapes/circlegrid";
import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="rightblur"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1240px] mx-auto px-4 mb-56 relative"
        id="contact"
      >
        <div className="mb-20 projects-title">
          <h1 className="flex items-center text-4xl text-white">
            <span className="text-primary">#</span>Contact
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1px] ml-4 bg-primary hidden md:block"
              style={{ minWidth: 0 }}
            />
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-lg text-secondary">
            I’m interested in freelance opportunities. However, if you have
            other requests or questions, don’t hesitate to contact me.
          </p>
          <div className="max-w-sm p-4 mx-auto border border-secondary">
            <h2 className="mb-3 text-xl text-center text-white">
              Message me here
            </h2>
            <div className="flex items-center justify-center">
              <IoMail className="mr-2 text-3xl text-secondary" />
              <a
                href="mailto:menaehab7996@gmail.com"
                className="text-secondary"
              >
                menaehab7996@gmail.com
              </a>
            </div>
          </div>
        </div>
        <CircleGrid
          className="hidden animation-shape md:block"
          position="absolute"
          color="#ABB2BF"
          right="40px"
          top="-10px"
          size="100px"
          zIndex={2}
        />
        <div className="w-20 h-20 border hidden lg:block border-white hover:bg-white transition ease-in-out absolute top-1 right-[500px]"></div>
        <div className="w-16 h-16 border hidden lg:block border-primary absolute right-[580px]"></div>
        <div className="w-12 h-12 border hidden lg:block border-white hover:bg-white transition ease-in-out absolute top-64 right-[180px]"></div>
      </motion.div>
    </>
  );
}

export default Contact;
