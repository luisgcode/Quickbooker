import React, { useState } from "react";
import { quickBookerLogo } from "../media";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogIn } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import "./navbar.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   Handle language change
  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  const [currentLanguage, setCurrentLanguage] = React.useState(i18n.language);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="text-sm top-nav text-center py-3 bg-gradient-to-r from-blueCompany to-blue-500 text-white font-bold">
        <p>{t("topBar.news")}</p>
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
            {currentLanguage === "en" ? (
              <button
                onClick={() => {
                  handleLanguage("sp");
                  setCurrentLanguage("sp");
                }}
              >
                SPA
              </button>
            ) : currentLanguage === "sp" ? (
              <button
                onClick={() => {
                  handleLanguage("fr");
                  setCurrentLanguage("fr");
                }}
              >
                FRA
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLanguage("en");
                  setCurrentLanguage("en");
                }}
              >
                ENG
              </button>
            )}
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
