import { Link } from "react-router-dom";
import React from "react";
import logoimage from "../../assets/universitylogo.jpg";
import {
  FaUserCog,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";
import UserCard from "./UserCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] text-white flex flex-col items-center py-10 px-4">
      <div className="flex flex-col items-center mb-8 ">
        <img
          src={logoimage}
          alt="University Logo"
          className="w-24 h-24 md:w-32 md:h-32 mb-8 object-contain"
        ></img>
        <h2 className="text-xl md:text-3xl font-semibold tracking-widest uppercase border-b border-white/20 pb-2">
          UNIVERSITY OF VAVUNIYA
        </h2>
      </div>
      <div className="text-center mb-16 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          SMART ACADEMIC INFORMATION AND <br className="hidden md:block" />{" "}
          ATTENDANCE MONITORING SYSTEM (SAIAMS)
        </h1>

        <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          Efficiently managing academic data and attendance records for the
          university community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl px-6">
        <Link to="/login?role=Admin">
          <UserCard title="ADMIN" icon={<FaUserCog size={50} />} />
        </Link>

        <Link to="/login?role=Student">
          <UserCard title="STUDENT" icon={<FaGraduationCap size={50} />} />
        </Link>

        <Link to="/login?role=Lecture">
          <UserCard title="LECTURE" icon={<FaChalkboardTeacher size={50} />} />
        </Link>
      </div>

      <footer className="mt-auto pt-10 text-xs text-gray-400 underline">
        © 2025 University of Vavuniya. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
