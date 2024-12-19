import React, { useEffect, useState } from 'react';
import Home from './Home';
import Info from './Info';
import Footer from './Footer';
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
        <div className="w-full flex justify-center items-center">
          <img src="/assets/Partners2.jpg" className="w-full" alt="Partners" />
        </div>
        <Footer/>
      </div>
    )}
  </div>
  )
}






