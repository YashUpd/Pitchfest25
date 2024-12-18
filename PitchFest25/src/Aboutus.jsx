export default function Aboutus() {
  return(
    <div className="bg-white p-4 rounded-[2.5rem] w-full max-w-7xl mx-auto shadow-lg">
    <div className="grid md:grid-cols-2 overflow-hidden">
      {/* Left side - Image container */}
      <div className="h-full">
        <img
          src="/public/a67c16903df5f101fafccc9d1666a239.png"
          alt="PitchFest 2025"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="bg-[#FFE488] p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-8">
          PitchFest 2025, hosted by BML Munjal University, is the ultimate launchpad for innovative startups to make their mark! Powered by ACIC-BMU | Propel, this thrilling event brings together bold entrepreneurs, visionary investors, and industry game-changers. It's not just about pitching — it's about unlocking massive opportunities, securing funding, and gaining invaluable mentorship. With a spotlight on fresh, disruptive ideas, PitchFest 2025 is your chance to connect, collaborate, and propel your startup to the next level in one of the most dynamic startup ecosystems around!
        </p>
        <button 
          className="bg-white w-fit px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1 text-lg group"
        >
          Read more <span className="arrow ml-2 transform transition-transform duration-600 group-hover:translate-x-2">≫</span>
        </button>
      </div>
    </div>
  </div>
  )
}