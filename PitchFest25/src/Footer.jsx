import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
const Footer = () =>{
    return(
        <div className="bg-custom-gradient-darker w-full rounded-b-lg px-6 py-4 mt-20">
        <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-start sm:grid sm:grid-cols-4 gap-6 sm:gap-4">
          <a
            className="flex justify-center items-center hover:scale-110 transition-transform duration-200"
            href="https://www.instagram.com/acicbmu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span className="hidden sm:inline text-sm sm:text-base lg:text-lg text-white px-3 whitespace-nowrap">
              acicbmu
            </span>
          </a>
          <a
            className="flex justify-center items-center hover:scale-110 transition-transform duration-200"
            href="https://www.linkedin.com/company/acic-bmu-foundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span className="hidden sm:inline text-sm sm:text-base lg:text-lg text-white px-3 whitespace-nowrap">
              ACIC-BMU Foundation
            </span>
          </a>
          <a
            className="flex justify-center items-center hover:scale-110 transition-transform duration-200"
            href="https://www.acic-bmu.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoGlobeOutline className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span className="hidden sm:inline text-sm sm:text-base lg:text-lg text-white px-3 whitespace-nowrap">
              acic-bmu.in
            </span>
          </a>
          <a
            className="flex justify-center items-center hover:scale-110 transition-transform duration-200"
            href="mailto:pitchfest@bmu.edu.in"
          >
            <IoMdMail className="text-white w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
            <span className="hidden sm:inline text-sm sm:text-base lg:text-lg text-white px-3 whitespace-nowrap">
              pitchfest@bmu.edu.in
            </span>
          </a>
        </div>
      </div>
    )
}
export default Footer;