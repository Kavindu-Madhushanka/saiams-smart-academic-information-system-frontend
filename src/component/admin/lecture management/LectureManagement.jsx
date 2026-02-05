import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

import AddLecturerForm from "./AddLecturerForm";
import Sidebar from "../sidebar";

const LecturerManagement = () => {
  const [isAddLecturerFormOpen, setIsAddLecturerFormOpen] = useState(false);

  const [lectureData, setLectureData] = useState([]);

  const fetchLectur = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5104/api/Auth/getlecture",
      );
      setLectureData(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  useEffect(() => {
    fetchLectur();
  }, []);

  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      {/* Sidebar*/}
      <Sidebar />

      <main
        className={`flex-1 p-8 ml-64 overflow-y-auto transition-all duration-300 ${isAddLecturerFormOpen ? "blur-md pointer-events-none" : ""}`}
      >
        {/* Header*/}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="mb-1 text-3xl font-bold">Lecturer Management</h1>
            <p className="text-sm text-gray-400">
              Data management and monitoring of college lecturers can be done
              here.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#1a1c26] px-4 py-2 rounded-lg border border-gray-700 text-sm font-medium hover:bg-gray-800">
              <FaFileExport /> Export List
            </button>
            <button
              onClick={() => setIsAddLecturerFormOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <FaUserPlus /> Add New Lecturer
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#161922] p-4 rounded-t-xl border border-gray-800 flex justify-between gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute text-gray-500 left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name, ID number or email..."
              className="w-full bg-[#0f111a] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <select className="bg-[#0f111a] border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300">
            <option>Department: ICT</option>
            <option>Department: Engineering</option>
          </select>
          <button className="flex items-center gap-2 bg-[#0f111a] border border-gray-700 px-4 py-2 rounded-lg text-sm">
            <FaFilter /> Filters
          </button>
        </div>

        {/* Table Section  */}
        <div className="bg-[#161922] border-x border-b border-gray-800 rounded-b-xl overflow-hidden">
          <div className="max-h-[335px] overflow-y-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#1a1c26] text-gray-400 uppercase text-[10px] tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-6">No</th>
                  <th className="px-6 py-4">Staff ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Faculty</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone-No</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 ">
                {lectureData.map((lecturer, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-4">{idx + 1}</td>
                    <td className="px-6 py-4">{lecturer.staff_id}</td>
                    <td className="px-6 py-4">{lecturer.full_name}</td>
                    <td className="px-6 py-4">{lecturer.faculty}</td>
                    <td className="px-6 py-4">{lecturer.department}</td>
                    <td className="px-6 py-4">{lecturer.academic_role}</td>
                    <td className="px-6 py-4">{lecturer.email}</td>
                    <td className="px-6 py-4">{lecturer.phone_number}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3 text-gray-400">
                        <FaEdit
                          className="cursor-pointer hover:text-blue-400"
                          title="සංස්කරණය"
                        />
                        <FaTrash
                          className="cursor-pointer hover:text-red-400"
                          title="ඉවත් කරන්න"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 text-xs text-gray-500 border-t border-gray-800">
            <span>Showing 1 to 4 of 42 lecturers</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 text-white bg-blue-600 rounded">
                1
              </button>
              <button className="w-8 h-8 rounded hover:bg-gray-800">2</button>
              <button className="w-8 h-8 rounded hover:bg-gray-800">3</button>
            </div>
          </div>
        </div>
      </main>

      {isAddLecturerFormOpen && (
        <AddLecturerForm
          onClose={() => {
            setIsAddLecturerFormOpen(false);
            fetchLectur();
          }}
        />
      )}
    </div>
  );
};

export default LecturerManagement;
