import React from "react";
const StatCard = ({ label, value, icon: Icon, colorClass }) => {
  return (
    <div className="bg-[#1a1c2e] p-5 rounded-2xl border border-gray-800 flex items-center gap-4">
      <div className={`p-3 rounded-xl ${colorClass}`}>
        <icon size={24} className="text-white" />
      </div>
      <div>
        <p className="text-xs tracking-wider text-gray-400 uppercase">
          {label}
        </p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
    </div>
  );
};
export default StatCard;
