import React, { useState, useEffect } from "react";
import { NotebookPen} from "lucide-react";
import { Link,useLocation } from "react-router-dom";
import { fetchMyNotes } from "./fetches/MynoteFetch";
import { BsThreeDots } from "react-icons/bs";


async function handleClick(noteId) {
  const Note=await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/notes/getnote/${noteId}`, {
    method:"GET",
    credentials:"include",
    headers: {
      "Content-Type":"application/json",
    }
  })
  const data=await Note.json();
  console.log(data)
;}
export default function Sider() {
  const [Index, setIndex] = useState(0);
  const [notes, setNotes] = useState([]);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const getNotes = async () => {
    try {
      const res = await fetchMyNotes();
      console.log("Fetched data:", res);
      setNotes(res);
      console.log("Notes state updated:", notes);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const handleDelete = async (noteId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:3000"}/notes/deletenote/${noteId}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        console.log("Note was not deleted");
        return;
      }

      setNotes((currentNotes) => currentNotes.filter((note) => note._id !== noteId));
      setOpenMenuIndex(null);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  useEffect(() => {
      getNotes();
    }, []);
  // console.log(Notes);
  useEffect(() => {
  console.log("Notes state updated:", notes);
}, [notes]);

const location=useLocation();
console.log("Current location:", location.pathname);
useEffect(() => {
  if (!notes.length || !notes[Index]) return;
  if(location.pathname.startsWith("/note/")){
  const element=document.getElementById("title-input");
  const editor=document.getElementById("editor")?.children[1]?.children[1];
   console.log( editor);
   console.log("Setting editor content for note index:", Index, notes[Index]);
  if(element && notes.length>0){
    element.value=notes[Index]?.title || "";
  }
  if(editor && notes.length>0){
    editor.innerHTML=notes[Index]?.description || "";
    console.log("Editor content set to:", editor);
  }
}
},[location.pathname,notes,Index]);

  useEffect(() => {
    const closeMenu = () => setOpenMenuIndex(null);
    window.addEventListener("click", closeMenu);
    window.addEventListener("notes-updated", getNotes);

    return () => {
      window.removeEventListener("click", closeMenu);
      window.removeEventListener("notes-updated", getNotes);
    };
  }, []);

  return (
    <>
      <div
        id="sidemenu"
        className="h-[calc(100vh-4rem)] fixed top-16 left-0 w-[20vw] border-r-[1px] border-t-[1px] border-gray-200 bg-white z-50 text-black p-2"
      >
        <div className="w-[100%] h-[100%]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Link to="/newnote">
                <button className="text-start rounded-xl hover:scale-105 hover:bg-gray-200 hover:text-black ml-2 w-[90%] p-2  h-10 text-[.75rem] text-gray-500 font-semibold transition-all duration-300">
                  <NotebookPen className="inline mr-2" />
                  Compose Note
                </button>
              </Link>
            </div>
          </div>
          <div className="flex h-full flex-col">
            <div className="ml-2 mt-4 mb-4">
              <h1 className="text-xl font-semibold text-gray-400">Notes</h1>
            </div>
            <div className="ml-2 flex !h-[70%] flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 pr-4">
              {notes && notes?.map((note, index) => {
                return(
                <Link key={index} to={`/note/${note._id}`}>
                  <div onClick={()=>{handleClick(notes[index]._id); setIndex(index)}} className="relative p-2 border-b border-gray-200 flex justify-between items-center text-start hover:bg-gray-50">
                    <p className=" text-black ">{note.title} </p>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        setOpenMenuIndex(openMenuIndex === index ? null : index);
                      }}
                      className="p-1 h-full w-fit rounded-[20000px] hover:bg-gray-300"
                    >
                      <BsThreeDots />
                    </button>

                    {openMenuIndex === index && (
                      <div
                        className="absolute right-2 top-10 z-50 w-36 rounded-lg border border-gray-200 bg-white shadow-lg"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            handleDelete(note._id);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>{console.log(note.title)}
                </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
