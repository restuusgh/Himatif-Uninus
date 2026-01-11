import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121B2F] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group ml-6 sm:ml-20">
          <img src="HIMATIF.png" alt="Logo HIMATIF" className="w-15 h-15 sm:w-15 sm:h-15 object-contain rounded-lg p-1"
          whileHover={{ rotate:5, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="flex flex-col">
            <span className="font-bold text-white text-sm sm:text-lg">HIMATIF</span>
            <span className="text-xs text-slate-400 hidden sm:block">Glory Glory Glory</span>
        </div>
          </Link>

          {/* Menu Desktop */}


<div className="font-bold hidden md:flex space-x-6 mr-2 lg:mr-16">
  <NavLink
    to="/home"
    className={({ isActive }) =>
      `relative pb-1 transition-all
       hover:text-white
       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all
       ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `relative pb-1 transition-all
       hover:text-white
       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all
       ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`
    }
  >
    About
  </NavLink>

  <NavLink
    to="/makrab"
    className={({ isActive }) =>
      `relative pb-1 transition-all
       hover:text-white
       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all
       ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`
    }
  >
    Program
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `relative pb-1 transition-all
       hover:text-white
       after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all
       ${isActive ? "text-white after:w-full" : "after:w-0 hover:after:w-full"}`
    }
  >
    Contact
  </NavLink>
</div>


          {/* Button Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-2">
          <a href="#" className="block hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block hover:text-gray-200">
            About
          </a>
          <Link to="/makrab" className="hover:text-gray-200 font-semibold">
            Program
          </Link>
          <a href="#" className="block hover:text-gray-200">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
