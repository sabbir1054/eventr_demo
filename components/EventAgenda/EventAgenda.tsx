"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const topServices = [
  {
    title: "Corporate Events",
    description:
      "We manage corporate events such as product launches, seminars, and team-building activities with professional precision.",
    img: "/st1.png",
  },
  {
    title: "Weddings & Engagements",
    description:
      "We design and execute stunning weddings and engagement parties tailored to your culture, traditions, and style.",
    img: "/st2.png",
  },
  {
    title: "Birthday & Private Parties",
    description:
      "We create unforgettable birthday celebrations, anniversaries, and private parties with unique themes and decor.",
    img: "/st3.png",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EventAgenda = () => {
  return (
    <div>
      {/* Section Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.2 }}
      >
        <p className="text-pink-600 font-medium">Our services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          We provide the best services
        </h2>
      </motion.div>

      {/* Top Services Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topServices?.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md border border-transparent hover:border-pink-500 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2 }}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-56 transform transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
              <div className="p-4 text-center">
                <motion.h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {service.title}
                </motion.h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventAgenda;
