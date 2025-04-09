import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const [t] = useTranslation("global");

  return (
    <section className="flex flex-col items-center w-full justify-center">
      <h1 className="mt-28">{t("notFound.title")}</h1>
      <p>{t("notFound.message")}</p>
    </section>
  );
};

export default NotFound;
