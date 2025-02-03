import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import LoginUserPage from "./pages/LoginUserPage/LoginUserPage";
import LoginAdminPage from "./pages/LoginAdminPage/LoginAdminPage";
import NotFound from "./pages/404/NotFound";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login-user" element={<LoginUserPage />} />
        <Route path="/login-admin" element={<LoginAdminPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
