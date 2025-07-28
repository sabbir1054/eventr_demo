"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const navVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NavBar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/eventBooking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="w-full flex items-center justify-between px-8 md:px-20 py-6 absolute top-0 left-0 z-20"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-white font-bold text-2xl flex items-center">
          <svg width="32" height="32" viewBox="0 0 32 32" className="mr-2">
            <circle cx="16" cy="16" r="16" fill="#f92d7f" />
            <text
              x="16"
              y="22"
              textAnchor="middle"
              fontSize="16"
              fill="#fff"
              fontFamily="Arial"
            >
              N
            </text>
          </svg>
          <span className="text-[#f92d7f] ml-1">Nofakha</span>
        </span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-8 text-white font-semibold text-lg">
        {menuItems.map((item, i) => (
          <motion.li
            key={item.href}
            variants={menuItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 * i }}
            whileHover={{ scale: 1.1, color: "#f92d7f" }}
          >
            <Link href={item.href}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Login/Register Button */}
      <motion.div
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5, duration: 0.4 },
        }}
      >
        <Link href="/login">
          <Button className="bg-[#f92d7f] text-white hover:bg-[#e91e63] transition px-6 py-2 rounded-lg cursor-pointer">
            Login / Register
          </Button>
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
