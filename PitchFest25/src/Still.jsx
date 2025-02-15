const Still = () => {
    return (
      <div className="flex justify-center items-center my-20">
        <div
          className="flex flex-col md:flex-row justify-center w-[90%] md:w-[80%] bg-white gap-4 items-center mt-12 md:mt-10 px-4 py-4 rounded-3xl shadow-lg"
        >
          <div className="flex justify-center items-center w-4/5 md:w-1/3 rounded-xl">
            <img
              src="/assets/Register.png"
              alt="About Us"
              className="w-80 h-auto rounded-xl object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 bg-[#FFD42E8A] rounded-3xl flex flex-col justify-around items-start p-6 md:p-8 shadow-md">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black py-2">
              Missed the Registration? You Can Still Attend!
            </h1>
            <p className="text-black text-left text-sm sm:text-base md:text-lg lg:text-xl">
              Take the first step towards transforming your idea into a thriving business. Click the button below to start your registration process.
            </p>
            <div className="flex justify-start items-center my-4 md:my-6">
              <button className="bg-white font-normal py-2 px-6 text-[#FCC15A] text-sm md:text-lg lg:text-xl flex justify-start items-center shadow-lg rounded-md hover:shadow-xl transition-all">
                Register Here
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Still;
  