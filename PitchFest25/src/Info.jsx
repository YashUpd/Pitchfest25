import Aboutus from "./Aboutus";
import Register from "./Register";
import VideoSection from "./VideoSection";

const Info = () => {
  return (
    <div className=" w-full bg-white flex flex-col justify-center items-center bg-custom-gradient">
      <div className="flex flex-col justify-center items-center gap-10">
        <Aboutus/>
        <VideoSection />
        <Register />
      </div>
    </div>
  );
};
export default Info;
