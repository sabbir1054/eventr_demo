/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Martha Martin",
    role: "Entrepreneur",
    image: "/testimonial.png", // Replace with your actual images
    text: "I appreciate your amazing services and professional staff for all your hard work and creative thinking. You made the entire event memorable!",
  },
  {
    name: "John Carter",
    role: "Business Analyst",
    image: "/testimonial.png",
    text: "The team was extremely professional and creative. I highly recommend them to anyone who needs top-quality event services.",
  },
  {
    name: "Sophia Lee",
    role: "Event Manager",
    image: "/testimonial.png",
    text: "Their attention to detail is unmatched. Every aspect of the event was handled with perfection and elegance.",
  },
  {
    name: "Liam Parker",
    role: "Marketing Head",
    image: "/testimonial.png",
    text: "It was an absolute pleasure working with your team. Everything from planning to execution was seamless.",
  },
  {
    name: "Emma Johnson",
    role: "CEO, StartUp Co.",
    image: "/testimonial.png",
    text: "Amazing service and creativity! The event exceeded our expectations and we look forward to working with you again.",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center md:my-20">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="pb-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              {/* Quote Icon */}
              <div className="text-pink-500 text-5xl mb-4">
                <img src="/download.png" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 text-lg leading-relaxed max-w-xl">
                {testimonial.text}
              </p>

              {/* Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />

              {/* Name & Role */}
              <h4 className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
