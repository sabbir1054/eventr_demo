const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 md:px-20 py-6 absolute top-0 left-0 z-20">
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
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            Event<span className="ml-1">&#9662;</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            Portfolio<span className="ml-1">&#9662;</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            Pages<span className="ml-1">&#9662;</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            News
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-[#f92d7f]">
            Contact
          </a>
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-6">
        <button className="text-white text-2xl hover:text-[#f92d7f]">
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" strokeWidth="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
          </svg>
        </button>
        <button className="text-white text-2xl hover:text-[#f92d7f] md:hidden">
          <svg width="28" height="28" fill="none" stroke="currentColor">
            <rect y="6" width="28" height="2" rx="1" fill="currentColor" />
            <rect y="13" width="28" height="2" rx="1" fill="currentColor" />
            <rect y="20" width="28" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
