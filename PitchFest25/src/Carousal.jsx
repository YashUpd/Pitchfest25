import Marquee from "react-fast-marquee";
const Carousal = ({ text, Logos }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2 gap-4 w-full">
      <div className="w-full bg-custom-gradient text-center text-2xl sm:text-3xl md:text-4xl p-4 rounded-t-lg text-yellow-text">
        {text}
      </div>
      <Marquee
        pauseOnHover={true}
        speed={80}
      >
        <div className="flex justify-center items-center gap-10 sm:gap-16">
          {Logos.map((Logo) => (
            <img
              src={Logo.img}
              key={Logo.id}
              autoFill={true}
              className="w-20 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
              alt="Logo"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
export default Carousal;
