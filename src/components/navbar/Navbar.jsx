import React, { useState } from "react";
import { quickBookerLogo } from "../media";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import ThemeToggle from "../Mode/ThemeToggle";

import "./navbar.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }

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
            <Link to="/">
              <img
                className="max-w-40"
                src={quickBookerLogo}
                alt="Company's logo"
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-6 items-center">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
            <ThemeToggle />
            <li className="text-sm">
              {currentLanguage === "en" ? (
                <button
                  className="flex items-center gap-1 text-blueCompany min-w-[45px]"
                  onClick={() => handleLanguage("fr")}
                >
                  <MdLanguage />
                  FRA
                </button>
              ) : (
                <button
                  className="flex items-center gap-1 text-blueCompany min-w-[45px]"
                  onClick={() => handleLanguage("en")}
                >
                  <MdLanguage />
                  ENG
                </button>
              )}
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
