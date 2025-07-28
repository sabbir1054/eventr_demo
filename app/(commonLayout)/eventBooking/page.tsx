/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CommonBanner from "@/components/shared/CommonBanner";
import Image from "next/image";
import { useState } from "react";

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
      <div className="flex flex-col">
        {/* Banner Section */}
        <CommonBanner page={"Services"} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-20">
        {/* Left: Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Request a Schedule</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Event Type & Date */}
            <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Notes */}
            <textarea
              name="notes"
              placeholder="Additional notes"
              value={formData.notes}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-pink-200"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition"
            >
              Book Now
            </button>
          </form>
        </div>

        <div>
          <Image
            src="/eventBooking.png" // Replace with your image path
            alt="Event Meeting"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
}
