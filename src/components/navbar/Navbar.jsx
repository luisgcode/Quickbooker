import React, { useState } from "react";
import { quickBookerLogo } from "../media";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [isHelpCenterOpen, setIsHelpCenterOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleHelpCenter = () => {
    setIsHelpCenterOpen(!isHelpCenterOpen);
    setIsLanguageOpen(false); // Close the other dropdown
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
    setIsHelpCenterOpen(false); // Close the other dropdown
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="text-sm top-nav text-center py-3 bg-gradient-to-r from-blueCompany to-blue-500 text-white font-bold">
        🎉🎉Today's the day! Join the grand opening celebration at
        <b className="underline "> Carlo's Baker Toasted </b> for an
        unforgettable experience. 🎉🎉
        <a
          href="#"
          className="ml-2 bg-white text-blueCompany px-3 py-1 rounded-full   transition duration-300"
        >
          More information
        </a>
        <button className="ml-2 text-white hover:text-gray-200 transition duration-300">
          &times;
        </button>
      </div>

      {/* Main Navigation */}
      <nav>
        <div className="p-sma_pad navigation flex items-center justify-between md:p-mid_pad">
          <div className="logo">
            <img
              className="max-w-40"
              src={quickBookerLogo}
              alt="Company's logo"
            />
          </div>
          <ul className="hidden md:flex gap-8">
            <div className="relative">
              <button
                className="flex items-center gap-2  opacity-75"
                onClick={toggleLanguage}
              >
                ENG <FaChevronDown />
              </button>
              {isLanguageOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    English
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Spanish
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    French
                  </a>
                </div>
              )}
            </div>
            <button className="flex items-center gap-1 text-blueCompany font-semibold">
              Log in <IoLogIn />
            </button>
            <button className="flex items-center gap-1 text-blueCompany font-semibold">
              Sign Up <FaUserCheck />
            </button>
          </ul>
          {/* Hamburger Menu Button */}
          <button
            className="text-4xl text-blueCompany md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a className="nav-lins block" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-lins block" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-lins block" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="started-btn bg-blueCompany text-white py-3 px-4 rounded-full block text-center"
                  href="#"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
