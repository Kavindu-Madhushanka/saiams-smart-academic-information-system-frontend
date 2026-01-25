import React from "react";
import { IoClose } from "react-icons/io5";

const AddStudentForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ml-64 bg-black/40">
      {/* Modal Card */}
      <div className="bg-white text-[#1a1c26] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="p-2 text-blue-600 bg-blue-100 rounded-lg">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">Add New Student</h2>
              <p className="text-xs text-gray-500">
                Fill in the details to enroll a new student in the system.
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
        <div className="grid grid-cols-2 gap-6 p-8">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Registration Number
            </label>
            <input
              type="text"
              placeholder="e.g. REG/2023/001"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Faculty
            </label>
            <input
              type="text"
              value="Technology"
              disabled
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Department
            </label>
            <input
              type="text"
              value="ICT"
              disabled
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Academic Year
            </label>
            <select className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none">
              <option>Select year</option>
              <option>2023/24</option>
              <option>2022/23</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="student@example.com"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none"
            />
          </div>

          <div className="col-span-2 space-y-1">
            <label className="text-xs font-bold text-gray-700 uppercase">
              Default Password
            </label>
            <div className="relative">
              <input
                type="text"
                value="student@123"
                disabled
                className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 font-mono text-blue-600"
              />
              <span className="absolute text-gray-400 right-3 top-3">🔒</span>
            </div>
            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-1 italic">
              ⓘ Note: Default password for all students:{" "}
              <span className="font-bold">student@123</span>. Students can
              change it later.
            </p>
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
          <button className="px-6 py-2 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Register Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudentForm;
