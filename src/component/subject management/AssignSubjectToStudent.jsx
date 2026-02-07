import Sidebar from "../admin/sidebar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const AssignSubjectToStudent = () => {
  const [subject, setsubject] = useState([]);
  useEffect(() => {
    const fetchinitialdata = async () => {
      try {
        const subReg = await axios.get(
          "http://localhost:5104/api/Auth/getSubjectIDandName",
        );
        setsubject(subReg.data);
      } catch (err) {
        console.error("Data fetching failed", err);
      }
    };
    fetchinitialdata();
  }, []);
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 ml-64 overflow-y-auto">
        <h2 className="mb-1 text-3xl font-bold">Assign Subject To Student</h2>
        <p className="mt-2 mb-8 text-sm text-gray-400">
          Manage and batch assign courses to registered students.
        </p>

        <div className="flex gap-6 items-end bg-[#111827]/50 p-5 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
          {/* Select Subject */}
          <div className="relative w-64">
            <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-2 ml-1">
              Select Subject
            </label>
            <div className="relative group">
              <select className="w-full pl-4 pr-10 py-2.5 bg-[#1a1c26] border border-gray-700 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-sm text-gray-300 cursor-pointer">
                <option value="" disabled selected hidden>
                  Choose Subject
                </option>
                {subject.map((sub) => (
                  <option key={sub.id} value={sub.subject_Code}>
                    {sub.subject_Code} - {sub.subject_Name}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown
                className="absolute text-gray-500 transition-colors -translate-y-1/2 pointer-events-none right-3 top-1/2 group-focus-within:text-blue-500"
                size={20}
              />
            </div>
          </div>

          {/* Select Academic Year */}
          <div className="relative w-64">
            <label className="block text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-2 ml-1">
              Academic Year
            </label>
            <div className="relative group">
              <select className="w-full pl-4 pr-10 py-2.5 bg-[#1a1c26] border border-gray-700 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-sm text-gray-300 cursor-pointer">
                <option value="" disabled selected hidden>
                  Choose Year
                </option>
                <option>2023/2024</option>
                <option>2024/2025</option>
              </select>
              <MdKeyboardArrowDown
                className="absolute text-gray-500 transition-colors -translate-y-1/2 pointer-events-none right-3 top-1/2 group-focus-within:text-blue-500"
                size={20}
              />
            </div>
          </div>

          <button className="px-6 py-2 mb-1 ml-auto text-sm font-bold text-white transition-all bg-blue-600 shadow-lg hover:bg-blue-700 rounded-xl shadow-blue-900/20">
            Apply Filters
          </button>
        </div>

        {/* Table Container */}
        <div className="max-h-[450px] overflow-y-auto overflow-x-auto custom-scrollbar mt-6 bg-[#111827]/30 rounded-xl border border-gray-800">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#1a1c26] text-gray-400 uppercase text-[10px] tracking-wider sticky top-0 z-10">
              <tr>
                <th className="px-6 py-5 text-center">Assign</th>
                <th className="px-6 py-4">Reg-No</th>
                <th className="px-6 py-4">Subject Code</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Semester</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              <tr className="transition-colors hover:bg-white/5">
                <td className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    className="text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4">REG/2021/001</td>
                <td className="px-6 py-4 text-blue-400">TICT1232</td>
                <td className="px-6 py-4">Level 1</td>
                <td className="px-6 py-4 text-gray-400">Semester 1</td>
                <td className="px-6 py-4">Theory</td>
                <td className="px-6 py-4 text-center text-gray-500">---</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AssignSubjectToStudent;
