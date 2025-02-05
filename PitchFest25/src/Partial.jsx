import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import Carousal from "./Carousal";

import LeadAngels from "/assets/LeadAngels.png";
import FluidVentures from "/assets/FluidVentures.png";
import Ipv from "/assets/IPV.png";
import Anthill from "/assets/Anthill.png";
import She from "/assets/She.png";
import PedalStart from "/assets/PedalStart.png";
import Pontaq from "/assets/Pontaq.png";
import AHfund from "/assets/AHFund.png";
import CampusAmgels from "/assets/CampusAngels.png";
import FundingSimplified from "/assets/FundingSimplified.png";
import Faad from "/assets/Faad.png";
import VentureCatalysts from "/assets/VentureCatalysts.png";
import IndiaHealthcareAngels from "/assets/IndianHealthcareAngels.png";
import Sanchiconnect from "/assets/Sanchiconnect.png";
import CampusFund from "/assets/CampusFund.png";
import Realtime from "/assets/Realtime.png";
import IndianAngelsNetwork from "/assets/IndianAngels.png";

import Wadwani from "/assets/Wadhwani.png";
import Tie from "/assets/TIE.png";
import Zoho from "/assets/Zoho.png";

import StartUpIndia from "/assets/StartupIndia.png";
import MeitY from "/assets/MeitY.png";
import Manthan from "/assets/Manthan.png";
import Aim from "/assets/AIM.png";
import Cundmial from "/assets/Cundmial.png";
import Enactus from "/assets/Enactus.png";
import Isra from "/assets/ISRA.png";
const Logos = [
  { id: 1, img: LeadAngels },
  { id: 2, img: FluidVentures },
  { id: 3, img: Sanchiconnect },
  { id: 4, img: CampusFund },
  { id: 5, img: VentureCatalysts },
  { id: 6, img: Realtime },
  { id: 7, img: IndianAngelsNetwork },
  { id: 8, img: IndiaHealthcareAngels },
  { id: 9, img: Ipv },
  { id: 10, img: Faad },
  { id: 11, img: FundingSimplified },
  { id: 12, img: CampusAmgels },
  { id: 13, img: AHfund },
  { id: 14, img: Pontaq },
  { id: 15, img: She },
  { id: 16, img: PedalStart },
  { id: 17, img: Anthill },
];
const Logos1 = [
  { id: 1, img: Wadwani },
  { id: 2, img: Tie },
  { id: 3, img: Zoho },
];

const Logos2 = [
  { id: 1, img: StartUpIndia },
  { id: 2, img: MeitY },
  { id: 3, img: Manthan },
  { id: 4, img: Aim },
  { id: 5, img: Cundmial },
  { id: 6, img: Enactus },
  { id: 7, img: Isra },
];
const Partial = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl p-2 mx-4 my-8 sm:m-10 lg:m-28">
      <Carousal text={"Partners"} Logos={Logos} />
      <Carousal text={"Eco System Partners"} Logos={Logos1} />
      <Carousal text={"Supporting Partners"} Logos={Logos2} />
      <div className="bg-custom-gradient w-full rounded-b-lg px-6 py-4">
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
      </div>
  );
};

export default Partial;
