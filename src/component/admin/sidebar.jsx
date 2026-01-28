import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { AiFillFileText } from "react-icons/ai";
import { IoIosAlert } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import logoimage from "../../assets/universitylogo.jpg";
const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className="flex items-center gap-3 p-3 text-white transition-all rounded-lg cursor-pointer hover:bg-blue-600">
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </div>
);
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#0f111a] p-4 flex flex-col border-r border-gray-800 fixed">
      <div className="flex items-center gap-2 px-2 mb-8 text-xl font-bold text-blue-400">
        <div className="flex items-center justify-center italic text-white rounded-full">
          <img src={logoimage} className="w-12 h-12"></img>
        </div>
        SAIAMS
      </div>

      <div className="flex-1 space-y-2">
        <SidebarItem icon={LuLayoutDashboard} label="Dashboard" />
        <Link to={"/studentmanagement"}>
          <SidebarItem icon={FaRegUser} label="Student Management" />
        </Link>
        <Link to={"/lecturemanagement"}>
          <SidebarItem icon={FaUserCheck} label="Lecturer Management" />
        </Link>
        <Link to={"/subjectmanagement"}>
          <SidebarItem icon={FaBookOpen} label="Subjects Management" />
        </Link>
        <SidebarItem icon={SlCalender} label="Attendance" />
        <SidebarItem icon={AiFillFileText} label="Results & ICA" />
        <SidebarItem icon={IoIosAlert} label="Issue Reports" />
      </div>

      <div className="pt-4 space-y-2 border-t border-gray-800">
        <SidebarItem icon={IoIosSettings} label="System Settings" />
        <SidebarItem
          icon={IoIosLogOut}
          label="Logout"
          className="text-red-500"
        />
      </div>
    </div>
  );
};
export default Sidebar;
