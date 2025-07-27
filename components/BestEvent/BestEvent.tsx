import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BestEvent() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-[10vh] md:my-[20vh]">
      {/* Left Content */}
      <div>
        <p className="text-pink-600 font-semibold">Organize the best event</p>
        <h2 className="text-4xl font-bold text-gray-900 leading-snug mt-2">
          We organize the best seminars and events
        </h2>
        <p className="text-gray-600 mt-4">
          We specialize in creating impactful seminars and events that bring people together to share ideas, build connections, and 
          inspire growth. Our team focuses on every detail to ensure a seamless and memorable experience for all participants. From 
          planning to execution, we deliver events that align with your vision and objectives.
        </p>

        <blockquote className="bg-pink-50 border-l-4 border-pink-500 text-gray-800 text-lg font-medium p-4 mt-6">
          An event is not just about gathering people; it’s about creating an experience that leaves a lasting impression.
        </blockquote>

        <p className="text-gray-600 mt-4">
          Whether you’re organizing a corporate seminar, a professional workshop, or a large-scale conference, we take pride in turning concepts into reality. Our expertise, creativity, and commitment make us the trusted choice for successful and engaging events.
        </p>

        <Button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white">
          Discover Now
        </Button>
      </div>

      {/* Right Images */}
      <div className=" relative">
        <Image
          src="/best_event_right.png"
          alt="Main Event"
          width={500}
          height={350}
          className="rounded-md object-cover w-full"
        />
      </div>
    </section>
  );
}
