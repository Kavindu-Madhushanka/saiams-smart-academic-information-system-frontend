import React from "react";
import Sidebar from "../sidebar";
import SubjectCardAttendence from "./SubjectCardAttedence";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
const AttendenceDashboard = () => {
  const subjects = [
    {
      id: "ICT1024",
      name: "Object Oriented Programming",
      level: "Level 1",
      semester: "Semester 2",
      type: "Theory",
      students: 45,
      time: "Tue, 10:00 AM",
      status: "ACTIVE",
    },
    {
      id: "ICT2045",
      name: "Database Management Systems",
      level: "Level 2",
      semester: "Semester 1",
      type: "Practical",
      students: 38,
      time: "Mon, 01:30 PM",
      status: "ACTIVE",
    },
    {
      id: "ICT3089",
      name: "Advanced Web Security",
      level: "Level 3",
      semester: "Semester 1",
      type: "Theory",
      students: 52,
      time: "Wed, 09:00 AM",
      status: "SCHEDULED",
    },
    {
      id: "ICT4012",
      name: "AI & Machine Learning",
      level: "Level 4",
      semester: "Semester 1",
      type: "Theory",
      students: 29,
      time: "Thu, 11:00 AM",
      status: "ACTIVE",
    },
    {
      id: "ICT3055",
      name: "Software Engineering Project",
      level: "Level 3",
      semester: "Semester 2",
      type: "Practical",
      students: 35,
      time: "Fri, 02:00 PM",
      status: "ACTIVE",
    },
    {
      id: "ICT1002",
      name: "Discrete Mathematics",
      level: "Level 1",
      semester: "Semester 1",
      type: "Theory",
      students: 60,
      time: "Mon, 08:30 AM",
      status: "COMPLETED",
    },
  ];

  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />

      <main className="flex-1 p-8 ml-64 overflow-y-auto">
        {/* Top Navigation */}
        <header className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-semibold opacity-80">
            Attendance Management
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative">
              <IoSearch className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Global search..."
                className="bg-[#1e293b] border border-gray-800 rounded-lg py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
            <FaBell className="text-gray-400 transition-colors cursor-pointer hover:text-white" />
            <IoIosHelpCircle className="text-gray-400 transition-colors cursor-pointer hover:text-white" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="mb-10">
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight">
            Subject Attendance
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            Manage and mark student attendance for various ICT department
            courses in real-time.
          </p>
        </section>

        {/* Filter Controls */}
        <div className="bg-[#111827]/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-800 flex flex-wrap gap-4 items-center mb-10 shadow-sm">
          <div className="relative flex-1 min-w-[300px]">
            <IoSearch className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search subjects by name or code..."
              className="bg-[#1f2937] border border-gray-700 rounded-xl py-3 pl-12 pr-4 w-full focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <select className="bg-[#1f2937] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 outline-none hover:bg-gray-700 cursor-pointer transition-colors">
            <option>Level: All</option>
          </select>

          <select className="bg-[#1f2937] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 outline-none hover:bg-gray-700 cursor-pointer transition-colors">
            <option>Semester: All</option>
          </select>

          <select className="bg-[#1f2937] border border-gray-700 text-gray-300 rounded-xl px-4 py-3 outline-none hover:bg-gray-700 cursor-pointer transition-colors">
            <option>Type: All</option>
          </select>

          <button className="bg-[#1e293b] p-3 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all">
            <FaFilter className="w-5 h-5 text-blue-500" />
          </button>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCardAttendence key={subject.id} subject={subject} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AttendenceDashboard;
