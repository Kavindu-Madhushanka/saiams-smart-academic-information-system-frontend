import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import logoimage from "../../assets/universitylogo.jpg";
import { FaRegUser } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  FaUserCog,
  FaGraduationCap,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Login = ({ icon, title }) => {
  const [searchparam] = useSearchParams();
  const role = searchparam.get("role");
  const roleIcon = {
    Admin: <FaUserCog size={24} />,
    Student: <FaGraduationCap size={24} />,
    Lecture: <FaChalkboardTeacher size={24} />,
  };
  const { showpassword, setpassword } = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans md:flex-row">
      {/*left side blue section*/}
      <div className="md:w-5/12 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] flex flex-col items-center justify-center text-white p-10  overflow-hidden">
        <div className="flex flex-col items-center gap-y-6">
          <img src={logoimage} className="w-24 h-24 " />
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tighter uppercase">
              SAIAMS
            </h1>
            <p className="max-w-xs pt-4 mx-auto text-lg font-medium leading-tight text-blue-100">
              Efficiently managing academic data and attendance records for the
              university community
            </p>
          </div>
          <div className="w-16 h-1 bg-[#facc15] mx-auto my-8 rounded-full"></div>
          <p className="text-xs tracking-[0.3em] uppercase opacity-80">
            University Of Vavuniya
          </p>
        </div>
      </div>
      {/* right side form section*/}
      <div className="relative flex flex-col justify-center px-8 py-12 bg-white md:w-7/12 md:px-24">
        <div className="w-full max-w-md mx-auto">
          <h2 className="mb-2 text-4xl font-bold text-gray-900">
            {role} Login
          </h2>
          <p className="mb-10 text-gray-500">
            Please enter your details to access your dashboard.
          </p>
          <div className="flex items-center justify-center w-12 h-12 -mt-3 rounded-full bg-slate-300">
            {roleIcon[role]}
          </div>
          {/*user input*/}
          <form className="space-y-6">
            <div>
              <label className="block pt-2 mb-2 text-sm font-bold text-gray-700">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4c1d95]">
                  <FaRegUser size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1a36cc]/20 focus:border-[#4c1d95] outline-none transition-all text-gray-900"
                />
              </div>
              <div>
                <label className="block pt-2 mb-2 text-sm font-bold text-gray-700">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4c1d95]">
                    <RiLockPasswordLine size={24} />
                  </div>
                  <input
                    type={showpassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#1a36cc]/20 focus:border-[#4c1d95] outline-none transition-all text-gray-900"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4c1d95] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#1e1b4b] transform active:scale-[0.98] transition-all shadow-lg shadow-blue-700/20"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
