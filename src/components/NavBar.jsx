import { HomeIcon,Pencil } from "lucide-react";
import { Link } from "react-router-dom";
function NavBar() {
  // Function to toggle mobile menu visibility
  const ontogglemenu = () => {
    document.getElementById("mobile-menu").classList.toggle("hidden");
  };
  return (
    <>
    <header className="bg-white border-b-[1px]  border-gray-200 fixed w-full top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16 ">
          {/* Branding */}
          <div className="flex items-center space-x-2 mr-6 ">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-position-[-1rem] bg-clip-text mr-4 w-[20vw] ">
              iNotebook
            </div>
            <div className="flex items-center h-fit max-md:hidden ">
              <Link
                to="/"
                className="text-gray-700 font-medium hover:text-blue-600 transition mr-6"
              >
               < HomeIcon/>
              </Link>
              <Link
                to="/Mynotes"
                className="text-gray-700 font-medium hover:text-blue-600 transition w-fit"
              >
                My Notes
              </Link>
            </div>
          </div>
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow">
              Login
            </button>
            <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition shadow ">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={ontogglemenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none text-xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden hidden px-4 pb-4 pt-2 bg-white shadow-sm"
      >
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
          My Notes
        </a>
        <div className="mt-3 space-y-2">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
export default NavBar;
