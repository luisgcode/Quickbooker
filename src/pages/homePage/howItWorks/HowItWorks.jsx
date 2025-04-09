import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  const [t] = useTranslation("global");

  const steps = [
    {
      id: 1,
      title: t("howItWorks.steps.browse.title"),
      description: t("howItWorks.steps.browse.description"),
      icon: <FaSearch className="text-primary" />,
    },
    {
      id: 2,
      title: t("howItWorks.steps.availability.title"),
      description: t("howItWorks.steps.availability.description"),
      icon: <FaCalendarAlt className="text-primary" />,
    },
    {
      id: 3,
      title: t("howItWorks.steps.book.title"),
      description: t("howItWorks.steps.book.description"),
      icon: <FaCheckCircle className="text-primary" />,
    },
  ];

  return (
    <div className="p-sma_pad md:p-mid_pad">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white flex flex-col items-center border border-gray-200 rounded-lg hover:border-blue-500 transition-colors cursor-pointer py-6 px-2 text-center"
          >
            <div className="text-xl my-2 text-blueCompany">{step.icon}</div>
            <h4 className="text-sm font-semibold mb-4">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
