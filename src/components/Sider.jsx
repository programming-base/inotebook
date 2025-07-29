import React from "react";
import { NotebookPen,EyeOff,FileLock2 } from "lucide-react";
import {Link} from 'react-router-dom';
export default function Sider() {
  return (
    <>
      <div
        id="sidemenu"
        className="h-[calc(100vh-4rem)] fixed top-16 left-0 w-[20vw] border-r-[1px] border-t-[1px] border-gray-200 bg-white z-50 text-black p-2"
      >
        <div className="w-[100%] h-[100%]">
          <div className="flex flex-col">
            {/* <h1 className="text-3xl font-extrabold ml-2 text-gray-500 ">
              Notes
            </h1> */}
            <div className="flex flex-col">
              <Link to='/newnote'><button className="text-start rounded-xl hover:scale-105 hover:bg-gray-200 hover:text-black ml-2 w-[90%] p-2  h-10 text-[.75rem] text-gray-500 font-semibold transition-all duration-300">
                <NotebookPen className="inline mr-2"/>
                Compose Note
              </button></Link>
              <Link to='/privatenote'><button className="text-start rounded-xl hover:scale-105 hover:bg-gray-200 hover:text-black ml-2 w-[90%] p-2  h-10 text-[.75rem] text-gray-500 font-semibold transition-all duration-300">
                <EyeOff className="inline mr-2"/>
                Private Notes
              </button></Link>
              <Link to='/notesecurity'><button className="text-start rounded-xl hover:scale-105 hover:bg-gray-200 hover:text-black ml-2 w-[90%] p-2  h-10 text-[.75rem] text-gray-500 font-semibold transition-all duration-300">
                <FileLock2 className="inline mr-2"/>
                Secure Note
              </button></Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="ml-2 mt-4 mb-4">
              <h1 className="text-xl font-semibold text-gray-400">Notes</h1>
            </div>
            <div className="ml-2 flex flex-col pr-4">
              <div className="pt-1 pb-1">Notesw area</div>
              <div className="pt-1 pb-1">Notes area</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
