const Banner = () =>{
    return(
        <div>
            <div className='flex justify-center mt-5 px-6 sm:px-10 md:px-16 lg:px-20'>
            <div className="bg-[#fefefaa1] w-full
             px-6 py-2 rounded-xl flex justify-between items-center gap-4 sm:gap-8 md:gap-16 ">
                <img src= '/assets/Banner1.png' alt="" 
                className='w-20 sm:w-24 md:w-36 lg:w-40 object-contain'/>
                <img src= '/assets/Banner3.png' alt="" 
                className='w-32 sm:w-48 md:w-72 lg:w-80 object-contain'/>
                <img src= '/assets/Banner2.png' alt="" 
                className='w-28 sm:w-40 md:w-56 lg:w-64 object-contain'/>
            </div>
            </div>
        </div>
    )
}
export default Banner;