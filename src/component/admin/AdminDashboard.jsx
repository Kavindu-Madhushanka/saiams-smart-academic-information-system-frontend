import React from "react";
import Sidebar from "./sidebar";
const AdminDashboard = () => {
  return (
    <div className="flex bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] min-h-screen text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {/*header section*/}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">System Console</h1>
            <p className="text-gray-400">
              University of Vavuniya Academic Information System Management
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* profile and notification ui here */}
          </div>
        </header>
      </main>
    </div>
  );
};
export default AdminDashboard;
