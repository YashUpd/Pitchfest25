import React, { useEffect, useState } from 'react';
import Home from './Home';
import Info from './Info';
import Partial from './Partial';
export default function App() {
  const [Loading,setLoading] = useState(true);

  useEffect(()=>{
    const Load = () =>{
      setTimeout(()=>{
        setLoading(false)
      },5000)
    }
    Load();
  },[])
  return(
    <div>
    {Loading ? (
      <div className="w-full h-screen flex justify-center items-center bg-black">
         <video className=" w-2/3 md:w-1/3 md:pt-12" autoPlay muted>
            <source src="/assets/Loading.mp4" type="video/mp4" />
          </video>
      </div>
    ) : (
      <div>
        <Home />
        <Info />
        <Partial/>
        <div className='bg-custom-gradient text-[white] text-xl md:text-4xl text-center w-full p-3'>Website Still Under Production </div>
      </div>
    )}
  </div>
  )
}






