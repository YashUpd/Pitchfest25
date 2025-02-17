import Textbox from "./Textbox";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Categories = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex justify-center w-[90%] md:w-[80%] max-w-8xl mx-auto"
    >
      <div className="bg-white rounded-lg md:rounded-2xl w-full">
        <div className="flex flex-col md:p-4 p-2">
          <motion.h1
            variants={itemVariants}
            className="text-center text-2xl md:text-3xl font-bold text-blue-text mb-6"
          >
            Two Tracks
          </motion.h1>
          <div className="flex justify-center md:gap-10 gap-2 items-center">
            <motion.div
              variants={itemVariants}
              className="bg-custom-gradient flex justify-center w-full md:w-80 p-2 md:p-4 rounded-full"
            >
              <img
                src="/assets/top1.png"
                className=" w-full max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] xl:max-w-[6rem] object-contain"
              />
            </motion.div>
            <Textbox text={"Revenue"} />
            <Textbox text={"Pre-Revenue"} />
            <motion.div
              variants={itemVariants}
              className="bg-custom-gradient flex justify-center w-full md:w-80 p-2 md:p-4 rounded-full"
            >
              <img
                src="/assets/top2.png"
                className="w-full max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] xl:max-w-[6rem] object-contain"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 p-4 mb-10 md:mb-20">
          <motion.h1
            variants={itemVariants}
            className="text-center text-2xl md:text-3xl font-bold text-blue-text pb-2"
          >
            Focus Areas
          </motion.h1>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12"
          >
            <div className="flex flex-col items-center">
              <motion.div
                variants={itemVariants}
                className="bg-custom-gradient p-6 rounded-full w-full flex justify-center"
              >
                <img
                  src="/assets/women_funded.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Women <br /> Founded
              </motion.h1>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img
                  src="/assets/smart.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Smart <br /> Manufacturing
              </motion.h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img
                  src="/assets/Sustainable.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Sustainability <br />& Social Impact
              </motion.h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img
                  src="/assets/Medical.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Medical <br /> Devices
              </motion.h1>
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mt-4 sm:mt-4 xl:mt-4"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient  rounded-full w-full p-6 md:p-6">
                <img
                  src="/assets/clean.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Clean Energy
              </motion.h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient rounded-full w-full flex justify-center p-6 md:p-6">
                <img
                  src="/assets/deep.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1 "
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Deep Tech
              </motion.h1>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center self-center mx-auto col-span-2 md:col-span-1"
            >
              <motion.div
              variants={itemVariants}
               className="bg-custom-gradient p-6 md:p-6 rounded-full w-full">
                <img
                  src="/assets/Mobility.png"
                  className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-center text-sm md:text-base mt-1 font-medium"
              >
                Mobility
              </motion.h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Categories;
