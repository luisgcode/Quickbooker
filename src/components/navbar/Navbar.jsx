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
          <button className="flex items-center gap-2">
            Sign In <FaArrowRightToBracket />
          </button>
        </div>
        <div className=" flex gap-10">
          <button className="flex items-center gap-2">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
