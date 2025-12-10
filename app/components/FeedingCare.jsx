import Image from 'next/image';

export default function FeedingCare() {
  const features = [
    {
      title: "Automatic treat dispensing",
      description: "Dispenses treats to reward behavior and enhance training sessions.",
      image: "/v334_28.png"
    },
    {
      title: "Integrated feeding station",
      description: "Automates meals and water for consistent routines and portion control.",
      image: "/v336_30.png"
    },
    {
      title: "Real-Time Video Monitoring",
      description: "Watch your pet from anywhere via the FPV camera live streams right on your phone.",
      image: "/v368_131.png"
    }
  ];

  return (
    <section className="feeding-care py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora text-center mb-4">
          Feeding & Care
        </h2>
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora text-center mb-16 max-w-xl mx-auto">
          Maintain routines effortlessly
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-64 md:h-80">
                <Image 
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[rgba(118,120,237,1)] text-xl md:text-2xl font-semibold font-sora mb-3">
                  {feature.title}
                </h3>
                <p className="text-[rgba(96,96,96,1)] text-base font-normal font-sora">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
