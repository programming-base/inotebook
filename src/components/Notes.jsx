import React from "react";
import { Trash2, LockKeyhole, SquarePen, Star } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useState } from "react";
import { useEffect } from "react";
function Notes() {
  const [note, setNote] = useState([]);
  const {user}=useContext(AuthContext);
  useEffect(() => {
    async function notefetch() {
      try {
        const fetchnote = await fetch(
          `http://localhost:3000/notes/mynotes`,
          {
            method: "GET",
            credentials: "include",
            headers:{
              "Content-Type":"application/json"
            }
          }
        );
        let response = await fetchnote.json();
        setNote([response]);
        console.log(note);
      } catch (error) {
        console.log(error);
      }
    }
    notefetch();
  },[]);
  if (note.length > 0) {
    return (
      <main className="w-full h-full">
        <div className="flex flex-col items-center mt-1 ml-2 border-l-2 border-green-600 text-black">
          {note.map((data, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-gray-50 p-3 w-full border border-l-0 border-t-0 border-gray-600 ${
                index === 0 ? "border-t-[.5px] border-black" : ""
              }`}
            >
              <div className="w-full md:w-[85%] text-start">
                <h1 className="text-gray-800 font-semibold break-words">
                  {data.title}
                </h1>
                <p className="ml-2  p-1 break-words whitespace-normal text-sm text-gray-700">
                  {data.description}
                  {/* {console.log(data[index])} */}
                </p>
              </div>
              <div className="p-2 mr-3">
                <div className="grid grid-cols-2 gap-2 text-gray-900">
                  <SquarePen className="w-5 h-5 hover:text-blue-600 cursor-pointer transition" />
                  <Trash2 className="w-5 h-5 hover:text-red-600 cursor-pointer transition" />
                  <LockKeyhole className="w-5 h-5 hover:text-gray-600 cursor-pointer transition" />
                  <Star className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
  else{
  return(
    <>
    <div className="w-full h-[3rem] px-2 py-1">
      <div className="w-full h-full border-l-2 border-green-500">
        <div className="h-full flex items-center justify-center text-gray-500">
          <i>You have no saved notes</i>
        </div>
      </div>
    </div>
    </>
  )
}
}

export default Notes;
