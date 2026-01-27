import React from "react";
import { FaUserPlus, FaTimes, FaEyeSlash, FaInfoCircle } from "react-icons/fa";

const AddLecturerForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl flex flex-col max-h-[90vh] overflow-hidden duration-300 animate-in fade-in zoom-in">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between flex-shrink-0 p-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 text-blue-600 bg-blue-50 rounded-xl">
              <FaUserPlus size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Add New Lecturer
              </h2>
              <p className="text-sm text-gray-500">
                Faculty of Technology • ICT Department
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 transition-colors rounded-full hover:bg-gray-100"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <div className="p-8 space-y-6 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Lecturer Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Dr. Jane Smith"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-900 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Staff ID
              </label>
              <input
                type="text"
                placeholder="e.g. TECH-ICT-001"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-900 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="lecturer@university.edu"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-900 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+1 (234) 567-8901"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-gray-900 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Faculty</label>
              <div className="px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-600 font-medium">
                Technology
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Department
              </label>
              <div className="px-4 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-gray-600 font-medium">
                ICT
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Academic Role
              </label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 outline-none text-gray-900 transition-all">
                <option>Select Role</option>
                <option>Professor</option>
                <option>Senior Lecturer</option>
                <option>Lecturer</option>
              </select>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              System Credentials
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="jsmith_ict"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    defaultValue="password123"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none text-gray-900"
                  />
                  <FaEyeSlash className="absolute right-3 top-3.5 text-gray-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-100 bg-gray-50/50 rounded-xl">
            <div>
              <p className="text-sm font-bold text-gray-900">Account Status</p>
              <p className="text-xs text-gray-500">
                Enable or disable access to SAIAMS platform
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-6 bg-blue-600 rounded-full shadow-inner cursor-pointer">
                <div className="absolute w-4 h-4 bg-white rounded-full shadow-md right-1 top-1"></div>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                Active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pb-2 text-xs italic text-gray-500">
            <FaInfoCircle className="text-gray-400" />
            Lecturers will receive login credentials after account creation.
          </div>
        </div>

        {/* Footer button */}
        <div className="flex justify-end flex-shrink-0 gap-3 p-6 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all">
            Save Lecturer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLecturerForm;
