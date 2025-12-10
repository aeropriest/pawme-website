import Image from 'next/image';

export default function SeamlessInteraction() {
  const features = [
    {
      title: "Training & Anxiety Relaxation",
      description: "AI-guided sessions with soothing sounds and gentle movements help train behaviors and calm separation anxiety",
      icon: "🧠"
    },
    {
      title: "Skin Monitoring",
      description: "Scans for irregularities like hotspots or dryness, notifying you early for proactive care",
      icon: "🔍"
    },
    {
      title: "Distance Sensor",
      description: "Avoids obstacles intelligently, ensuring safe navigation around your home",
      icon: "📡"
    },
    {
      title: "Temperature Sensor",
      description: "Detects room conditions to alert you if it's too hot or cold for your pet's comfort",
      icon: "🌡️"
    }
  ];

  return (
    <section className="seamless-interaction py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[rgba(241,241,253,0.5)] to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora text-center mb-6">
          Seamless Interaction<br />That Fits Your Life
        </h2>
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora text-center mb-16 max-w-3xl mx-auto">
          As a busy pet owner, you want effortless control and real benefits. PawMe makes it simple: Download the app, sync the robot, and watch the magic unfold.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative flex justify-center">
            <Image 
              src="/v341_40.png"
              alt="PawMe Robot"
              width={343}
              height={498}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 content-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 border border-[rgba(118,120,237,0.1)] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-[rgba(118,120,237,1)] text-xl font-semibold font-sora mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[rgba(96,96,96,1)] text-base font-normal font-sora">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
