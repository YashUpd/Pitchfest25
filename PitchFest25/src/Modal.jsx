import { motion } from 'motion/react';
import {ChevronsRight} from 'lucide-react'
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
    const redirect = () =>{
        window.open('https://www.linkedin.com/company/acic-bmu-foundation/','_blank');
    }
  return (
    <motion.div
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
      onClick={onClose} 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-custom-gradient flex flex-col py-2 justify-center items-center rounded-lg w-[90%] md:w-80"
        onClick={(e) => e.stopPropagation()} 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <div className= " w-full flex justify-center items-center rounded-lg py-2">
          <img src='/assets/Modal.png' alt='Modal'
          className='w-72 bg-white rounded-xl'/>
        </div>
        <div className='flex flex-col justify-center items-start text-start gap-2 px-2 '>
          <h1 className='text-white font-bold text-lg md:text-xl'>ACIC-BMU|Propel</h1>
          <p className='text-white text-sm'>The ACIC-BMU Foundation, supported by Atal Innovation Mission (AIM), NITI Aayog, and BMU, focuses on promoting startups and innovators by providing resources, mentorship, and opportunities.</p>
          <p className='text-white text-sm pb-2'>Propel Pitchfest, hosted by ACIC-BMU, is our flagship platform where innovators present their ideas to encourage entrepreneurship and creativity, driving impactful solutions for the future.</p>
          <button className='bg-white text-[#126782] flex justify-center items-center px-2 rounded-md mb-2'
          onClick={redirect}>Visit Linkedin
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
