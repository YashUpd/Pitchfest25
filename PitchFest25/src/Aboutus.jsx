import { ChevronsRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Modal from "./Modal";
import { useState } from "react";

const Aboutus = () => {
  const [IsModalOpen,setIsModalOpen]=useState(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col md:flex-row justify-center items-center w-[80%] p-8 bg-white shadow-lg rounded-2xl border-white gap-4">
        <div className="w-1/3 rounded-xl">
          <img src="../public/assets/About.png" alt="About Us" className="w-full rounded-xl" />
        </div>
        <div className="w-2/3 bg-[#FFD42E8A] rounded-xl ">
          <h1 className="text-3xl font-bold  text-black px-4 py-2">About Us</h1>
          <p className=" text-black text-justify px-4 py-2">
            PitchFest 2025, hosted by BML Munjal University, is the ultimate
            launchpad for innovative startups to make their mark! Powered by
            ACIC-BMU | Propel, this thrilling event brings together bold
            entrepreneurs, visionary investors, and industry game-changers. It’s
            not just about pitching — it’s about unlocking massive
            opportunities, securing funding, and gaining invaluable mentorship.
            With a spotlight on fresh, disruptive ideas, PitchFest 2025 is your
            chance to connect, collaborate, and propel your startup to the next
            level in one of the most dynamic startup ecosystems around!
          </p>
          <div className="flex justify-start items-center px-4 py-2">
            <button className="bg-white font-normal py-1 px-3 text-[#FCC15A] text-lg flex justify-start items-center shadow-xl"
            onClick={openModal}>
              Read more
            <motion.span
            animate={{x:[0,6,0]}}
            transition={{
              duration:2,
              ease:"easeInOut",
              repeat:Infinity,
              repeatType:"loop"
            }}
            className="pt-1">
              <ChevronsRight/>
            </motion.span>
            </button>
            <AnimatePresence>
            {IsModalOpen && <Modal isOpen={IsModalOpen} onClose={closeModal} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
