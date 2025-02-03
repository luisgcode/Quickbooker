import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/HomePage/Homepage";
import LoginUserPage from "./pages/LoginUserPage/LoginUserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginUserPage />} />
      </Routes>
    </div>
  );
}

export default App;
