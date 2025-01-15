import Images from "./images";
import Textbox from "./Textbox";
const Categories = () => {
  return (
    <div className="bg-white rounded-2xl w-[80%]">
      <div className="flex flex-col p-4">
        <h1 className="text-center text-3xl font-bold text-blue-text mb-6">
          Two Tracks
        </h1>
        <div className="flex justify-evenly gap-10 items-center">
          < img src={"/assets/top1.png"} 
          className="bg-custom-gradient p-4 rounded-full"/>
          <Textbox text={"Revenue"} />
          <Textbox text={"Pre-Revenue"} />
          <img src={"/assets/top2.png"} 
          className="bg-custom-gradient p-4 rounded-full"/>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 p-4 mb-20">
        <h1 className="text-center text-3xl font-bold text-blue-text pb-2">
          Focus Areas
        </h1>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col items-center">
            <Images img={"assets/women_funded.png"} />
            <h1 className="text-center">
              Women
              <br />
              Founded
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={"assets/smart.png"} />
            <h1 className="text-center">
              Smart
              <br />
              Manufacturing
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={"assets/Sustainable.png"} />
            <h1 className="text-center">
              Sustainability
              <br />& Social Impact
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={"assets/Medical.png"} />
            <h1 className="text-center">
              Medical
              <br />
              Devices
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-12">
          <div className="flex flex-col items-center">
            <Images img={"assets/clean.png"} />
            <h1 className="whitespace-nowrap">Clean Energy</h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={"assets/deep.png"} />
            <h1 className="whitespace-nowrap">Deep Tech</h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={"assets/Mobility.png"} />
            <h1 className="whitespace-nowrap">Mobility</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
