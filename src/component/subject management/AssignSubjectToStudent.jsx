import Sidebar from "../admin/sidebar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";

const AssignSubjectToStudent = () => {
  const [subject, setsubject] = useState([]);
  const [academicyears, setacademicyears] = useState([]);
  const [student, setstudent] = useState([]);
  const [selectSubject, setSelectSubject] = useState(null);
  const [selectAcademicYear, setSelectAcademicYear] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchinitialdata = async () => {
      try {
        const subReg = await axios.get(
          "http://localhost:5104/api/Auth/getSubjectDetails",
        );
        const yearReg = await axios.get(
          "http://localhost:5104/api/Auth/getAvailableYears",
        );

        setsubject(subReg.data);
        setacademicyears(yearReg.data);
      } catch (err) {
        console.error("Data fetching failed", err);
      }
    };

    fetchinitialdata();
  }, []);

  const haddelApplyFilter = async () => {
    if (!selectAcademicYear || selectSubject === null) {
      alert("Please Select Academic Year and Subject Code");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:5104/api/Auth/getStudentsByYear?year=${selectAcademicYear}`,
      );
      const mappedStudents = res.data.map((st) => ({
        ...st,
        assigned: false,
      }));
      setstudent(mappedStudents);
    } catch (err) {
      console.error("Not have Student!", err);
      setstudent([]);
    } finally {
      setLoading(false);
    }
  };

  const toggleAssign = (regNo) => {
    setstudent((prev) =>
      prev.map((s) =>
        s.st_registation_no === regNo ? { ...s, assigned: !s.assigned } : s,
      ),
    );
  };

  const handleFinalAssign = async () => {
    const selectedStudents = student.filter((s) => s.assigned);
    if (selectedStudents.length === 0) {
      alert("Please select at least one student!");
      return;
    }

    const assignData = {
      subjectId: selectSubject.id,
      type: selectSubject.type,
      studentRegNos: selectedStudents.map((s) => s.st_registation_no),
    };

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5104/api/Auth/assignSubjects",
        assignData,
      );
      alert(response.data.message || " Assign ok!");
      setstudent([]);
    } catch (err) {
      alert("Assign not complete!.");
    } finally {
      setLoading(false);
    }
  };
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
              <select
                onChange={(e) => {
                  const sub = subject.find(
                    (s) => s.subject_Code === e.target.value,
                  );
                  setSelectSubject(sub);
                }}
                className="w-full pl-4 pr-10 py-2.5 bg-[#1a1c26] border border-gray-700 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-sm text-gray-300 cursor-pointer"
              >
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
              <select
                onChange={(e) => setSelectAcademicYear(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 bg-[#1a1c26] border border-gray-700 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-sm text-gray-300 cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Choose Year
                </option>
                {academicyears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <MdKeyboardArrowDown
                className="absolute text-gray-500 transition-colors -translate-y-1/2 pointer-events-none right-3 top-1/2 group-focus-within:text-blue-500"
                size={20}
              />
            </div>
          </div>

          <button
            onClick={haddelApplyFilter}
            className="px-6 py-2 mb-1 ml-auto text-sm font-bold text-white transition-all bg-blue-600 shadow-lg hover:bg-blue-700 rounded-xl shadow-blue-900/20"
          >
            Apply Filters
          </button>
          <button className="px-6 py-2 mb-1 ml-auto text-sm font-bold text-white transition-all bg-red-600 shadow-lg hover:bg-red-700 rounded-xl shadow-red-900/20">
            Assign Subject
          </button>
        </div>

        {/* Table Container */}
        <div className="max-h-[450px] overflow-y-auto overflow-x-auto custom-scrollbar mt-6 bg-[#111827]/30 rounded-xl border border-gray-800">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#1a1c26] text-gray-400 uppercase text-[10px] tracking-wider sticky top-0 z-10">
              <tr>
                <th className="px-6 py-5 text-center">No</th>
                <th className="px-6 py-4">Reg-No</th>
                <th className="px-6 py-4">Subject Code</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-center">Assign</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/50">
              {student.length > 0 ? (
                student.map((st, index) => (
                  <tr key={st.st_registation_no} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-center">{index + 1}</td>
                    <td className="px-6 py-4">{st.st_registation_no}</td>
                    <td className="px-6 py-4 text-blue-400">
                      {selectSubject.subject_Code}
                    </td>
                    <td className="px-6 py-4">{selectSubject.type}</td>
                    <td className="px-6 py-4 text-center">
                      <input
                        type="checkbox"
                        checked={st.assigned || false}
                        onChange={() => toggleAssign(st.st_registation_no)}
                        className="w-4 h-4 text-blue-600 border-gray-700 rounded"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No students loaded. Apply filters first.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AssignSubjectToStudent;
