import React from "react";
import { quickBookerLogo } from "../media";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className=" text-sm top-nav px-4 md:px-[50px] py-2 flex items-center justify-between  ">
        <div>
          <button className="flex items-center gap-2 opacity-70 text-blueCompany">
            Sign In <FaArrowRightToBracket />
          </button>
        </div>
        <div className="flex gap-10">
          <button className="flex items-center gap-2 opacity-70">
            Help Center <FaChevronDown />
          </button>
          <button className="flex items-center gap-2 font-semibold">
            ENG <FaChevronDown />
          </button>
        </div>
      </div>
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
          {/* Hamburguer menu */}
          <button className="text-4xl text-blueCompany md:hidden">
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
