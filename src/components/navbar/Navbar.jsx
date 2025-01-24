import React from "react";
import { heroIllustration, quickBookerLogo } from "../media";

const Navbar = () => {
  return (
    <nav className=" ">
      <div className="   ">
        {/* Logo */}
        <div className=" ml-20 ">
          <img src={quickBookerLogo} alt="Company logo" className="max-w-60" />
        </div>

        {/* Links */}
        <div className="  ">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#use-cases" className="hover:underline">
            Use Cases
          </a>
          <a href="#developers" className="hover:underline">
            Developers
          </a>{" "}
          {/* CTA Buttons */}
          <div className="space-x-4">
            <button className="bg-btnBgColor border border-white px-4 py-2 rounded  ">
              Log In
            </button>
            <button className="bg-white px-4 py-2 rounded text-btnBgColor uppercase ">
              Sign UP
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className=" ">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
