import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; //  useNavigate Import Karo
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/bimt_logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); //  React Router ka navigation hook

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle navigation & close menu properly
  const handleMobileNavClick = (path) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    navigate(path); // Page navigate bhi hoga aur menu band bhi hoga
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-zinc-950 z-50 p-1 marquee hover:animate-paused overflow-hidden h-12 flex justify-between items-center px-4 shadow-md">
        <p className="text-white hover:animate-paused text-md font-bold animate-marquee">
          Admission Open For 2025-26
          <Link to="/apply">
            <button className="bg-blue-500 rounded-lg shadow-lg py-1 px-4 ml-4 cursor-pointer">
              Apply Now
            </button>
          </Link>
        </p>
      </header>

      <nav className="fixed top-12 left-0 w-full bg-white shadow-md z-50 border-b-2 p-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold">
            <img src={Logo} alt="Logo" className="w-28" />
          </Link>
          
          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

           {/* Desktop Menu */}
           <ul className="hidden lg:flex space-x-10 items-center">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-500 focus:outline-none"
              >
                Courses ▼
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg z-50">
                  <li><Link to="/courses" className="block px-4 py-2 hover:bg-gray-200">Courses</Link></li>
                  <li><Link to="/courses/bca" className="block px-4 py-2 hover:bg-gray-200">BCA</Link></li>
                  <li><Link to="/courses/app-development" className="block px-4 py-2 hover:bg-gray-200">BBA</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/administration" className="hover:text-blue-500">Administration</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-500">Gallery</Link></li>
            <li><Link to="/faculties" className="hover:text-blue-500">Faculties</Link></li>
          </ul>
       

          {/* Mobile Menu */}
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden z-50`}
          >
            <button
              className="absolute top-4 right-4 text-2xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>
            <ul className="flex flex-col items-center mt-16 space-y-6">
              <li>
                <button onClick={() => handleMobileNavClick("/")} className="hover:text-blue-500">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleMobileNavClick("/about")} className="hover:text-blue-500">
                  About
                </button>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:text-blue-500 focus:outline-none"
                >
                  Courses ▼
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 w-48 bg-white text-black shadow-lg z-50 relative">
                    <li>
                      <button onClick={() => handleMobileNavClick("/courses")} className="block px-4 py-2 hover:bg-gray-200">
                        Courses
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMobileNavClick("/courses/bca")} className="block px-4 py-2 hover:bg-gray-200">
                        BCA
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleMobileNavClick("/courses/app-development")} className="block px-4 py-2 hover:bg-gray-200">
                        BBA
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => handleMobileNavClick("/administration")} className="hover:text-blue-500">
                  Administration
                </button>
              </li>
              <li>
                <button onClick={() => handleMobileNavClick("/gallery")} className="hover:text-blue-500">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleMobileNavClick("/faculties")} className="hover:text-blue-500">
                  Faculties
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
