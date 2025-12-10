import Image from 'next/image';

export default function Pricing() {
  const pricingOptions = [
    {
      title: "Hardware Purchase",
      description: "Your PawMe robot delivered ready to roll",
      price: "$199 per unit",
      image: "/v66_328.png",
      imageWidth: 140,
      imageHeight: 163
    },
    {
      title: "App Subscription",
      description: "Unlock advanced AI interactions, custom patterns, and unlimited monitoring",
      price: "$4.99 per month",
      image: "/v66_312.png",
      imageWidth: 150,
      imageHeight: 152
    },
    {
      title: "Pet Food Subscription",
      description: "Premium treats and food delivered monthly, integrated with PawMe's dispenser",
      price: "$19.99 per month",
      image: "/v66_320.png",
      imageWidth: 80,
      imageHeight: 164
    },
    {
      title: "Pet Insurance",
      description: "Comprehensive coverage for accidents, illnesses, and more",
      price: "$49.99 per month",
      image: "/v66_324.png",
      imageWidth: 141,
      imageHeight: 176
    }
  ];

  return (
    <section className="pricing-section py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[rgba(241,241,253,1)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[rgba(0,20,64,1)] text-4xl md:text-5xl font-bold font-sora text-center mb-4">
          Pricing That Fits Your Lifestyle
        </h2>
        <p className="text-[rgba(96,96,96,1)] text-lg md:text-xl font-normal font-sora text-center mb-16 max-w-3xl mx-auto">
          PawMe offers flexible options to fit your budget while delivering premium value. Start with the hardware and add subscriptions for enhanced features – no hidden fees, just happy pets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full border border-[rgba(118,120,237,0.1)]"
            >
              <div className="p-6 flex flex-col items-center flex-grow">
                <div className="relative mb-6 h-40 flex items-center justify-center">
                  <Image 
                    src={option.image}
                    alt={option.title}
                    width={option.imageWidth}
                    height={option.imageHeight}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[rgba(118,120,237,1)] text-xl font-semibold font-sora mb-3 text-center">
                  {option.title}
                </h3>
                <p className="text-[rgba(96,96,96,1)] text-base font-normal font-sora mb-6 text-center">
                  {option.description}
                </p>
              </div>
              <div className="bg-[rgba(118,120,237,1)] py-4 px-6 text-center">
                <p className="text-white text-xl font-semibold font-sora">
                  {option.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
