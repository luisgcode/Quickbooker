import React from "react";
import { useTranslation } from "react-i18next";
import { BiSupport } from "react-icons/bi";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { FaList, FaMagnifyingGlass, FaEnvelope } from "react-icons/fa6";
import { IoAccessibility } from "react-icons/io5";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="bg-footerColor p-sma_pad md:p-20 text-white dark:border-t-2">
      <nav className="flex flex-col md:flex-row w-full gap-10 justify-between">
        {/* Support */}
        <div>
          <p className="font-semibold mb-6 flex gap-2">
            <BiSupport />
            {t("footer.support.title")}
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/faq">{t("footer.support.faq")}</a>
            </li>
            <li>
              <a href="/contact">{t("footer.support.contact")}</a>
            </li>
            <li>
              <a href="/terms">{t("footer.support.terms")}</a>
            </li>
            <li>
              <a href="/privacy">{t("footer.support.privacy")}</a>
            </li>
          </ul>
        </div>

        {/* Discover */}
        <div>
          <p className="font-semibold mb-6 flex gap-2">
            <RiCompassDiscoverLine />
            {t("footer.discover.title")}
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/spaces">{t("footer.discover.spaces")}</a>
            </li>
            <li>
              <a href="/how-it-works">{t("footer.discover.how")}</a>
            </li>
            <li>
              <a href="/pricing">{t("footer.discover.pricing")}</a>
            </li>
            <li>
              <a href="/reviews">{t("footer.discover.reviews")}</a>
            </li>
          </ul>
        </div>

        {/* List your space */}
        <div>
          <p className="font-semibold mb-6 flex gap-2">
            <FaList />
            {t("footer.list.title")}
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">{t("footer.list.host")}</a>
            </li>
            <li>
              <a href="/host-guide">{t("footer.list.guide")}</a>
            </li>
            <li>
              <a href="/safety">{t("footer.list.safety")}</a>
            </li>
            <li>
              <a href="/support">{t("footer.list.support")}</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <p className="font-semibold mb-6 flex gap-2">
            <FaMagnifyingGlass />
            {t("footer.find.title")}
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">{t("footer.find.instagram")}</a>
            </li>
            <li>
              <a href="/host-guide">{t("footer.find.linkedin")}</a>
            </li>
            <li>
              <a href="/safety">{t("footer.find.youtube")}</a>
            </li>
            <li>
              <a href="/support">{t("footer.find.facebook")}</a>
            </li>
          </ul>
        </div>

        {/* Accessibility */}
        <div>
          <p className="font-semibold mb-6 flex gap-2">
            <IoAccessibility />
            {t("footer.accessibility.title")}
          </p>
          <ul className="text-sm flex flex-col gap-2">
            <li>
              <a href="/host">{t("footer.accessibility.languages")}</a>
            </li>
            <li>
              <a href="/host-guide">{t("footer.accessibility.contrast")}</a>
            </li>
            <li>
              <a href="/safety">{t("footer.accessibility.text")}</a>
            </li>
            <li>
              <a href="/support">{t("footer.accessibility.reader")}</a>
            </li>
            <li>
              <a href="/support">{t("footer.accessibility.guides")}</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-end gap-2 text-sm">
          <p className="font-semibold flex gap-2">
            <FaEnvelope />
            {t("footer.contact.title")}
          </p>
          <p>{t("footer.contact.email")}</p>
          <p>{t("footer.contact.location")}</p>
          <p>{t("footer.contact.phone")}</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
