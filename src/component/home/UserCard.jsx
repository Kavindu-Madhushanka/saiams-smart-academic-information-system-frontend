import React from "react";

const UserCard=({title,icon})=>{
    return(
        <button className="group relative w-full overflow-hidden 
                 bg-gradient-to-br from-[#3b82f6]/40 via-[#1e1b4b]/60 to-[#4c1d95]/80 
                 border border-white/20 p-12 rounded-3xl 
                 flex flex-col items-center justify-center 
                 transition-all duration-500 ease-in-out

                 hover:bg-[#4c1d95]/60 hover:border-white/30 hover:scale-105 
                 backdrop-blur-md shadow-xl focus:ring-2 focus:ring-purple-400">

        <div className="w-20 h-20 mb-6 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-white/10 
        group-hover: group-hover:text-blue-400 transition-all duration-300 mt-[-20px] text-white">
        {icon}
      </div>

      <h3 className="text-xl font-bold tracking-[0.2em] text-white uppercase 
       group-hover:text-blue-400 transition-all duration-300 mt-[-20px] ">
        {title}
      </h3>

        </button>
    )
}

export default UserCard