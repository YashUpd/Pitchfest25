import { motion } from "motion/react";
import { ChevronsRight } from "lucide-react";
const Register = () => {
  const redirect = () => {
    window.open(
      "https://unstop.com/competitions/propel-pitchfest25-bml-munjal-university-bmu-gurgaon-1208306",
      "_blank"
    );
  };
  return (
    <div className="flex justify-center items-center bg-white rounded-xl shadow-2xl mt-6 mb-6 md:mt-6 w-[85%] md:w-[80%]">
      <div className="flex flex-col justify-center  items-center p-2 md:p-4 gap-2 md:gap-4">
        <div className="w-full flex justify-center">
          <img
            src="/assets/Head.png"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center md:items-stretch items-center w-full flex-grow">
          <div className="md:w-1/3 h-auto object-cover">
            <img
              src="/assets/Register.png"
              className="w-full h-40 md:w-full object-cover md:h-full sm:object-contain md:object-scale-down"
            />
          </div>
          <div className="p-1 md:p-2 bg-[#FFD42E8A] md:w-2/3 rounded-xl">
            <div className="flex flex-col mb-2 md:mb-4 px-2">
            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-black md:py-2 py-0.5 ">
              Ready to Take Your Startup to the Next Level?
            </h1>
            <p className="text-black text-justify text-xs sm:text-[12px] xl:text-xl mb-1 md:mb-2">
              Don't miss out on this incredible opportunity to showcase your
              innovation, connect with industry leaders, and secure funding for
              your startup. PitchFest 2025 is your chance to shine in front of
              top investors and mentors.
            </p>
            </div>
            <div className="flex flex-col mb-1 p-2">
            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold text-black py-2">
              Register Now and Get Ready to Pitch!
            </h1>
            <p className="text-black text-justify text-xs sm:text-[12px] xl:text-xl mb-2">
              Take the first step towards transforming your idea into a thriving
              business. Click the button below to start your registration
              process.
            </p>
            </div>
            <button
              className="bg-white font-normal py-1 md:px-3 px-2 text-[#FCC15A] text-base sm:text-lg flex justify-start items-center shadow-xl rounded-lg mx-1 md:mx-2 my-1"
              onClick={redirect}
            >
              Register Here
              <motion.span
              className="pt-1"
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <ChevronsRight />
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
