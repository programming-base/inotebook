import { NotebookPen, Pencil } from "lucide-react";
import { useLocation } from "react-router-dom";
import Notes from './Notes'
export default function Wellcomepage() {
  const location = useLocation();
      return (
    <>
      <div className="p-3 w-[calc(100vw-20vw)] h-[calc(100vh-4rem)] z-0 flex justify-center text-center fixed top-16 left-[20vw] bg-gray-100">
        <div className=" flex flex-col justify-center h-[100%] items-center" style={location.pathname==='/'?{display:'flex'}:{display:'none'}}>
          <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-600">
            <NotebookPen className="w-8 h-8 text-green-600" />
            Welcome to <span className="text-blue-500 ">iNotebook</span>
          </h1>
          <div className="mt-5">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
              <Pencil className="w-5 h-5 animate-bounce" />
              Write Something
            </button>
          </div>
        </div>
        {location.pathname === '/Mynotes' && (
          <div className="overflow-x-hidden w-[100%]"><Notes /></div>// Add your component or JSX to render when pathname is '/Mynotes'
          
        )}
      </div>
    </>
  );
}
