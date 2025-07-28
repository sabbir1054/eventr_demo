"use client";

import { motion, Variants } from "framer-motion";
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

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center mb-10 md:mb-20">
      {/* Section Title */}
      <motion.p
        className="text-pink-600 font-medium mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.3 }}
      >
        Why Choose Us
      </motion.p>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3 }}
      >
        Why you join us?
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={`${reason.bg} text-white p-6 rounded-md relative overflow-hidden transform transition-all duration-300 hover:shadow-2xl`}
          >
            {/* Icon */}
            <div className="text-4xl mb-4">{reason.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4">{reason.description}</p>

            {/* Arrow Link */}
            <motion.div
              className="flex items-center gap-2 text-sm font-medium cursor-pointer text-yellow-200"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-4 h-4" />
              <span>Learn more</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
