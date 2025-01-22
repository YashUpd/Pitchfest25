import React from "react";

const VideoSection = () => {
  return (
    <div className="w-[85%] md:w-[80%] shadow-sm rounded-md mt-6 mb-6 md:mt-0">
      <div className="flex flex-col  md:flex-row justify-center items-center gap-6 md:gap-10 rounded-2xl w-full">
        <div className="flex flex-col bg-white rounded-2xl border shadow-2xl w-[95%] md:w-1/2 justify-center items-start">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full p-2 rounded-3xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qhMDRrDf-bc?si=R5SSfvmizOrLP3X0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          </div>
          <div className="flex gap-2 justify-center items-center px-3 pb-2">
            <img src="/assets/Youtube.png" className="w-[35px]" />
            <span className="text-black font-medium whitespace-nowrap">
              ACIC BMU | Propel Pitchfest23
            </span>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-2xl border shadow-2xl w-[95%] md:w-1/2 justify-center items-start mt-6 md:mt-0">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full p-2 rounded-3xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/cyZU509rKSw?si=BLMN6qTEhe2VmBR7"
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          </div>
          <div className="flex gap-2 justify-center items-center px-3 pb-2">
            <img src="/assets/Youtube.png" className="w-[35px]" />
            <span className="text-black font-medium whitespace-nowrap">
              ACIC BMU | Propel Pitchfest24
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
