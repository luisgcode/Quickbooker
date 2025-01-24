import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">OnSched</div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
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
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="space-x-4">
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-700 transition">
            Log In
          </button>
          <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
            Request Demo
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
