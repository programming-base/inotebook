import React from "react";
function Main() {
  return (
    <main className="flex-1 p-4 mt-16 w-[100vw] h-[100%]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to iNotebook</h1>
        <p className="text-gray-700">This is your personal note-taking app.</p>
        <p className="text-gray-700">Start by creating your first note!</p>
      </div>
      <div className="w-[6rem] p-2 bg-blue-600 rounded-[50rem] flex justify-center items-center text-2xl">
        
        <button className="p-2 flex items-center justify-center ">
            <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="yellow"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
          Add
        </button>
      </div>
    </main>
  );
}
export default Main;
