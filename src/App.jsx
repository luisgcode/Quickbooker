import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import UserView from "./pages/UserView/UserView";
import NotFound from "./pages/404/NotFound";
import SignUp from "./pages/SignUp/SignUp";
import AdminLogin from "./components/AdminLogin/AdminLogin"; // Asegúrate de importar el componente
import AdminView from "./components/AdminView/AdminView"; // Asegúrate de importar el componente
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
