import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
const Partial = () => {
  return (
    <div className="flex justify-center items-center bg-white rounded-xl shadow-2xl mx-4 my-8 sm:m-10 lg:m-28">
      <div className="flex flex-col justify-center items-center p-2 gap-4">
        <div className="w-full">
          <img
            src="/assets/Partners2.jpg"
            className="w-full rounded-xl object-cover cursor-pointer pointer-events-none"
          />
        </div>
        <div className="bg-[#144C65] flex flex-col md:flex-row justify-around items-center w-full p-4 rounded-b-lg space-x-4 sm:space-x-8">
          <a
            className="flex justify-center items-center"
            href="https://www.instagram.com/acicbmu/"
          >
            <FaInstagram className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-2 whitespace-nowrap">acicbmu</span>
          </a>
          <a
            className="flex justify-center items-center"
            href="https://www.linkedin.com/company/acic-bmu-foundation/"
          >
            <FaLinkedin className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"/>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-2 whitespace-nowrap">ACIC-BMU Foundation</span>
          </a>
          <a
            className="flex justify-center items-center"
            href="https://www.acic-bmu.in/"
          >
            <IoGlobeOutline className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-2 whitespace-nowrap">acic-bmu.in</span>
          </a>
          <a
            className="flex justify-center items-center"
            href="mailto:pitchfest@bmu.edu.in"
          >
            <IoMdMail className="text-white w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"/>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white px-2 whitespace-nowrap">
              pitchfest@bmu.edu.in
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Partial;
