import React from "react";
import {motion} from "motion/react"
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const VideoSection = () => {
  return (
    <div className="w-[95%] md:w-[80%] shadow-sm rounded-sm md:rounded-md mt-6 mb-6 md:mt-0">
      <motion.div 
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Video 1 */}
        <motion.div 
          className="flex flex-col bg-white rounded-lg md:rounded-2xl border shadow-2xl w-[95%] md:w-1/2 justify-center items-start"
          variants={fadeUpVariants}
        >
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full p-2 rounded-xl md:rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qhMDRrDf-bc?si=R5SSfvmizOrLP3X0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex gap-2 justify-center items-center px-3 pb-2">
            <img src="/assets/Youtube.png" className="w-[35px]" />
            <span className="text-black font-medium whitespace-nowrap">
              ACIC BMU | Propel Pitchfest23
            </span>
          </div>
        </motion.div>

        {/* Video 2 */}
        <motion.div 
          className="flex flex-col bg-white rounded-lg md:rounded-2xl border shadow-2xl w-[95%] md:w-1/2 justify-center items-start"
          variants={fadeUpVariants}
        >
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full p-2 rounded-xl md:rounded-3xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cyZU509rKSw?si=BLMN6qTEhe2VmBR7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex gap-2 justify-center items-center px-3 pb-2">
            <img src="/assets/Youtube.png" className="w-[35px]" />
            <span className="text-black font-medium whitespace-nowrap">
              ACIC BMU | Propel Pitchfest24
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VideoSection;