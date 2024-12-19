import Aboutus from "./Aboutus";
import Register from "./Register";
import VideoSection from "./VideoSection";

const Info = () => {
  return (
    <div className="relative w-full bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#D9D9D9] w-10 h-[1200px] absolute z-1 top-0"></div>
        <div className="z-40">
        <Aboutus/>
        </div>
        <div className="z-10 flex w-full justify-center items-center">
        <VideoSection />
        </div>
        <div className="z-10">
        <Register />
        </div>
      </div>
    </div>
  );
};
export default Info;
