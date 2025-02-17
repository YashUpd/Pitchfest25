import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Carousal = ({ text, Logos, direction = "left", speed = 30 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
      className="flex flex-col justify-center items-center p-2 w-full mx-auto"
    >
      <div className="w-full bg-custom-gradient text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl p-4 rounded-t-lg text-yellow-text font-bold">
        {text}
      </div>
      <Marquee
        speed={speed}
        play={true}
        direction={direction}
        gradient={false}
        pauseOnHover={true}
        className="w-full py-4"
      >
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {[...Logos, ...Logos, ...Logos].map((Logo, index) => (
            <img
              key={`${Logo.id}-${index}`}
              src={Logo.img}
              className="w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto object-contain transition-transform duration-300 hover:scale-110"
              alt="Logo"
            />
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
};

export default Carousal;
