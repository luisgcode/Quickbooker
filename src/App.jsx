import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homePage/Homepage";
import UserView from "./pages/userView/UserView";
import NotFound from "./pages/404/NotFound";
import SignUp from "./pages/signUp/SignUp";
import AdminLogin from "./components/adminLogin/AdminLogin"; // Asegúrate de importar el componente
import AdminView from "./components/adminView/AdminView"; // Asegúrate de importar el componente
import Footer from "./components/footer/Footer";

import Chatbot from "./components/chatBot/Chatbot";

function App() {
  return (
    <div className="dark:bg-darkBG dark:text-darkText">
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/userview" element={<UserView />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin-login" element={<AdminLogin />} />{" "}
        {/* Ruta para Admin Login */}
        <Route path="/admin-view" element={<AdminView />} />{" "}
        {/* Ruta para Admin View */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
