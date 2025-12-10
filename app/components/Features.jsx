import Image from 'next/image';

export default function Features() {
  const features = [
    { 
      name: "Distance sensor", 
      description: "Follow-me but quietly" 
    },
    { 
      name: "Two audio-video link via app", 
      description: "Connect with your pet anytime" 
    },
    { 
      name: "Automatic treat dispensing", 
      description: "Reward good behavior remotely" 
    },
    { 
      name: "Real-time video monitoring", 
      description: "Keep an eye on your pet" 
    },
    { 
      name: "Temperature sensor", 
      description: "Monitor environmental conditions" 
    },
    { 
      name: "Skin monitoring", 
      description: "Early detection of skin issues" 
    },
    { 
      name: "Training & Anxiety relaxation", 
      description: "Help your pet stay calm and well-behaved" 
    }
  ];

  return (
    <section className="features-section relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-[rgba(241,241,253,1)] to-white rounded-[40px] shadow-lg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl lg:text-[65px] font-bold font-sora text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          Discover the Power of PawMe's Core Features
        </h2>
        
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl lg:text-2xl font-normal font-sora text-center mb-16 max-w-2xl mx-auto">
          PawMe isn't just a robot; it's a smart guardian for your pet.
          Built with pet lovers in mind, it adapts to your pet's needs 
          while giving you peace of mind.
        </p>

        <div className="relative">
          <div className="mx-auto relative">
            <Image 
              src="/v341_40.png" 
              alt="PawMe Robot" 
              width={343} 
              height={498}
              className="mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item bg-white p-6 rounded-xl shadow-md border border-[rgba(118,120,237,0.2)] hover:shadow-lg transition-shadow"
              >
                <h3 className="text-[rgba(118,120,237,1)] text-xl md:text-2xl font-semibold font-sora mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 font-sora">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
