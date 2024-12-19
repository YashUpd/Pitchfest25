import { motion } from 'motion/react';
import Timer from './Timer';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{opacity:0.1}} 
        transition={{ duration: 1 }}
      >
        <img src='../public/assets/logo.png' alt="Logo" className="h-[350px]" />
      </motion.div>
      <motion.div
        className="flex flex-col justify-center items-center text-center align-middle text-2xl text-white"
        initial={{ opacity: 0, y:0 }}  
        animate={{ opacity: 1, y: -250 }} 
        transition={{ duration: 2, ease: 'easeInOut', type:'spring' }} 
      >
        <p>Funding Opportunities*</p>
        <p>
          <span className="text-[#FCC15A]">USD 1 Million </span>fund chest of top Investors
        </p>
        <p>
          and upto <span className="text-[#FCC15A]">Rs 50 Lacs</span> under SISFD
        </p>
        <p>
          upto <span className="text-[#FCC15A]">Rs 1 Cr</span> under GENESIS
        </p>
      </motion.div>
      <motion.div className='flex flex-col justify-center items-center text-center'
       initial={{ opacity: 0, y:0 }}  
       animate={{ opacity: 1, y: -200}} 
       transition={{ duration:2, ease: 'easeInOut', type:'spring', delay: 2 }}>
        <h1 className='font-bold text-3xl text-white pb-4'>Are You Ready?</h1>
        <Timer/>
      </motion.div>
    </div>
  );
};

export default Hero;
