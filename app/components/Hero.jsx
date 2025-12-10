import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-5 px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="text-[#001440] font-bold text-2xl flex items-center">
              <span className="bg-[#001440] text-white p-1 rounded mr-1">P</span>PawMe
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#" className="text-[#001440] font-medium">Home</Link>
            <Link href="#" className="text-[#001440] font-medium">Features</Link>
            <Link href="#" className="text-[#001440] font-medium">Pricing</Link>
            <Link href="#" className="text-[#001440] font-medium">About Us</Link>
            <Link href="#" className="bg-[#7678ed] text-white px-4 py-2 rounded-full font-medium">Buy Now</Link>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-section relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/v65_302.png" 
            alt="PawMe Hero Background" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[rgba(118,120,237,0.3)]"></div>
        
        <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-sora mb-4">
            Meet PawMe
          </h1>
          <p className="text-white text-base md:text-lg font-normal font-sora max-w-md mb-8">
            a ball-shaped robot with AI-driven interaction, 
            FPV camera, laser play, and automated
            feeding / watering.
          </p>
          <div>
            <button className="bg-[rgba(118,120,237,1)] text-white py-3 px-8 rounded-full text-base font-semibold font-sora hover:bg-[rgba(98,100,217,1)] transition-colors uppercase">
              explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
