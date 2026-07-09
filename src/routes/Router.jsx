import React from "react";
import NavBar from "../components/NavBar";
import Sider from "../components/Sider";
import MainBody from "../components/MainBody";
import Signup from '../components/Signup'
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar /> <Sider /> <MainBody />
      </>
    ),
  },
  {
    path: "/newnote",
    element: (
      <>
         <NavBar /> <Sider /> <MainBody/>
      </>
    ),
  },
  {
    path:'/privatenote',
    element: (
      <>
         <NavBar /> <Sider /><MainBody/>
        <div className="text-black">hello i am private Note</div>
      </>
    ),
  },
  {
    path:'/notesecurity',
    element:<>
         <NavBar /> <Sider /><MainBody/>
        <div className="text-black">hello i am securing your Note</div>
      </>
  },
  {
    path:'/Mynotes',
    element:<><NavBar/> <Sider/> <MainBody/></>
  },
   {
    path:'/home',
    element:<><NavBar/> <Sider/> <MainBody/></>
  },
    {
    path:'/login',
    element:<><Login/></>
  },
  {
    path:"/note/:id",
    element:<><NavBar/> <Sider/> <MainBody/> </>
  },
  {
    path:"/signup",
    element:<><Signup/> </>
  },
  {
    path:"/reset-password",
    element:<><Signup/> </>
  }
]);
export default router;
