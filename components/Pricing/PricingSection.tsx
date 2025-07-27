import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Beginner",
      price: 40,
      bg: "bg-white",
      text: "text-gray-900",
    },
    {
      name: "Advanced",
      price: 80,
      bg: "bg-indigo-900 text-white",
      text: "text-white",
    },
    {
      name: "Premium",
      price: 120,
      bg: "bg-white",
      text: "text-gray-900",
    },
  ];

  const features = [
    {
      title: "Full conference",
      desc: "Workshop, snacks, etc.",
    },
    {
      title: "Live video",
      desc: "Can access online free",
    },
    {
      title: "Meet speaker",
      desc: "Ask question privately",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/pricing.png')" }} // Replace with your background
    >
      <div className="text-center mb-12">
        <p className="text-pink-600 font-medium">Event Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Book for your event
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`${plan.bg} rounded-md shadow-md p-8 flex flex-col items-center`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                plan.text === "text-white" ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.name}
            </h3>
            <p className="text-4xl font-extrabold mb-1">
              <span className="text-2xl align-top">$</span>
              {plan.price}
              <span className="text-lg font-normal text-gray-500">/mo</span>
            </p>
            <div className="mt-6 w-full space-y-4">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500 w-5 h-5" />
                    <span className={`font-semibold ${plan.text}`}>
                      {f.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 ml-7">{f.desc}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded">
              Booked now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
