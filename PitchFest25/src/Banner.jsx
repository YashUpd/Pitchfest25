import Banner1 from '../public/assets/Banner1.png' 
import Banner2 from '../public/assets/Banner2.png'
import Banner3 from '../public/assets/Banner3.png'
const Banner = () =>{
    return(
        <div>
            <div className='flex justify-center pt-2'>
            <div className="bg-[#FEFEFA] w-[600px]
             p-2 rounded-xl flex justify-around items-center gap-10">
                <img src= {Banner1} alt="" 
                className='w-24'/>
                <img src= {Banner3} alt="" 
                className='w-48'/>
                <img src= {Banner2} alt="" 
                className='w-36'/>
            </div>
            </div>
        </div>
    )
}
export default Banner;