import React from 'react';

const VideoSection = () => {
  return (
    <div className="bg-white w-[80%] shadow-xl">
      <div className="flex justify-center items-center gap-6">
      <iframe className='shadow-[rgba(0,_0,_0,_0.6)_4px_0px_10px,-4px_0px_10px] rounded-lg' width="500" height="306" src="https://www.youtube.com/embed/qhMDRrDf-bc?si=ltbLCcaERhbfZ3MA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe className='shadow-[rgba(0,_0,_0,_0.6)_4px_0px_10px,-4px_0px_10px] rounded-lg' width="500" height="306" src="https://www.youtube.com/embed/cyZU509rKSw?si=BLMN6qTEhe2VmBR7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default VideoSection;