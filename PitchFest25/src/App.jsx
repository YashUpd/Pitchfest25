import React, { useEffect, useState } from 'react';
import Home from './Home';
import Info from './Info';
import Footer from './Footer';
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
         <video className=" w-1/3" autoPlay muted>
            <source src="/assets/Loading.mp4" type="video/mp4" />
          </video>
      </div>
    ) : (
      <div>
        <Home />
        <Info />
        <Partial/>
      </div>
    )}
  </div>
  )
}






