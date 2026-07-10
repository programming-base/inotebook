import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <>
      <header className="bg-white border-b-[1px]  border-gray-200 fixed w-full top-0 left-0 z-50">
        <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex items-center justify-between h-16 ">
            {/* Branding */}
            <div className="flex items-center space-x-2 mr-6 ">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-position-[-1rem] bg-clip-text  w-[20vw] ">
                iNotebook
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="mt-16  h-fit w-[100vw] flex justify-center bg-white">
        <div className="pb-12 bg-zinc-100 flex flex-col items-center w-[360px] h-full rounded-xl border border-gray-100 shadow">
          <h1 className="mt-10 text-2xl">Welcome back,👋</h1>
          
          <div className=" w-[80%] h-fit contain-content">
            <button onClick={()=>{window.location.href=`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/auth/login` }} className="w-full  flex justify-center items-center bg-white mt-4 h-[3rem] border  border-gray-400 rounded-[8px] active:scale-95 transition-all duration-300">
              <span className="flex">
                <FcGoogle size={24} className="mx-2" />
                Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
