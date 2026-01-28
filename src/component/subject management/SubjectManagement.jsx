import Sidebar from "../admin/sidebar";
import { useState } from "react";
import { ImBooks } from "react-icons/im";
import { GiTeacher } from "react-icons/gi";
import { MdOutlinePageview } from "react-icons/md";
import CreateSubjectForm from "./CreateSubjectForm";
import AssignSubjectForm from "./AssignSubjectForm";
import ViewSubjectAndLecture from "./ViewSubjectAndLecture";
import { Link } from "react-router-dom";

const SubjectManagement = () => {
  const [activeView, setActiveView] = useState("none");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleCardClick1 = () => {
    setActiveView("create");
    setIsFormOpen(true);
  };

  const handleCardClick2 = () => {
    setActiveView("assign");
    setIsFormOpen(true);
  };

  const handleCardClick3 = () => {
    setActiveView("view");
    setIsFormOpen(true);
  };
  const renderActiveComponent = () => {
    if (!isFormOpen) return null;

    switch (activeView) {
      case "create":
        return <CreateSubjectForm onClose={() => setIsFormOpen(false)} />;

      case "assign":
        return <AssignSubjectForm onClose={() => setIsFormOpen(false)} />;

      case "view":
        return <ViewSubjectAndLecture onClose={() => setIsFormOpen(false)} />;

      default:
        return null;
    }
  };
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main
        className={`flex-1 p-8 ml-64 overflow-y-auto transition-all duration-300 ${isFormOpen ? "blur-md pointer-events-none" : ""}`}
      >
        <h2 className="mb-1 text-3xl font-bold">Subject Management</h2>
        <p className="text-sm text-gray-400">
          Manage academic unit and curriculum data.
        </p>

        <div className="flex items-stretch gap-6 pt-10 mb-10">
          {/* Card 1 */}
          <div
            onClick={handleCardClick1}
            className={`cursor-pointer p-8 rounded-2xl border-2 transition-all w-1/3 bg-[#111827] flex flex-col justify-between
    ${activeView === "create" ? "border-blue-500 shadow-lg shadow-blue-900/20" : "border-gray-800 hover:border-blue-400"}`}
          >
            <div>
              <div className="mb-4 text-3xl text-blue-400">
                <ImBooks />
              </div>
              <h3 className="text-xl font-bold">Create New Subject</h3>
              <p className="mt-2 text-sm text-gray-400">
                Register a new academic unit with curriculum details
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={handleCardClick2}
            className={`cursor-pointer p-8 rounded-2xl border-2 transition-all w-1/3 bg-[#111827] flex flex-col justify-between
    ${activeView === "assign" ? "border-blue-500 shadow-lg shadow-blue-900/20" : "border-gray-800 hover:border-blue-400"}`}
          >
            <div>
              <div className="mb-4 text-3xl text-blue-400">
                <GiTeacher />
              </div>
              <h3 className="text-xl font-bold">Assign Subject to Lecturer</h3>
              <p className="mt-2 text-sm text-gray-400">
                Link existing subjects to academic staff
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <Link to="/viewsubjectandlecture" className="block w-1/3">
            <div className="h-full cursor-pointer p-8 rounded-2xl border-2 transition-all bg-[#111827] border-gray-800 hover:border-blue-400 flex flex-col justify-between">
              <div>
                <div className="mb-4 text-3xl text-blue-400">
                  <MdOutlinePageview />
                </div>
                <h3 className="text-xl font-bold">View subject & lecture</h3>
                <p className="mt-2 text-sm text-gray-400">
                  View created subjects and assigned subject
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>
      {renderActiveComponent()}
    </div>
  );
};
export default SubjectManagement;
