import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import global_en from "../translations/eng/global.json";
import global_fr from "../translations/fre/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: true },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
