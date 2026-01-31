import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const SubjectCardAttendence = ({ subject }) => {
  const statusStyles = {
    ACTIVE: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    SCHEDULED: "text-gray-400 border-gray-400/30 bg-gray-400/5",
    COMPLETED: "text-green-400 border-green-400/30 bg-green-400/10",
  };

  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all group shadow-sm ">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="mb-1 text-xl font-bold leading-tight transition-colors group-hover:text-blue-400">
            {subject.name}
          </h3>
          <span className="font-mono text-sm font-semibold text-blue-500">
            {subject.id}
          </span>
        </div>
        <span
          className={`text-[10px] font-bold px-2 py-1 rounded border ${statusStyles[subject.status] || statusStyles.SCHEDULED}`}
        >
          {subject.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[subject.level, subject.semester, subject.type].map((tag, index) => (
          <span
            key={index}
            className="bg-[#1f2937] text-xs px-3 py-1 rounded-md text-gray-300 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mb-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <FaUser className="w-4 h-4 text-blue-500/70" />
          <span>{subject.students} Students</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <FaCalendarAlt className="w-4 h-4 text-blue-500/70" />
          <span>{subject.time}</span>
        </div>
      </div>

      <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98]">
        Mark Attendance
      </button>
    </div>
  );
};

export default SubjectCardAttendence;
