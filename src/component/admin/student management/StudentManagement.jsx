import Sidebar from "../sidebar";
import { FaFileExport } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import AddStudentForm from "./AddStudentForm";
import axios from "axios";

const StudentManagement = () => {
  const [isAddStudentFormOpen, setIsAddStudentFormOpen] = useState(false);
  const [students, setStudent] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5104/api/Auth/getStudent",
      );
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main
        className={`flex-1 p-8 ml-64 overflow-y-auto transition-all duration-300 ${isAddStudentFormOpen ? "blur-md pointer-events-none" : ""}`}
      >
        {/* header section */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="mb-1 text-3xl font-bold">Student Management</h1>
            <p className="text-sm text-gray-400">
              Manage, filter and monitor student enrollments across all academic
              years.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-[#1a1c26] px-4 py-2 rounded-lg border border-gray-700 text-sm font-medium hover:bg-gray-800">
              <FaFileExport /> Bulk Upload
            </button>
            <button
              onClick={() => setIsAddStudentFormOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <FaUserPlus /> Add New Student
            </button>
          </div>
        </div>
        {/* Filter Bar */}
        <div className="bg-[#161922] p-4 rounded-t-xl border border-gray-800 flex justify-between gap-4">
          <div className="relative flex-1">
            <FaSearch className="absolute text-gray-500 left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name, reg no or email..."
              className="w-full bg-[#0f111a] border border-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <select className="bg-[#0f111a] border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option>Academic Year: All</option>
          </select>
          <button className="flex items-center gap-2 bg-[#0f111a] border border-gray-700 px-4 py-2 rounded-lg text-sm">
            <FaFilter /> More Filters
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-[#161922] border-x border-b border-gray-800 rounded-b-xl overflow-hidden ">
          <div className="max-h-[335px] overflow-y-auto overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#1a1c26] text-gray-400 uppercase text-[10px] tracking-wider sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-6">No</th>
                  <th className="px-6 py-4">Registation-No</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Faculty</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Academic Year</th>
                  <th className="px-6 py-4">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {students.map((student, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/5">
                    <td className="px-6 py-6">{idx + 1}</td>
                    <td className="px-6 py-4">{student.st_registation_no}</td>
                    <td className="px-6 py-4">{student.st_fullname}</td>
                    <td className="px-6 py-4">{student.faculty}</td>
                    <td className="px-6 py-4 text-gray-400">
                      {student.department}
                    </td>
                    <td className="px-6 py-4">{student.academic_year}</td>
                    <td className="px-6 py-4">{student.st_email}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-3 text-gray-400">
                        <FaEdit className="cursor-pointer hover:text-blue-400" />
                        <FaTrash className="cursor-pointer hover:text-red-400" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Placeholder */}
          <div className="flex items-center justify-between p-4 text-xs text-gray-500 border-t border-gray-800 ">
            <span>Showing 1 to 10 of 3,267 results</span>
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
      {isAddStudentFormOpen && (
        <AddStudentForm
          onClose={() => {
            setIsAddStudentFormOpen(false);
            fetchStudents();
          }}
        />
      )}
    </div>
  );
};
export default StudentManagement;
