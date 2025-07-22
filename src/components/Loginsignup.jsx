import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"
export default function LoginSignup() {
  return (
    <>
      <header className="bg-white border-b-[1px]  border-gray-200 fixed w-full top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
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
      <div className="absolute top-16 h-[calc(100vh-4rem)] w-[100vw] flex justify-center bg-white">
        <div className="bg-zinc-100 flex flex-col items-center w-[360px] h-full border border-gray-100 shadow">
          <h1 className="mt-10 text-2xl">Welcome back,👋</h1>
          <form action="" className=" w-[80%] flex flex-col items-center mt-10">
            <span className="w-full rounded mb-2">
              <input
                type="text"
                placeholder="Enter your username or email"
                className="bg-white w-full h-[2.75rem] mb-4 border border-gray-300 rounded-xl outline-none py-1 px-2 "
              />
            </span>
            <span className="w-full rounded">
              <input
                type="text"
                placeholder="Enter your password"
                className="bg-white w-full h-[2.75rem] border border-gray-300 rounded-xl outline-none py-1 px-2 "
              />
            </span>
            <div className="w-full flex flex-col items-end">
            <Link to="/reset password" className="text-blue-500 p-1">Forgot password?</Link>
            </div>
          </form>
          <div className="mt-5 w-[80%] flex justify-center items-center overflow-none text-gray-500 ">
            <span className="border-t border-gray-400 w-[50%]"></span>OR{" "}
            <span className="border-t border-gray-400 w-[50%]"></span>
          </div>
          <div className=" w-[80%] h-fit contain-content">
            <button className="w-full  flex justify-center items-center bg-white mt-4 h-[3rem] border  border-gray-400 rounded-[8px] active:scale-95 transition-all duration-300">
              <span className="flex">
                <FcGoogle size={24} className="mx-2" />
                Google
              </span>
            </button>
            <button className="w-full  flex justify-center items-center bg-white mt-4 h-[3rem] border  border-gray-400 rounded-[8px] active:scale-95 transition-all duration-300">
              <span className="flex">
                <FaGithub size={24} className="mx-2" />
                Github
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
