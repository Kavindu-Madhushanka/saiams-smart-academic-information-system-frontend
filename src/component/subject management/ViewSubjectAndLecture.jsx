import Sidebar from "../admin/sidebar";

const ViewSubjectAndLecture = () => {
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 ml-64 overflow-y-auto">
        <h2 className="mb-1 text-3xl font-bold">Subject Details & Lectures</h2>
        <p className="mb-8 text-sm text-gray-400">
          View all subjects and their assigned lectures.
        </p>

        <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
          {/* Oyage Table eka methanata danna */}
          <p>Hello! Data will appear here.</p>
        </div>
      </main>
    </div>
  );
};

export default ViewSubjectAndLecture;
