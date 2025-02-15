import Textbox from "./Textbox"
const Categories = () => {
  return (
    <div className="flex justify-center w-[90%] md:w-[80%] max-w-8xl mx-auto">
      <div className="bg-white rounded-lg md:rounded-2xl w-full">
        <div className="flex flex-col md:p-4 p-2">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-text mb-6">
            Two Tracks
          </h1>
          <div className="flex justify-center md:gap-10 gap-2 items-center">
            <div className="bg-custom-gradient flex justify-center w-full md:w-80 p-2 md:p-4 rounded-full">
              <img
                src='/assets/top1.png'
                className=" w-full max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] xl:max-w-[6rem] object-contain"
              />
            </div>
            <Textbox text={"Revenue"} />
            <Textbox text={"Pre-Revenue"} />
            <div className="bg-custom-gradient flex justify-center w-full md:w-80 p-2 md:p-4 rounded-full">
              <img
                src='/assets/top2.png'
                className="w-full max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] xl:max-w-[6rem] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 p-4 mb-10 md:mb-20">
          <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-text pb-2">
            Focus Areas
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img src='/assets/women_funded.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">
                Women <br /> Founded
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img src='/assets/smart.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">
                Smart <br /> Manufacturing
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img src='/assets/Sustainable.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">
                Sustainability <br />& Social Impact
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient p-6 rounded-full w-full flex justify-center">
                <img src='/assets/Medical.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">
                Medical <br/> Devices
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mt-4 sm:mt-4 xl:mt-4">
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient  rounded-full w-full p-6 md:p-6">
                <img src='/assets/clean.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">Clean Energy</h1>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-custom-gradient rounded-full w-full flex justify-center p-6 md:p-6">
                <img src='/assets/deep.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1 " />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">Deep Tech</h1>
            </div>
            <div className="flex flex-col items-center self-center mx-auto col-span-2 md:col-span-1">
              <div className="bg-custom-gradient p-6 md:p-6 rounded-full w-full">
                <img src='/assets/Mobility.png' className="w-full max-w-[3rem] md:max-w-[5rem] object-contain sm:p-2 md:p-1" />
              </div>
              <h1 className="text-center text-sm md:text-base mt-1 font-medium">Mobility</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
