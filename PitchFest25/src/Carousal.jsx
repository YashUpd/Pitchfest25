import React from 'react';
import Marquee from "react-fast-marquee";

const Carousal = ({ text, Logos, direction = "left", speed = 30 }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 w-full mx-auto">
      <div className="w-full bg-custom-gradient text-center text-2xl sm:text-3xl md:text-4xl p-4 rounded-t-lg text-yellow-text">
        {text}
      </div>
      <Marquee
        speed={speed}
        play={true}
        direction={direction}
        gradient={false}
        pauseOnHover={true}
      >
        <div className="flex justify-center items-center">
          {[...Logos, ...Logos, ...Logos].map((Logo, index) => (
            <img
              src={Logo.img}
              key={`${Logo.id}-${index}`}
              className="w-20 sm:w-32 md:w-40 lg:w-48 h-auto object-contain mx-6"
              alt="Logo"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Carousal;