"use client";

import CommonBanner from "@/components/shared/CommonBanner";
import { motion, Variants } from "framer-motion";
import { Briefcase, Building2, CheckCircle, MapPin, Users } from "lucide-react";

const highlights = [
  {
    title: "Our Vision",
    desc: "To redefine event management with creativity, precision, and client-centric services.",
  },
  {
    title: "Our Mission",
    desc: "To deliver extraordinary and seamless events that inspire, connect, and engage people.",
  },
  {
    title: "What We Do",
    desc: "Corporate Events, Conferences, Weddings, Exhibitions, Product Launches, Festivals, and more.",
  },
  {
    title: "Why Choose Us",
    desc: "Expert planning, creative ideas, reliable execution, and a passion for creating memorable experiences.",
  },
];

const capabilities = [
  {
    number: "500+",
    title: "Events Organized",
    icon: Users,
  },
  {
    number: "100+",
    title: "Skilled Professionals",
    icon: Briefcase,
  },
  {
    number: "200+",
    title: "Corporate Clients",
    icon: Building2,
  },
  {
    number: "50+",
    title: "Unique Venues",
    icon: MapPin,
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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="flex flex-col">
        <CommonBanner page={"About"} />
      </div>

      {/* About Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 text-center md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:my-10"
          variants={fadeUp}
        >
          About <span className="text-primary">NOFAKHA</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-10"
          variants={fadeUp}
        >
          We are a passionate team of event strategists, planners, and creators
          dedicated to delivering unforgettable experiences. From corporate
          conferences to weddings, product launches, and cultural festivals, we
          bring every event to life with innovation, creativity, and precision.
          Our mission is to turn your vision into reality by designing events
          that leave a lasting impression.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
            >
              <CheckCircle className="w-6 h-6 text-pink-500 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage: "url('/pricing.png')",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 md:h-70"
          variants={containerVariants}
        >
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-pink-500 text-white rounded-md p-6 w-full md:w-56 text-center shadow-md"
              variants={fadeUp}
              whileHover={{ scale: 1.08 }}
            >
              <item.icon className="w-10 h-10 mx-auto mb-3" />
              <h3 className="text-3xl font-bold mb-1">{item.number}</h3>
              <p className="text-sm font-medium">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
