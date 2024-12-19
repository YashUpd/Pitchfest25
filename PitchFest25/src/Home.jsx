import Banner from "./Banner";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = ()=>{
    return(
       
        <div className="bg-custom-gradient w-full min-h-screen flex flex-col justify-center items-center">
            <section id="home">
            <Banner/>
            <Navbar/>
            <Hero/>
            </section>
        </div>
    )
}
export default Home; 