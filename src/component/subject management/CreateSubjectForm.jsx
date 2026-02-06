import { IoClose } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import axios from "axios";
import { useState } from "react";
const CreateSubjectForm = ({ onClose }) => {
  const [subjectFormData, setSubjectFormData] = useState({
    subjectCode: "",
    subjectName: "",
    credit: 0,
    academicLevel: "",
    semester: "",
    type: "",
  });

  const hadelChangeS = (e) => {
    const { name, value } = e.target;
    const finalValue = name === "credit" ? parseInt(value) || 0 : value;
    setSubjectFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };
  const handleSubmitS = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5104/api/Auth/addsubject",
        subjectFormData,
      );
      alert(response.data.message);
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert(error.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ml-64 bg-black/40 ">
      {/* Modal Card */}
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
              <h2 className="text-xl font-bold">Create Subject</h2>
              <p className="text-xs text-gray-500">
                Fill in the details to create new subject in the system.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 transition-colors rounded-full hover:bg-gray-100"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitS}>
          <div className="grid grid-cols-2 gap-6 p-8">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Subject Name <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                onChange={hadelChangeS}
                name="subjectName"
                placeholder="e.g. Advanced Data Structures"
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Subject Code <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                name="subjectCode"
                onChange={hadelChangeS}
                placeholder="e.g.TICT3123"
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Credits <span className="text-blue-500">*</span>
              </label>
              <input
                type="number"
                onChange={hadelChangeS}
                name="credit"
                placeholder="Enter Credit"
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Subject Type <span className="text-blue-500">*</span>
              </label>
              <select
                onChange={hadelChangeS}
                value={subjectFormData.type}
                name="type"
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="Theory">Theory</option>
                <option value="Practical">Practical</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Academic Level <span className="text-blue-500">*</span>
              </label>
              <select
                onChange={hadelChangeS}
                value={subjectFormData.academicLevel}
                name="academicLevel"
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="Level 1">Level 1</option>
                <option value="Level 2">Level 2</option>
                <option value="Level 3">Level 3</option>
                <option value="Level 4">Level 4</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                Semester <span className="text-blue-500">*</span>
              </label>
              <select
                name="semester"
                value={subjectFormData.semester}
                onChange={hadelChangeS}
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
              </select>
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
              type="submit"
              className="px-6 py-2 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
            >
              Create Subject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSubjectForm;
