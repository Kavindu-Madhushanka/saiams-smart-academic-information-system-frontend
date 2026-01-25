const ModuleCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-[#1a1c2e] p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all group">
      <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-lg bg-blue-500/10 group-hover:bg-blue-500">
        <Icon className="text-blue-400 group-hover:text-white" size={24} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-400">{description}</p>
    </div>
  );
};
export default ModuleCard;
