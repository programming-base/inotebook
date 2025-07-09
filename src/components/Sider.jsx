import { NotebookPen,EyeOff,FileLock2,FolderGit2 } from "lucide-react";
import {Link} from 'react-router-dom';
export default function Sider() {
   let fetchnotes=async ()=>{
      const notefetch=await fetch("http://localhost:3000/notes/savednotes/686aa0481e75e0800b1ca8c8",{
        method:"GET",
        headers:{
          'Content-Type':"application/json",
          'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJnYXV0YW0iLCJlbWFpbCI6ImdhdXRhbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImdhdXRhbTEyMyIsIl9pZCI6IjY4Njk2MmE1M2JmMGU5Zjg0MjgwYjlmMiIsImRhdGUiOiIyMDI1LTA3LTA1VDE3OjM2OjM3LjQ3NFoiLCJfX3YiOjB9LCJpYXQiOjE3NTE3MzY5OTd9.iDDNv1Uvr5DP9OPVBSemm5ZXpnwDs9HZc3DMf948yQE",
        }
      })
      const notejson=await notefetch.json();
      console.log(notejson);
    }
  fetchnotes();

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
              <Link to='/newnote'><button className="text-start ml-3 h-10 text-[.75rem] text-gray-500 font-semibold">
                <NotebookPen className="inline mr-2"/>
                Compose Note
              </button></Link>
              <Link to='/notemanagement'><button className="text-start ml-3 h-10 text-[.75rem] text-gray-500 font-semibold">
                <FolderGit2 className="inline mr-2"/>
                Manage Notes
              </button></Link>
              <Link to='/privatenote'><button className="text-start ml-3 h-10 text-[.75rem] text-gray-500 font-semibold">
                <EyeOff className="inline mr-2"/>
                Private Notes
              </button></Link>
              <Link to='/notesecurity'><button className="text-start ml-3 h-10 text-[.75rem] text-gray-500 font-semibold">
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
