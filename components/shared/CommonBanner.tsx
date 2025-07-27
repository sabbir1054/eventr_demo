/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

const CommonBanner = ({ page }: any) => {
  return (
    <div>
      <div className="relative w-full h-100">
        <Image
          src="/common_banner.png"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">{page}</h2>
          <p className="text-sm mt-1">
            Home / <span className="text-pink-500">{page}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
