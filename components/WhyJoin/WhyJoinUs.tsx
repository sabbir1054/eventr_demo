import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Access to events",
    description:
      "Enjoy seamless access to all our premium events, conferences, and workshops, ensuring you never miss an important moment.",
    bg: "bg-blue-400",
    icon: "🎟️",
  },
  {
    title: "Make a difference",
    description:
      "We organize events that bring real value, create memorable experiences, and make a positive impact on the community.",
    bg: "bg-green-400",
    icon: "🤝",
  },
  {
    title: "Information exchange",
    description:
      "Our events are a hub for sharing ideas, learning from experts, and discovering innovative solutions for growth.",
    bg: "bg-orange-300",
    icon: "💡",
  },
  {
    title: "Skilled speakers",
    description:
      "We bring together world-class speakers and industry leaders who inspire and educate with their expertise.",
    bg: "bg-red-400",
    icon: "🎤",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center mb-10 md:mb-20">
      <p className="text-pink-600 font-medium mb-2">Why Choose Us</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Why you join us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className={`${reason.bg} text-white p-6 rounded-md relative overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{reason.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4">{reason.description}</p>

            {/* Arrow Link */}
            <div className="flex items-center gap-2 text-sm font-medium cursor-pointer hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-4 h-4 text-yellow-200" />
              <span className="text-yellow-200">Learn more</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
