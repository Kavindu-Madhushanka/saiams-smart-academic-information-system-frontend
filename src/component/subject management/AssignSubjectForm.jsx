import { IoClose } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
const AssignSubjectForm = ({ onClose }) => {
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
              <h2 className="text-xl font-bold">Assign Subject To Lectures</h2>
              <p className="text-xs text-gray-500">
                Link existing subjects to academic staff
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
            <label className="text-sm font-medium text-gray-700">
              Select Subject <span className="text-blue-500">*</span>
            </label>
            <select
              name="subname"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>Data Structure</option>
              <option>Advance Web Technology</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Select Subject Code <span className="text-blue-500">*</span>
            </label>
            <select
              name="subcode"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>TICT2132</option>
              <option>TICT2121</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Subject Type <span className="text-blue-500">*</span>
            </label>
            <select
              name="subjectType"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>Theory</option>
              <option selected>Practical</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Academic Level <span className="text-blue-500">*</span>
            </label>
            <select
              name="Level"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>Level 1</option>
              <option>Level 2</option>
              <option>Level 3</option>
              <option>Level 4</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Semester <span className="text-blue-500">*</span>
            </label>
            <select
              name="subjectType"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>Semester 1</option>
              <option>Semester 2</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Lecture Name <span className="text-blue-500">*</span>
            </label>
            <select
              name="lecturename"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>L.K.Madhushankha</option>
              <option>G.M.E.Hansika</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Lecture ID <span className="text-blue-500">*</span>
            </label>
            <select
              name="lectureid"
              className="w-full border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option>LCICT21</option>
              <option>LCICT45</option>
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
          <button className="px-6 py-2 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Create Subject
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignSubjectForm;
