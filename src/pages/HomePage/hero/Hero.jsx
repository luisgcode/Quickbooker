import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const popularSearches = [
    t("hero.popularSearches.wedding"),
    t("hero.popularSearches.conference"),
    t("hero.popularSearches.garden"),
    t("hero.popularSearches.dining"),
    t("hero.popularSearches.bars"),
  ];

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate("/userview");
    }
  };

  return (
    <header>
      <div className="flex gap-10 flex-col p-sma_pad md:py-[50px] md:px-[80px] md:flex-row items-center">
        <div className="flex flex-col gap-5">
          <h1>
            {t("hero.title.part1")}
            <span className="text-blueCompany">
              {t("hero.title.highlight")}{" "}
            </span>
            {t("hero.title.part2")}
          </h1>
          <p className="max-w-[50ch]">{t("hero.description")}</p>
        </div>

        <div className="w-full flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute top-5 left-3 opacity-30" />
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              className="w-full px-8 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>

          {/* Popular Searches */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-gray-500">
              {t("hero.popularTitle")}
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
                  onClick={() => navigate("/userview")}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
