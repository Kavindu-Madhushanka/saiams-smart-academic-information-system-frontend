import { IoClose } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { useState, useEffect } from "react";
import axios from "axios";

const AssignSubjectForm = ({ onClose }) => {
  const [subjectList, setSubjectList] = useState([]);
  const [lecturerList, setLecturerList] = useState([]);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedLecturer, setSelectedLecturer] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const subRes = await axios.get(
          "http://localhost:5104/api/Auth/getSubjectDetails",
        );
        const lecRes = await axios.get(
          "http://localhost:5104/api/Auth/getLecturersDetails",
        );

        setSubjectList(subRes.data);
        setLecturerList(lecRes.data);
      } catch (err) {
        console.error("Data fetch error:", err);
      }
    };
    fetchInitialData();
  }, []);

  const handleSubjectChange = (e) => {
    const sub = subjectList.find((s) => s.subject_Name === e.target.value);
    setSelectedSubject(sub);
  };

  const handleLecturerChange = (e) => {
    const lec = lecturerList.find((l) => l.staff_id === e.target.value);
    setSelectedLecturer(lec);
  };

  const hadleAssignButton = async (e) => {
    e.preventDefault();
    const data = {
      lecture_id: selectedLecturer.id,
      subject_id: selectedSubject.id,
    };

    try {
      const send = await axios.post(
        "http://localhost:5104/api/Auth/putLectureSubject",
        data,
      );
      alert("Successful Asign Subject to Lecture");
    } catch {
      if (data == []) alert("data is not select");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ml-64 bg-black/40 ">
      <div className="bg-white text-[#1a1c26] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 text-blue-600 bg-blue-100 rounded-lg">
              <span className="text-xl">
                <ImBooks />
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Assign Subject To Lectures</h2>
              <p className="text-xs text-gray-500">
                Link existing subjects to academic staff
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 rounded-full hover:bg-gray-100"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 p-8">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Select Subject <span className="text-blue-500">*</span>
            </label>
            <select
              onChange={handleSubjectChange}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Choose Subject</option>
              {subjectList.map((sub, index) => (
                <option key={index} value={sub.subject_Name}>
                  {sub.subject_Name}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Subject Code
            </label>
            <input
              type="text"
              readOnly
              value={selectedSubject?.subject_Code || ""}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 outline-none"
              placeholder="Auto-filled"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Subject Type
            </label>
            <input
              type="text"
              readOnly
              value={selectedSubject?.type || ""}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Academic Level
            </label>
            <input
              type="text"
              readOnly
              value={selectedSubject?.academic_Level || ""}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Semester
            </label>
            <input
              type="text"
              readOnly
              value={selectedSubject?.semester || ""}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 outline-none"
            />
          </div>

          {/* Lecture ID - Dropdown */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Lecture ID <span className="text-blue-500">*</span>
            </label>
            <select
              onChange={handleLecturerChange}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="">Select ID</option>
              {lecturerList.map((lec, index) => (
                <option key={index} value={lec.staff_id}>
                  {lec.staff_id}
                </option>
              ))}
            </select>
          </div>

          {/* Lecture Name - Auto Fill (Input) */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Lecture Name
            </label>
            <input
              type="text"
              readOnly
              value={selectedLecturer?.full_name || ""}
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 outline-none"
              placeholder="Lecturer Name"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 font-medium text-gray-600 transition-colors rounded-lg hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={hadleAssignButton}
            className="px-6 py-2 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
          >
            Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignSubjectForm;
