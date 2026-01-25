import React from "react";
import "./index.css";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import AdminDashboard from "./component/admin/AdminDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
