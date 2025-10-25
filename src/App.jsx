import "./App.css";
import Lottie from "lottie-react";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/authContext";
import router from "./routes/Router";
import animationData from "./assets/Insider-loading.json";
function App() {
  const { loading, status } = useContext(AuthContext);
  console.log(status);
  return (<>
  {(status || !loading) &&  <RouterProvider router={router} />}
  {loading && <div id="loading" className="w-[150px] h-[150px] m-auto z-100000000000000"><Lottie animationData={animationData} loop={true} /></div>
  }
  </>);
}
export default App;
