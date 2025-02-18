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
    <motion.div
      className="flex flex-col items-center bg-white rounded-lg md:rounded-xl shadow-2xl w-[90%] md:w-[80%] h-full mx-auto mt-6 mb-6 md:mt-6 p-4 md:p-6"
      id="registration"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src="/assets/Head.png"
        alt="Pitchfest Banner"
        className="w-full h-1/2 rounded-lg md:rounded-xl shadow-lg object-cover "
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{once:true}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="flex flex-col md:flex-row items-center md:mt-6 w-full gap-6 h-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/assets/Register.png"
            alt="Register Now"
            className="w-40 md:w-full rounded-lg object-contain hidden md:block"
          />
        </motion.div>
        <motion.div
          className="bg-yellow-background p-6 rounded-lg shadow-lg w-full md:w-2/3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-lg md:text-2xl font-bold text-black mb-2">
            Ready to Take Your Startup to the Next Level?
          </h1>
          <p className="text-black text-sm md:text-lg mb-4">
            Don't miss out on this incredible opportunity to showcase your
            innovation, connect with industry leaders, and secure funding for
            your startup. PitchFest 2025 is your chance to shine in front of top
            investors and mentors.
          </p>

          <h1 className="text-lg md:text-2xl font-bold text-black mb-2">
            Register Now and Get Ready to Pitch!
          </h1>
          <p className="text-black text-sm md:text-lg mb-4">
            Take the first step towards transforming your idea into a thriving
            business. Click the button below to start your registration process.
          </p>
          <motion.button
            className="bg-white font-semibold px-4 py-2 text-[#FCC15A] text-sm md:text-lg flex items-center shadow-lg rounded-md transition-transform hover:scale-105"
            onClick={redirect}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Registrations Closed
            <motion.span
              className="ml-2"
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <ChevronsRight />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Register;