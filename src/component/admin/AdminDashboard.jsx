import React from "react";
import Sidebar from "./sidebar";
import StatCard from "./StatCard";
import { FaRegUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { IoIosAlert } from "react-icons/io";
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
        {/* stats grid */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard
            label="Total Students"
            value="4,281"
            icon={FaRegUser}
            colorClass="bg-blue-600"
          />
          <StatCard
            label="Active Faculty"
            value="156"
            icon={FaUserCheck}
            colorClass="bg-purple-600"
          />
          <StatCard
            label="Avg Attendance"
            value="92.4%"
            icon={SlCalender}
            colorClass="bg-green-600"
          />
          <StatCard
            label="Open Tickets"
            value="14"
            icon={IoIosAlert}
            colorClass="bg-orange-600"
          />
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;
