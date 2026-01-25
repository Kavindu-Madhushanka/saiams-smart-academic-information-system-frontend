import React from "react";
import "./index.css";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import AdminDashboard from "./component/admin/AdminDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentManagement from "./component/admin/student management/StudentManagement";
import AddStudentForm from "./component/admin/student management/AddStudentForm";
import LectureManagement from "./component/admin/lecture management/LectureManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/studentmanagement" element={<StudentManagement />} />
        <Route path="/addstudentform" element={<AddStudentForm />} />
        <Route path="/lecturemanagement" element={<LectureManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
