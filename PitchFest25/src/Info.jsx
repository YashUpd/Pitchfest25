import Aboutus from "./Aboutus";
import Partial from "./Partial";
import Register from "./Register";
import VideoSection from "./VideoSection";

const Info = () => {
  return (
    <div className="relative w-full bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <Aboutus/>
        <VideoSection />
        <Register />
      </div>
    </div>
  );
};
export default Info;
