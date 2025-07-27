import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="">
      <Image
        src="/background.png"
        alt="Background pattern"
        fill
        className=""
        style={{ zIndex: 1 }}
      />
      <section className="relative flex flex-col md:flex-row min-h-[90vh]  overflow-hidden">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-16 z-10">
          <div className="mb-2 text-[#f92d7f] font-semibold text-lg">
            Explore . Finance . Solution
          </div>
          <h1
            className="font-bold text-white text-4xl md:text-7xl leading-tight mb-4"
            style={{ fontFamily: "Martel, serif" }}
          >
            Event planning made easier for everyone
            <br />
            2025
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <button className="hover:cursor-pointer bg-[#f92d7f] hover:bg-[#e91e63] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition">
              Book now
            </button>
            <div className="flex items-center space-x-3 px-4 py-2 rounded-md">
              <span className="relative w-12 h-12 flex items-center justify-center">
             
                <span className="absolute w-full h-full rounded-full bg-[#ffffff1a] animate-ping-custom"></span>
                <span className="absolute w-3/4 h-3/4 rounded-full bg-[#ffffff33] animate-ping-custom delay-150"></span>

                <span className="relative w-12 h-12 rounded-full bg-[#4b3ca7] flex items-center justify-center">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="12" fill="#392c87" />
                    <polygon points="10,8 16,12 10,16" fill="#fff" />
                  </svg>
                </span>
              </span>
              <span className="text-white font-medium">See insights</span>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 relative min-h-[400px]">
          {/* Foreground main image */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Image
              src="/right_hero.jpg"
              alt="Conference Speaker"
              width={1000}
              height={1000}
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* Decorative shapes (optional, for extra accuracy) */}
        <span className="absolute left-1/3 top-1/2 w-12 h-12 border-2 border-[#f92d7f] rounded-full opacity-30" />
        <span className="absolute left-1/4 bottom-12 w-16 h-16 border-2 border-[#fbd54a] rounded-full opacity-30" />
      </section>
    </div>
  );
}
