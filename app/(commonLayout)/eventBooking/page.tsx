/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CommonBanner from "@/components/shared/CommonBanner";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Variants for animations
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function RequestScheduleSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Request Submitted!");
  };

  return (
    <>
      {/* Banner Section */}
      <div className="flex flex-col">
        <CommonBanner page={"Services"} />
      </div>

      {/* Main Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }}
      >
        {/* Left: Form */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold mb-4">Request a Schedule</h2>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: false }}
          >
            {/* Name Fields */}
            <motion.div className="grid grid-cols-2 gap-4" variants={fadeUp}>
              <input
                type="text"
                name="firstName"
                placeholder="First name *"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name *"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                required
              />
            </motion.div>

            {/* Email & Phone */}
            <motion.div className="grid grid-cols-2 gap-4" variants={fadeUp}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number.."
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                required
              />
            </motion.div>

            {/* Event Type & Date */}
            <motion.div className="grid grid-cols-2 gap-4" variants={fadeUp}>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring focus:ring-pink-200"
                required
              >
                <option value="">Select an option...</option>
                <option value="conference">Conference</option>
                <option value="wedding">Wedding</option>
                <option value="party">Party</option>
                <option value="corporate">Corporate Event</option>
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                required
              />
            </motion.div>

            {/* Notes */}
            <motion.textarea
              name="notes"
              placeholder="Additional notes"
              value={formData.notes}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-pink-200"
              variants={fadeUp}
            ></motion.textarea>

            {/* Submit */}
            <motion.button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right: Image */}
        <motion.div variants={fadeUp}>
          <Image
            src="/eventBooking.png"
            alt="Event Meeting"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </motion.div>
      </motion.section>
    </>
  );
}
