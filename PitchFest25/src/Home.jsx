import Banner from "./Banner";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = ()=>{
    return(
       
        <div className="bg-custom-gradient w-full min-h-screen flex flex-col justify-start items-center">
            <section id="home" className="w-full">
            <Banner/>
            <Navbar/>
            <Hero/>
            </section>
        </div>
    )
}
export default Home; 