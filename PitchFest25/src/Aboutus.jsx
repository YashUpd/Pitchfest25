import { ChevronsRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Modal from "./Modal";
import { useState } from "react";

const Aboutus = () => {
  const [IsModalOpen,setIsModalOpen]=useState(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex flex-col md:flex-row justify-center md:items-stretch w-[90%] rounded-lg md:rounded-xl md:w-[80%] md:p-2 bg-white gap-2 items-center mt-12 md:mb-20 md:mt-10 px-2 py-2">
        <div className="flex justify-center items-center md:w-1/3 w-full rounded-xl overflow-hidden bg-[#113B53]  px-4 md:p-0">
          <img src="/assets/About.png" alt="About Us" className="w-96 sm:w-full md:h-auto md:w-full  rounded-xl object-cover h-56" />
        </div>
        <div className="w-full md:w-2/3 bg-[#FFD42E8A] rounded-xl flex flex-col justify-around items-start md:px-4 md:py-2 px-3">
          <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-black py-2">About Us</h1>
          <p className="text-black text-justify text-xs sm:text-[12px] xl:text-xl ">
          Propel Pitchfest25, hosted by ACIC BMU - the incubator at BML Munjal University, is the ultimate launchpad for innovative startups to make their mark! This thrilling event brings together bold entrepreneurs, visionary investors, and industry game-changers. It’s not just about pitching — it’s about unlocking massive opportunities, securing funding, and gaining invaluable mentorship. With a spotlight on fresh, disruptive ideas, revenue and pre-revenue startup ideas come to pitch, making this a golden opportunity for founders at all stages. Propel Pitchfest25 is your chance to connect, collaborate, and propel your startup to the next level in one of the most dynamic startup ecosystems around!
          </p>
          <div className="flex justify-start items-center my-2 md:my-4 md:pt-3 py-2">
            <button className="bg-white font-normal py-1 px-4 text-[#FCC15A] text-base md:text-lg flex justify-start items-center shadow-xl rounded-md"
            onClick={openModal}>
              Read more
            <motion.span
            className="pt-1"
            animate={{x:[0,6,0]}}
            transition={{
              duration:2,
              ease:"easeInOut",
              repeat:Infinity,
              repeatType:"loop"
            }}
            >
              <ChevronsRight/>
            </motion.span>
            </button>
            <AnimatePresence>
            {IsModalOpen && <Modal isOpen={IsModalOpen} onClose={closeModal} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
  );
};
export default Aboutus;
