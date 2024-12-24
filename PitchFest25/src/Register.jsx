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
    <div className="flex justify-center items-center bg-white rounded-xl shadow-2xl mt-6 mb-6 md:mt-6 w-[90%] md:w-[80%]">
      <div className="flex flex-col justify-center  items-center p-2 md:p-4 gap-4">
        <div className="w-full">
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
          <div className=" p-4 bg-[#FFD42E8A] md:w-2/3 rounded-xl">
            <h1 className="text-xl md:text-2xl  font-bold text-black py-2 mb-4">
              Ready to Take Your Startup to the Next Level?
            </h1>
            <p className="text-black text-justify text-base md:text-lg l mb-4">
              Don't miss out on this incredible opportunity to showcase your
              innovation, connect with industry leaders, and secure funding for
              your startup. PitchFest 2025 is your chance to shine in front of
              top investors and mentors.
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-black py-2 mb-6">
              Register Now and Get Ready to Pitch!
            </h1>
            <p className="text-black text-justify text-base md:text-lg  pb-4">
              Take the first step towards transforming your idea into a thriving
              business. Click the button below to start your registration
              process.
            </p>
            <button
              className="bg-white font-normal py-1 px-3 text-[#FCC15A] text-lg flex justify-start items-center shadow-xl rounded-lg"
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
