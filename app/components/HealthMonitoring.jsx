import Image from 'next/image';

export default function HealthMonitoring() {
  const features = [
    {
      title: "Temperature sensor and fever detection",
      description: "Continuously monitors temperature to detect fevers early and enable timely intervention.",
      image: "/v332_13.png"
    },
    {
      title: "Skin monitoring and analysis",
      description: "Detects irritations, allergies, or infections promptly to keep skin healthy.",
      image: "/v332_15.png"
    },
    {
      title: "Overall health tracking",
      description: "Tracks vital signs and activity for early issue detection and informed care.",
      image: "/v341_36.png"
    }
  ];

  return (
    <section className="health-monitoring py-20 px-4 md:px-8 lg:px-16 bg-white bg-gradient-to-b from-[rgba(241,241,253,0.3)] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora text-center mb-4">
          Health Monitoring
        </h2>
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora text-center mb-16 max-w-xl mx-auto">
          Stay ahead of health issues with proactive sensors
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
                <p className="text-gray-600 text-lg font-normal font-sora mb-6 text-center md:text-left">
                  {feature.description}
                </p>
              </div>
              <div className="md:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={700}
                    height={400}
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
