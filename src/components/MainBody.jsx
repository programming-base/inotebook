import React from "react";
import { useLocation,Link,useParams } from "react-router-dom";
import Notes from "./Notes";
import { NotebookPen, Pencil } from "lucide-react";
import Compose from "./Compose";

export default function MainBody() {
  const {id}=useParams();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isNotes = location.pathname === "/Mynotes";
  const isCompose = location.pathname === "/newnote";
  const isNote=location.pathname.startsWith("/note/");
  const isnote= Boolean(id);

  return (
    <div id="mainbody" className="w-[calc(100vw-20vw)] h-[calc(100vh-4rem)] z-0 flex justify-center text-center fixed top-16 left-[20vw] bg-gray-50">
      {isHome && (
        <div className="flex flex-col justify-center h-full items-center">
          <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-600">
            <NotebookPen className="w-8 h-8 text-green-600" />
            Welcome to <span className="text-blue-500">iNotebook</span>
          </h1>
          <Link to='/newnote'>
          <div className="mt-5">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <Pencil className="w-5 h-5 animate-bounce" />
              Write Something
            </button>
          </div>
           </Link>
        </div>
      )}
      {isNotes && (
        <div className="overflow-x-hidden w-full " id="mainbodycomponent">
          <Notes />
        </div>
      )}
       {isCompose && (
        <div className="overflow-x-hidden w-full " id="mainbodycomponent">

          <Compose />
        </div>
      )}
      {isnote && isNote && (
        <div className="overflow-x-hidden w-full " id="mainbodycomponent">
          <Compose />
        </div>
      )}
    </div>
  );
}
