"use client";

import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Basic Celebration",
    price: "$500",
    period: "/event",
    features: [
      "Venue setup & decoration",
      "Basic sound & lighting",
      "Event coordination",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
  {
    title: "Premium Event",
    price: "$1200",
    period: "/event",
    features: [
      "Full venue decoration",
      "Advanced sound & lighting",
      "Photography & videography",
      "Professional event coordinator",
    ],
    buttonText: "Book Now",
    highlight: true,
  },
  {
    title: "Luxury Experience",
    price: "$2500",
    period: "/event",
    features: [
      "Custom event theme & design",
      "Premium sound, lighting & stage",
      "Full catering service",
      "Live entertainment & performers",
      "Dedicated event planner",
    ],
    buttonText: "Book Now",
    highlight: false,
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PricingSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/pricing.png')" }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <p className="text-pink-500 font-medium">Event Packages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Book Your Perfect Event Plan
        </h2>
      </motion.div>

      {/* Pricing Cards */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`${
              pkg.highlight
                ? "bg-indigo-900 text-white"
                : "bg-white text-gray-900"
            } rounded-md shadow-md p-8 flex flex-col items-center transition-transform`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                pkg.highlight ? "text-white" : "text-gray-900"
              }`}
            >
              {pkg.title}
            </h3>
            <p className="text-4xl font-extrabold mb-1">
              {pkg.price}
              <span className="text-lg font-normal text-gray-500">
                {pkg.period}
              </span>
            </p>
            <div className="mt-6 w-full space-y-4">
              {pkg.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="text-green-500 w-5 h-5" />
                  <span
                    className={`text-sm ${
                      pkg.highlight ? "text-gray-100" : "text-gray-700"
                    }`}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition cursor-pointer"
            >
              {pkg.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
