import Sidebar from "../admin/sidebar";
import { useState } from "react";

const ViewSubjectAndLecture = () => {
  const [activeTab, setActiveTab] = useState("subjectAndLecture");

  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 ml-64 overflow-y-auto">
        <h2 className="mb-1 text-3xl font-bold">Subject Details & Lectures</h2>
        <p className="mb-8 text-sm text-gray-400">
          View all subjects and their assigned lectures or general subject
          details.
        </p>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("subjectAndLecture")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "subjectAndLecture"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                : "bg-[#111827] border border-gray-700 text-gray-400 hover:border-blue-400"
            }`}
          >
            Subject & Lecture
          </button>
          <button
            onClick={() => setActiveTab("viewSubject")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === "viewSubject"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                : "bg-[#111827] border border-gray-700 text-gray-400 hover:border-blue-400"
            }`}
          >
            View Subjects
          </button>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 overflow-x-auto">
          {activeTab === "subjectAndLecture" ? (
            /* --- Subject and Lecture Table --- */
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-blue-400 border-b border-gray-800">
                  <th className="p-4">Lecture ID</th>
                  <th className="p-4">Lecture Name</th>
                  <th className="p-4">Subject Code</th>
                  <th className="p-4">Subject Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Credits</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="transition-all border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="p-4">L001</td>
                  <td className="p-4">Dr. Sunimal Perera</td>
                  <td className="p-4">SCS1202</td>
                  <td className="p-4">Data Structures</td>
                  <td className="p-4">Theory</td>
                  <td className="p-4">3</td>
                </tr>
              </tbody>
            </table>
          ) : (
            /* --- View Subject Table --- */
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-blue-400 border-b border-gray-800">
                  <th className="p-4">Subject ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Credits</th>
                  <th className="p-4">Level</th>
                  <th className="p-4">Semester</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="transition-all border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="p-4">SUB-05</td>
                  <td className="p-4">Algorithm Design</td>
                  <td className="p-4">4</td>
                  <td className="p-4">Level 2</td>
                  <td className="p-4">Semester 1</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default ViewSubjectAndLecture;
