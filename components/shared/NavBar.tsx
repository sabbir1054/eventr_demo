import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-20 py-6 absolute top-0 left-0 z-20">
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
        <li>
          <Link href="/" className="hover:text-[#f92d7f]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[#f92d7f]">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-[#f92d7f]">
            Services
          </Link>
        </li>
        <li>
          <Link href="/ourWorks" className="hover:text-[#f92d7f]">
            Our Work
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="hover:text-[#f92d7f]">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/eventBooking" className="hover:text-[#f92d7f]">
            Booking
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-[#f92d7f]">
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Link href="/login">
          <Button className="bg-[#f92d7f] text-white hover:bg-[#e91e63] transition px-6 py-2 rounded-lg">
            Login / Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
