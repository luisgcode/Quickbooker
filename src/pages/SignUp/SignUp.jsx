import React, { useState } from "react";
import { MdEmail, MdLock, MdBusiness, MdPerson } from "react-icons/md";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedForm, setSelectedForm] = useState(null);

  return (
    <section className="">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {t("signUp.title")}
        </h2>

        {/* Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-2xl">
          <button
            onClick={() => setSelectedForm("client")}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedForm === "client"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold">
              {t("signUp.clientOptionTitle")}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {t("signUp.clientOptionDescription")}
            </p>
          </button>

          <button
            onClick={() => setSelectedForm("business")}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedForm === "business"
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold">
              {t("signUp.ownerOptionTitle")}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {t("signUp.ownerOptionDescription")}
            </p>
          </button>
        </div>

        {/* Forms Container */}
        <div className="w-full max-w-md">
          {/* Client Sign Up Form */}
          {selectedForm === "client" && (
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdPerson className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdEmail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:ring-offset-2"
                >
                  Sign Up as Client
                </button>
              </form>
            </div>
          )}

          {/* Business Owner Sign Up Form */}
          {selectedForm === "business" && (
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fadeIn">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdBusiness className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="Your Business Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdEmail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="business@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:ring-offset-2"
                >
                  Sign Up as Business Owner
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
