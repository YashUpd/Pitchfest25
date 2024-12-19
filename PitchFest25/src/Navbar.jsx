const Navbar = () =>{
    return(
        <div>
            <ul className="text-white font-semibold flex justify-center items-center gap-10 pt-6 text-xl">
                <li className="px-2"><a href="#home" className="nav-link hover:text-gray-400 focus:text-yellow-500 focus:outline-none">HOME</a></li>
                <li className="px-2"><a href="#benefits" className="nav-link hover:text-gray-400 focus:text-yellow-500 focus:outline-none">BENEFITS</a></li>
                <li className="px-2"><a href="#registration" className="nav-link hover:text-gray-400 focus:text-yellow-500 focus:outline-none">REGISTER</a></li>
                <li className="px-2"><a href="#partners" className="nav-link hover:text-gray-400 focus:text-yellow-500 focus:outline-none">PARTNERS</a></li>
            </ul>
        </div>
    )
}
export default Navbar;