import React, { useState } from "react";
import { MdEmail, MdLock, MdPerson, MdLocationCity } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [t] = useTranslation("global");
  const [selectedForm, setSelectedForm] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      navigate("/userview");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="dark:bg-[#212121] dark:text-[#e8e8e8]">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-[#e8e8e8] mb-8">
          {t("signUp.title")}
        </h2>

        {/* Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-2xl">
          <button
            onClick={() => setSelectedForm("client")}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedForm === "client"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/10"
                : "border-gray-200 dark:border-[#444] hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold dark:text-[#e8e8e8]">
              {t("signUp.clientOptionTitle")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-[#b0b0b0] mt-1">
              {t("signUp.clientOptionDescription")}
            </p>
          </button>

          <button
            onClick={() => setSelectedForm("business")}
            className={`flex-1 p-4 rounded-lg border-2 transition-all duration-200 ${
              selectedForm === "business"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/10"
                : "border-gray-200 dark:border-[#444] hover:border-blue-400"
            }`}
          >
            <h3 className="text-lg font-semibold dark:text-[#e8e8e8]">
              {t("signUp.ownerOptionTitle")}
            </h3>
            <p className="text-sm text-gray-600 dark:text-[#b0b0b0] mt-1">
              {t("signUp.ownerOptionDescription")}
            </p>
          </button>
        </div>

        {/* Forms */}
        <div className="w-full max-w-md">
          {selectedForm === "client" && (
            <div className="bg-white dark:bg-[#212121] rounded-lg shadow-sm p-6 animate-fadeIn">
              <form className="space-y-4" onSubmit={handleSignUp}>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#b0b0b0] mb-1">
                    {t("signUp.form.fullNameLabel")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdPerson className="h-5 w-5 text-gray-400 dark:text-[#b0b0b0]" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full rounded-md border border-gray-300 dark:border-[#444] py-2 px-3 bg-white dark:bg-[#212121] text-gray-900 dark:text-[#e8e8e8] placeholder-gray-400 dark:placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder={t("signUp.form.fullNamePlaceholder")}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#b0b0b0] mb-1">
                    {t("signUp.form.emailLabel")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdEmail className="h-5 w-5 text-gray-400 dark:text-[#b0b0b0]" />
                    </div>
                    <input
                      type="email"
                      className="pl-10 w-full rounded-md border border-gray-300 dark:border-[#444] py-2 px-3 bg-white dark:bg-[#212121] text-gray-900 dark:text-[#e8e8e8] placeholder-gray-400 dark:placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder={t("signUp.form.emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#b0b0b0] mb-1">
                    {t("signUp.form.passwordLabel")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdLock className="h-5 w-5 text-gray-400 dark:text-[#b0b0b0]" />
                    </div>
                    <input
                      type="password"
                      className="pl-10 w-full rounded-md border border-gray-300 dark:border-[#444] py-2 px-3 bg-white dark:bg-[#212121] text-gray-900 dark:text-[#e8e8e8] placeholder-gray-400 dark:placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder={t("signUp.form.passwordPlaceholder")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-[#b0b0b0] mb-1">
                    {t("signUp.form.cityLabel")}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdLocationCity className="h-5 w-5 text-gray-400 dark:text-[#b0b0b0]" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 w-full rounded-md border border-gray-300 dark:border-[#444] py-2 px-3 bg-white dark:bg-[#212121] text-gray-900 dark:text-[#e8e8e8] placeholder-gray-400 dark:placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-blueCompany focus:border-blueCompany"
                      placeholder={t("signUp.form.cityPlaceholder")}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blueCompany focus:ring-offset-2"
                >
                  {t("signUp.form.submitButton")}
                </button>
              </form>
            </div>
          )}

          {selectedForm === "business" && (
            <div className="bg-white dark:bg-[#212121] rounded-lg shadow-sm p-6 animate-fadeIn">
              <p className="text-lg text-gray-700 dark:text-[#b0b0b0]">
                {t("signUp.businessMessage")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignUp;
