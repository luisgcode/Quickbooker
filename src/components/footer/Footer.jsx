import React from "react";

import { BiSupport } from "react-icons/bi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-footerColor p-sma_pad md:p-20  text-white">
      <nav className="flex flex-col  md:flex-row w-full gap-10 justify-between">
        {/* Support */}
        <div className=" ">
          <p className="font-semibold mb-6 flex gap-2">
            <BiSupport />
            Support
          </p>

          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/terms"> Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        {/* Discover */}
        <div className=" ">
          <p className="font-semibold mb-6 flex gap-2">
            <RiCompassDiscoverLine />
            Discover
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/spaces">Find a Space</a>
            </li>
            <li>
              <a href="/how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/reviews">Customer Reviews</a>
            </li>
          </ul>
        </div>
        {/* space */}
        <div className=" ">
          <p className="font-semibold mb-6 flex gap-2">
            <FaList />
            List your space
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">Become a Host</a>
            </li>
            <li>
              <a href="/host-guide">Hosting Guide</a>
            </li>
            <li>
              <a href="/safety">Safety & Security</a>
            </li>
            <li>
              <a href="/support">Host Support</a>
            </li>
          </ul>
        </div>
        {/* Social */}
        <div className=" ">
          <p className="font-semibold mb-6 flex gap-2">
            <FaMagnifyingGlass />
            Find us
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">Instagram</a>
            </li>
            <li>
              <a href="/host-guide">Linkedin</a>
            </li>
            <li>
              <a href="/safety">Youtube</a>
            </li>
            <li>
              <a href="/support">Facebook</a>
            </li>
          </ul>
        </div>
        {/* Accesibility */}
        <div className=" ">
          <p className="font-semibold mb-6 flex gap-2">
            <IoAccessibility />
            Accesibility
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">Languages</a>
            </li>
            <li>
              <a href="/host-guide">Contrast</a>
            </li>
            <li>
              <a href="/safety">Text Size</a>
            </li>
            <li>
              <a href="/support">Screen Reader</a>
            </li>{" "}
            <li>
              <a href="/support">Guides</a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className=" flex flex-col items-end gap-2 text-sm">
          <p className="font-semibold flex gap-2">
            <FaEnvelope />
            Contact
          </p>
          <p>help@quickobooker.com</p>
          <p>London, Ontario, Canada.</p>
          <p> + 1 (437) 669-1234</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
