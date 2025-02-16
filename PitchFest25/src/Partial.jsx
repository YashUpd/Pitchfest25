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
  import Faad from "/assets/Faad.png";
  import VentureCatalysts from "/assets/VentureCatalysts.png";
  import IndiaHealthcareAngels from "/assets/IndianHealthcareAngels.png";
  import Sanchiconnect from "/assets/Sanchiconnect.png";
  import CampusFund from "/assets/CampusFund.png";
  import Realtime from "/assets/Realtime.png";
  import IndianAngelsNetwork from "/assets/IndianAngels.png";
  import FoxHog from "/assets/FoxHog.png";
  import RV from "/assets/RV.png";

  import Wadwani from "/assets/Wadhwani.png";
  import Tie from "/assets/TIE.png";
  import Zoho from "/assets/Zoho.png";
  import arthyan from "/assets/arthyan.png";
  import Headstart from "/assets/Headstart.png";
  import SMU from "/assets/SMU.png";

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
    { id: 11, img: FoxHog },
    { id: 12, img: CampusAmgels },
    { id: 13, img: AHfund },
    { id: 14, img: Pontaq },
    { id: 15, img: She },
    { id: 16, img: PedalStart },
    { id: 17, img: Anthill },
    { id: 18, img: RV },

  ];
  const Logos1 = [
    { id: 1, img: Wadwani },
    { id: 2, img: Tie },
    { id: 3, img: Zoho },
    { id: 4, img: arthyan },
    { id: 5, img: Headstart },
    { id: 6, img: SMU },

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
      <div className="flex flex-col bg-white w-[90%] md:w-[80%] max-w-8xl mx-auto rounded-lg md:rounded-xl">
        <Carousal
          text={"Partners"}
          Logos={Logos}
          speed={80}
          direction="left"
        />
        <Carousal
          text={"Eco System Partners"}
          Logos={Logos1}
          speed={30}
          direction="left"
        />
        <Carousal
          text={"Supporting Partners"}
          Logos={Logos2}
          speed={50}
          direction="left"
        />
      </div>
    );
  };
  
  export default Partial;