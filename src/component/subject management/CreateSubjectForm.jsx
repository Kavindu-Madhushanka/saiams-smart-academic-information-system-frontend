import { IoClose } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
const CreateSubjectForm = ({ onClose }) => {
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
        <div className="grid grid-cols-2 gap-6 p-8">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-300">
              Subject Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              name="subjectName"
              placeholder="e.g. Advanced Data Structures"
              className="bg-[#1f2937] border border-gray-700 text-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
          <button className="px-6 py-2 font-medium text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">
            Create Subject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSubjectForm;
