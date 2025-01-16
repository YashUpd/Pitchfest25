import Images from "./Images"
import Textbox from "./Textbox"

const Categories = () => {
  return (
    <div className="bg-white rounded-2xl w-[90%] md:w-[80%] mx-auto">
      <div className="flex flex-col p-4">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-text mb-6">
          Two Tracks
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-10 items-center">
          <img
            src='/assets/top1.png'
            className="hidden md:block bg-custom-gradient p-4 rounded-full"
          />
          <Textbox text={"Revenue"} />
          <Textbox text={"Pre-Revenue"} />
          <img
            src='/assets/top2.png'
            className="hidden md:block bg-custom-gradient p-4 rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 p-4 mb-10 md:mb-20">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-text pb-2">
          Focus Areas
        </h1>
        <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <Images img={'/assets/women_funded.png'} />
            <h1 className="text-center text-sm md:text-base">
              Women
              <br />
              Founded
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={'/assets/smart.png'} />
            <h1 className="text-center text-sm md:text-base">
              Smart
              <br />
              Manufacturing
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={'/assets/Sustainable.png'} />
            <h1 className="text-center text-sm md:text-base">
              Sustainability
              <br />& Social Impact
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={'/assets/Medical.png'} />
            <h1 className="text-center text-sm md:text-base">
              Medical
              <br />
              Devices
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-12 mt-2 md:mt-0">
          <div className="flex flex-col items-center">
            <Images img={'/assets/clean.png'} />
            <h1 className="whitespace-normal md:whitespace-nowrap text-sm md:text-base text-center">Clean Energy</h1>
          </div>
          <div className="flex flex-col items-center">
            <Images img={'/assets/deep.png'} />
            <h1 className="whitespace-normal md:whitespace-nowrap text-sm md:text-base text-center">Deep Tech</h1>
          </div>
          <div className="flex flex-col items-center col-span-2 justify-self-center md:col-span-1">
            <Images img={'/assets/Mobility.png'} />
            <h1 className="whitespace-normal md:whitespace-nowrap text-sm md:text-base text-center">Mobility</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

