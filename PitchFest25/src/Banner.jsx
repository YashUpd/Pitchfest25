const Banner = () =>{
    return(
        <div>
            <div className='flex justify-center mt-5'>
            <div className="bg-[#fefefaa1] w-full
             px-6 py-2 rounded-xl flex justify-between items-center gap-16 space-x-28 ">
                <img src= '/assets/Banner1.png' alt="" 
                className='w-36'/>
                <img src= '/assets/Banner3.png' alt="" 
                className='w-72'/>
                <img src= '/assets/Banner2.png' alt="" 
                className='w-56'/>
            </div>
            </div>
        </div>
    )
}
export default Banner;