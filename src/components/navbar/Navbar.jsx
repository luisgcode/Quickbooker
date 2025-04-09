import React, { useState, useEffect } from "react";
import { quickBookerLogo, quickBookerLogoWhite } from "../media";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import ThemeToggle from "../Mode/ThemeToggle";

import "./navbar.css";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta si el modo dark está activo
  useEffect(() => {
    const root = window.document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDarkMode(root.classList.contains("dark"));
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    setIsDarkMode(root.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Top bar message */}
      <div className="text-sm top-nav text-center py-3 bg-gradient-to-r from-blueCompany to-blue-500 text-white font-bold">
        <p>{t("topBar.news")}</p>
      </div>

      {/* Main Navigation */}
      <nav>
        <div className="p-sma_pad navigation flex items-center justify-between md:p-mid_pad">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                className="max-w-40"
                src={isDarkMode ? quickBookerLogoWhite : quickBookerLogo}
                alt="Company's logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <Link
              to="/"
              className="text-gray-800 dark:text-white hover:underline"
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/signup"
              className="text-gray-800 dark:text-white hover:underline"
            >
              {t("navbar.signup")}
            </Link>
            <ThemeToggle />
            <li className="text-sm">
              {currentLanguage === "en" ? (
                <button
                  className="flex items-center gap-1 text-blueCompany dark:text-white min-w-[45px]"
                  onClick={() => handleLanguage("fr")}
                >
                  <MdLanguage />
                  {t("navbar.language.fra")}
                </button>
              ) : (
                <button
                  className="flex items-center gap-1 text-blueCompany dark:text-white min-w-[45px]"
                  onClick={() => handleLanguage("en")}
                >
                  <MdLanguage />
                  {t("navbar.language.eng")}
                </button>
              )}
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="text-4xl text-blueCompany dark:text-white md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <RxHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <Link
                  to="/"
                  className="nav-lins block text-gray-800 dark:text-white"
                >
                  {t("navbar.home")}
                </Link>
              </li>
              <li>
                <a
                  className="nav-lins block text-gray-800 dark:text-white"
                  href="#features"
                >
                  {t("navbar.features")}
                </a>
              </li>
              <li>
                <a
                  className="nav-lins block text-gray-800 dark:text-white"
                  href="#pricing"
                >
                  {t("navbar.pricing")}
                </a>
              </li>
              <li>
                <a
                  className="started-btn bg-blueCompany text-white py-3 px-4 rounded-full block text-center"
                  href="#signup"
                >
                  {t("navbar.getStarted")}
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
