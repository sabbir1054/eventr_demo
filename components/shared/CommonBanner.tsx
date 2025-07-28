"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Image from "next/image";

const CommonBanner = ({ page }: any) => {
  return (
    <div>
      <motion.div
        className="relative w-full h-100"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Background Image */}
        <Image
          src="/common_banner.png"
          alt="Banner"
          fill
          className="object-cover"
        />

        {/* Overlay Content */}
        <motion.div
          className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {page}
          </motion.h2>

          <motion.p
            className="text-sm mt-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Home / <span className="text-pink-500">{page}</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CommonBanner;
