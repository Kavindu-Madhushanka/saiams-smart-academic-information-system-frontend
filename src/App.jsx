import React from "react";
import "./index.css";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import AdminDashboard from "./component/admin/AdminDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentManagement from "./component/admin/student management/StudentManagement";
import AddStudentForm from "./component/admin/student management/AddStudentForm";
import LectureManagement from "./component/admin/lecture management/LectureManagement";
import AddLecturerForm from "./component/admin/lecture management/AddLecturerForm";
import SubjectManagement from "./component/subject management/SubjectManagement";
import CreateSubjectForm from "./component/subject management/CreateSubjectForm";
import AssignSubjectForm from "./component/subject management/AssignSubjectForm";

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
        <Route path="/addlectureform" element={<AddLecturerForm />} />
        <Route path="/subjectmanagement" element={<SubjectManagement />} />
        <Route path="/createsubjecform" element={<CreateSubjectForm />} />
        <Route path="/assignsubjectform" element={<AssignSubjectForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
