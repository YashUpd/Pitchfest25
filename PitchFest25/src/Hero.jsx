import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Timer from "./Timer";
import { useEffect, useState } from "react";

const Hero = () => {
  const [IsHidden, setIsHidden] = useState(false);
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [isMobile,setisMobile] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => {
    if(y>30){
      setIsHidden(true);
      setScrollAnimation(true);
    }
    else{
      setIsHidden(false);
      setScrollAnimation(false)
    }
  });
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center my-10 md:my-6">
      <motion.div
        initial={{ opacity: 1 }}
        animate={IsHidden ? "hidden" : "visible"}
        variants={{
          hidden: { opacity: 0.1 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
      >
        <img src="/assets/logo.png" alt="Logo" className="h-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] mx-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={scrollAnimation ? "show" : "hide"}
        variants={{
          hide: { opacity: 0, y: 0 },
          show: { opacity: 1, y:isMobile?-150:-300},
        }}
        transition={{ duration: 1, ease: "easeInOut", type: "spring", }}
        className="flex flex-col justify-center items-center text-center align-middle text-2xl text-white sm:[--up-to1:-150px]"
      >
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">Funding Opportunities*</p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <span className="text-[#FCC15A]">USD 1 Million </span>fund chest of
          top Investors
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          and upto <span className="text-[#FCC15A]">Rs 50 Lacs</span> under
          SISFD
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          upto <span className="text-[#FCC15A]">Rs 1 Cr</span> under GENESIS
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={scrollAnimation ? "show" : "hide"}
        variants={{
          hide: { opacity: 0, y: 0 },
          show: { opacity: 1, y:isMobile?-120:-250},
        }}
        transition={{ duration: 2, ease: "easeInOut", type: "spring",}}
        className="flex flex-col justify-center items-center text-center max-sm:[--up-to2:-125px]"
      >
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white pb-4">Are You Ready?</h1>
        <Timer />
      </motion.div>
    </div>
  );
};

export default Hero;
