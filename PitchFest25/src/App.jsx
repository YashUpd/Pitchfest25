import React, { useEffect, useState } from 'react';
import Home from './Home';
import Info from './Info';
import Partial from './Partial';
import Benefits from './Benefits';
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
      <div className='bg-custom-gradient'>
        <Home />
        <Info />
        <Benefits/>
        <Partial/>
        <div className='bg-custom-gradient text-[white] text-xl md:text-4xl text-center w-full p-3'> </div>
      </div>
    )}
  </div>
  )
}






