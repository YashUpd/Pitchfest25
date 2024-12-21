import { motion } from "motion/react";
import { ChevronsRight } from "lucide-react";
const Register = () => {
    const redirect = ()=>{
        window.open('https://unstop.com/competitions/propel-pitchfest25-bml-munjal-university-bmu-gurgaon-1208306','_blank');
    }
  return (
    <div className="flex justify-center items-center bg-white rounded-xl shadow-2xl md:m-28 w-[80%]">
        <div className="flex flex-col justify-center items-center p-4 gap-4">
            <div className="w-full">
                <img src='/assets/Head.png'
                className="w-full rounded-xl object-cover"/>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="md:w-1/3 h-auto object-cover">
                <img src="/assets/Register.png"
                className="w-[100px] md:w-full h-auto"/>
                </div>
                <div className=" p-4 bg-[#FFD42E8A] md:w-2/3 rounded-xl">
                    <h1 className="font-bold text-xl pb-4">Ready to Take Your Startup to the Next Level?</h1>
                    <p className="pb-4">Don't miss out on this incredible opportunity to showcase your innovation, connect with industry leaders, and secure funding for your startup. PitchFest 2025 is your chance to shine in front of top investors and mentors.</p>
                    <h1 className="font-bold text-xl pb-4">Register Now and Get Ready to Pitch!</h1>
                    <p className="pb-4">Take the first step towards transforming your idea into a thriving business. Click the button below to start your registration process.</p>
                    <button className="bg-white font-normal py-1 px-3 text-[#FCC15A] text-lg flex justify-start items-center shadow-xl rounded-lg"
                    onClick={redirect}>
              Register Here
            <motion.span
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
                </div>
            </div>

        </div>
      
    </div>
  );
};
export default Register;
