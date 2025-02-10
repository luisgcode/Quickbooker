import React, { useState } from "react";
import { quickBookerLogo } from "../media";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

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
          <ul className="hidden md:flex gap-6 items-center">
            <li className="text-sm">
              {currentLanguage === "en" ? (
                <button
                  className="flex items-center gap-1 border-2 border-blueCompany rounded-md px-2 py-2 text-blueCompany min-w-[68px]"
                  onClick={() => {
                    handleLanguage("fr");
                    setCurrentLanguage("fr");
                  }}
                >
                  <MdLanguage />
                  FRA
                </button>
              ) : currentLanguage === "fr" ? (
                <button
                  className="flex items-center gap-1 border-2 border-blueCompany rounded-md px-2 py-2 text-blueCompany min-w-[68px]"
                  onClick={() => {
                    handleLanguage("sp");
                    setCurrentLanguage("sp");
                  }}
                >
                  <MdLanguage />
                  SPA
                </button>
              ) : (
                <button
                  className="flex items-center gap-1 border-2 border-blueCompany rounded-md px-2 py-2 text-blueCompany min-w-[68px]"
                  onClick={() => {
                    handleLanguage("en");
                    setCurrentLanguage("en");
                  }}
                >
                  <MdLanguage />
                  ENG
                </button>
              )}
            </li>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign up</Link>
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
