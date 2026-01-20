import React from "react";
import { useSearchParams } from "react-router-dom";
import logoimage from '../../assets/universitylogo.jpg'
import { IoIosArrowBack } from "react-icons/io"


const Login=({icon,title})=>{
    const [searchparam]=useSearchParams();
    const role=searchparam.get('role');
    return(
        
        <div className="min-h-screen flex flex-col items-center font-sans bg-[#dfe3e7] text-slate-900">

            <nav className="flex items-center justify-between w-full p-6 bg-white shadow-sm">
                <div className="flex "><img src={logoimage} className="w-10 h-10 "></img>
                <h1 className="pt-1 pl-6 text-xl font-bold text-slate-700">SAIAMS</h1>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 font-medium transition-all border rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200">
                <IoIosArrowBack/> Go To Home Page
                </button>
                
                </nav> 

                <main className="flex items-center justify-center flex-grow p-4">
                    <div className="w-full max-w-[450px] bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden">
                     {/* top of form */}
                     <div className="items-center p-8 pt-10 text-blue-700">
                        {role}{icon}
                     </div>
                    </div>

                </main>

        </div>
    )
}

export default Login