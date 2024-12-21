import React from 'react';

const VideoSection = () => {
  return (
    <div className="bg-white w-[80%] shadow-sm rounded-md">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-2 rounded-2xl w-full">
      <div className='flex flex-col bg-white p-5 border shadow-2xl md:w-1/2 rounded-2xl justify-center items-start'>
      <iframe className='shadow-[rgba(0,_0,_0,_0.2)_4px_0px_10px,-4px_0px_10px] rounded-lg w-full' width="560" height="315" src="https://www.youtube.com/embed/qhMDRrDf-bc?si=ltbLCcaERhbfZ3MA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className='flex gap-2 justify-start items-center pt-2'>
          <img src='/assets/Youtube.png'
          className='w-[40px]'/>
          <span className='text-black font-medium whitespace-nowrap'>ACIC BMU | Propel Pitchfest23</span>
      </div>
      </div>
      <div  className='flex flex-col bg-white p-5 rounded-2xl border shadow-2xl md:w-1/2 justify-center items-start'>
      <iframe className='shadow-[rgba(0,_0,_0,_0.2)_4px_0px_10px,-4px_0px_10px] rounded-lg w-full ' width="560" height="315" src="https://www.youtube.com/embed/cyZU509rKSw?si=BLMN6qTEhe2VmBR7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className='flex gap-2 justify-start items-center pt-2'>
          <img src='/assets/Youtube.png'
          className='w-[40px]'/>
          <span className='text-black font-medium whitespace-nowrap'>ACIC BMU | Propel Pitchfest24</span>
      </div>
      </div>
      </div>
    </div>
  );
};

export default VideoSection;