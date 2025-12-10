import Image from 'next/image';

export default function InteractionEntertainment() {
  const features = [
    {
      title: "Laser play with customizable patterns",
      description: "Stimulates prey drive with customizable laser patterns for fun and exercise.",
      image: "/v332_18.png"
    },
    {
      title: "Training modes and anxiety relaxation",
      description: "Soothes anxiety and improves behavior with AI voice and training guidance.",
      image: "/v332_22.png"
    },
    {
      title: "Follow-me mode",
      description: "Provides quiet companionship and safe exercise while reducing loneliness.",
      image: "/v332_24.png"
    },
    {
      title: "Voice commands",
      description: "Interact remotely to comfort, direct, and bond with your pet.",
      image: "/v332_26.png"
    }
  ];

  return (
    <section className="interaction-entertainment py-20 px-4 md:px-8 lg:px-16 bg-white bg-gradient-to-b from-[rgba(241,241,253,0.3)] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora text-center mb-4">
          Interaction & Entertainment
        </h2>
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora text-center mb-16 max-w-xl mx-auto">
          Keep your pet engaged and calm remotely
        </p>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <h3 className="text-[rgba(118,120,237,1)] text-2xl md:text-3xl font-semibold font-sora mb-4 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-[rgba(96,96,96,1)] text-lg font-normal font-sora mb-6 text-center md:text-left">
                  {feature.description}
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
