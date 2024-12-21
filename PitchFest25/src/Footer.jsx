import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-[#144C65] flex justify-evenly items-center w-full p-4">
      <a
        className="flex justify-center items-center"
        href="https://www.instagram.com/acicbmu/"
      >
        <FaInstagram color="white" size={40} />
        <span className="text-lg text-white px-2">acicbmu</span>
      </a>
      <a
        className="flex justify-center items-center"
        href="https://www.linkedin.com/company/acic-bmu-foundation/"
      >
        <FaLinkedin color="white" size={40} />
        <span className="text-lg text-white px-2">ACIC-BMU Foundation</span>
      </a>
      <a
        className="flex justify-center items-center"
        href="https://www.acic-bmu.in/"
      >
        <IoGlobeOutline color="white" size={40} />
        <span className="text-lg text-white px-2">acic-bmu.in</span>
      </a>
      <a
        className="flex justify-center items-center"
        href="mailto:pitchfest@bmu.edu.in"
      >
        <IoMdMail color="white" size={40} />
        <span className="text-lg text-white px-2">pitchfest@bmu.edu.in</span>
      </a>
    </div>
  );
};
export default Footer;
