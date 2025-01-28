import React, { useState } from "react";
import { quickBookerLogo } from "../media";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
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
      {/* Top Navbar */}
      <div className="text-sm top-nav px-4 md:px-[50px] py-2 flex items-center justify-between">
        <div>
          <button className="flex items-center gap-2 opacity-70 text-blueCompany">
            Sign In <FaArrowRightToBracket />
          </button>
        </div>
        <div className="flex gap-10">
          <div className="relative">
            <button
              className="flex items-center gap-2 opacity-70"
              onClick={toggleHelpCenter}
            >
              Help Center <FaChevronDown />
            </button>
            {isHelpCenterOpen && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  FAQ
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Contact Support
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Documentation
                </a>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 font-semibold"
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
              </div>
            )}
          </div>
        </div>
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
            <li>
              <a className="nav-lins" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-lins" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="nav-lins" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a
                className="started-btn bg-blueCompany text-white py-3 px-4 rounded-full"
                href="#"
              >
                Get Started
              </a>
            </li>
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
