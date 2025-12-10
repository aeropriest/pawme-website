import Image from 'next/image';

export default function ReadyToBring() {
  return (
    <section className="ready-to-bring py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora mb-6">
              Ready to Bring PawMe Home?
            </h2>
            <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora mb-8">
              Don't miss out – your pet deserves the best. Click below to order and start the adventure today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[rgba(118,120,237,1)] text-white py-3 px-8 rounded-full text-lg font-semibold font-sora hover:bg-[rgba(98,100,217,1)] transition-colors">
                BUY NOW
              </button>
              <button className="border border-[rgba(118,120,237,1)] text-[rgba(118,120,237,1)] py-3 px-8 rounded-full text-lg font-semibold font-sora hover:bg-[rgba(118,120,237,0.1)] transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                watch video
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full">
              <Image 
                src="/v341_40.png" 
                alt="PawMe Robot" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
