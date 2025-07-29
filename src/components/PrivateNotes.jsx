import React from "react";
import { useState, useEffect } from "react";
function PrivateNotes() {
    const [privateNotes, setPrivateNotes] = useState([]);
    useEffect(() => {
      async function fetchPrivateNotes() {
        try {
          const response = await fetch(
            "http://localhost:3000/notes/privatenotes/686aa0481e75e0800b1ca8c8", // endpoint for private notes
            {
              method: "GET",
              headers: {
                "auth-token":
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJnYXV0YW0iLCJlbWFpbCI6ImdhdXRhbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImdhdXRhbTEyMyIsIl9pZCI6IjY4Njk2MmE1M2JmMGU5Zjg0MjgwYjlmMiIsImRhdGUiOiIyMDI1LTA3LTA1VDE3OjM2OjM3LjQ3NFoiLCJfX3YiOjB9LCJpYXQiOjE3NTE3MzY5OTd9.iDDNv1Uvr5DP9OPVBSemm5ZXpnwDs9HZc3DMf948yQE",
              },
            }
          );
          const data = await response.json();
          setPrivateNotes(data);
        } catch (error) {
          console.error("Error fetching private notes:", error);
        }
      }

      fetchPrivateNotes();
    }, []);
//   let privateNotes = [
//     {
//       _id: "686a9ddfd95f23b745c9d801",
//       user: "686a9d34fc23e86545b96801",
//       title: "Log 1",
//       description: "Description for note 1",
//       tag: "personal",
//       date: "2025-07-06T16:01:00Z",
//       __v: 0,
//     },
//     {
//       _id: "686a9ddfd95f23b745c9d802",
//       user: "686a9d34fc23e86545b96802",
//       title: "Idea 2",
//       description: "Description for note 2",
//       tag: "project",
//       date: "2025-07-06T16:01:30Z",
//       __v: 0,
//     },
//   ];
  return (
    <main className="w-full h-full">
      <div className="flex flex-col items-center mt-1 ml-2 border-l-2 border-red-600 text-black">
        {privateNotes.length === 0 ? (
          <p className="text-gray-600 italic mt-4">No private notes found.</p>
        ) : (
          privateNotes.map((note, index) => (
            <div
              key={index}
              className={`bg-gray-100 p-4 w-full border border-l-0 border-t-0 border-gray-600 ${
                index === 0 ? "border-t-[.5px] border-black" : ""
              }`}
            >
              <h1 className="text-gray-800 font-semibold break-words">
                {note.title}
              </h1>
              <p className="mt-1 break-words whitespace-normal text-sm text-gray-700">
                {note.description}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default PrivateNotes;
