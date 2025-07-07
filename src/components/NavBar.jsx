import React from "react";
function NavBar() {
  // Function to toggle mobile menu visibility
  const ontogglemenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  }
  return (
    <header className="bg-white shadow-sm w-full fixed top-0 left-0 z-50" >
      <nav className="bg-white shadow-sm w-full fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">iNotebook</span>
            </div>
            <div className="hidden md:flex space-x-6 justify-between w-100">
              <span>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium mr-4"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                My Notes
              </a>
              </span>
              <span className="text-green-500 font-medium">
                ☁️ Saved to Cloud
              </span>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Login
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
                Sign Up
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                type="button" onClick={ontogglemenu}
                id="mobile-menu-toggle"
                className="text-gray-600 focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
            My Notes
          </a>
          <span className="block py-2 text-green-500">☁️ Saved to Cloud</span>
          <div className="mt-2">
            <button className="w-full mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
