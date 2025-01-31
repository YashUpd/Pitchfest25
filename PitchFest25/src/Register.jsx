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
    <div className="flex justify-center items-center bg-white rounded-lg md:rounded-xl shadow-2xl mt-6 mb-6 md:mt-6 w-[90%] md:w-[80%]">
      <div className="flex flex-col justify-center items-center p-2 md:p-4 gap-2 md:gap-4">
        <div className="w-full flex justify-center ">
          <img
            src="/assets/Head.png"
            className="w-full rounded-md object-cover"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="w-[40%] md:w-[45%] h-full object-cover p-2">
            <img
              src="/assets/Register.png"
              className="w-full md:w-full object-cover md:h-full sm:object-contain md:object-scale-down"
            />
          </div>
          <div className="flex flex-col justify-around gap-1 md:gap-2 py-2 md:p-2 bg-yellow-background w-2/3 rounded-lg">
            <div className="flex flex-col gap-0.5 md:gap-1 px-2 md:mb-2 py-2">
            <h1 className="text-[12px] sm:text-lg md:text-2xl font-bold text-black md:py-2 md:mb-1">
              Ready to Take Your Startup to the Next Level?
            </h1>
            <p className="text-black text-justify text-[10px] sm:text-xs md:text-lg md:mb-1 mb-0.5">
              Don't miss out on this incredible opportunity to showcase your
              innovation, connect with industry leaders, and secure funding for
              your startup. PitchFest 2025 is your chance to shine in front of
              top investors and mentors.
            </p>
            </div>
            <div className="flex flex-col gap-0.5 md:gap-2 px-2">
            <h1 className="text-[12px] sm:text-lg md:text-2xl font-bold text-black md:py-2">
              Register Now and Get Ready to Pitch!
            </h1>
            <p className="text-black text-justify text-[10px] sm:text-xs md:text-lg">
              Take the first step towards transforming your idea into a thriving
              business. Click the button below to start your registration
              process.
            </p>
            <div className="my-2 md:my-4">
            <button
              className="bg-white font-normal py-0 px-0.5 md:px-2 md:py-1 text-[#FCC15A] text-[10px] sm:text-xs md:text-base flex justify-start items-center shadow-xl rounded-sm"
              onClick={redirect}
            >
              Registrations Closed
              <motion.span
              className="md:pt-0.5"
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
        </div>
      </div>
  );
};
export default Register;
