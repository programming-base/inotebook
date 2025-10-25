import React from "react";

function PrivateNotes() {

  // const privateNotes = notes;
  return (
    <main className="w-full h-full">
      {/* <div className="flex flex-col items-center mt-1 ml-2 border-l-2 border-red-600 text-black">
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
      </div> */}
    </main>
  );
}

export default PrivateNotes;
