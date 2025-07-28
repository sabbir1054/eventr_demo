"use client";

import CommonBanner from "@/components/shared/CommonBanner";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div>
      <div className="flex flex-col">
        {/* Banner Section */}
        <CommonBanner page={"Contact"} />
      </div>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-pink-600 font-medium">Contact us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get in touch
          </h2>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Contact Number */}
          <div className="bg-white rounded-md shadow p-6 text-center">
            <Phone className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contact number
            </h3>
            <p className="text-gray-600">+01 123 456 789</p>
            <p className="text-gray-600">+02 345 678 901</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-md shadow p-6 text-center">
            <Mail className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Send us mail
            </h3>
            <p className="text-gray-600">support@domain.com</p>
            <p className="text-gray-600">contact@domain.com</p>
          </div>

          {/* Location */}
          <div className="bg-white rounded-md shadow p-6 text-center">
            <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Our location
            </h3>
            <p className="text-gray-600">
              4517 Washington Ave, Manchester, Kentucky 39495, USA.
            </p>
          </div>
        </div>

        {/* Map + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full h-[350px] rounded-md overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.353243665158!2d89.55016431497024!3d22.845641785042866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff902f5dc460bb%3A0xfbe346469c5f3fb!2sAnd%20IT!5e0!3m2!1sen!2sbd!4v1673000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-md shadow p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Don’t Hesitate To Contact Us For Any Query!
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Aliqua pariatur nisi sit dolore do quis quis ipsum incididunt.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone number"
                  className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-pink-200"
                />
                <select className="border rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring focus:ring-pink-200">
                  <option>Choose subject</option>
                  <option>General Query</option>
                  <option>Support</option>
                  <option>Business</option>
                </select>
              </div>

              <textarea
                placeholder="Write a message here..."
                className="border rounded-md px-3 py-2 w-full h-28 focus:outline-none focus:ring focus:ring-pink-200"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
