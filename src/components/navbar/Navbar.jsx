import React from "react";
import { heroIllustration, quickBookerLogo } from "../media";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";

import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className=" text-sm top-nav px-[50px] py-2 flex items-center justify-between  ">
        <div>
          <button className="flex items-center gap-2 opacity-70">
            Sign In <FaArrowRightToBracket />
          </button>
        </div>
        <div className=" flex gap-10">
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
          <ul className="flex gap-8">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
