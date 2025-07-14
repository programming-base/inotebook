import NavBar from "../components/NavBar";
import Sider from "../components/Sider";
import MainBody from "../components/MainBody";
import { createBrowserRouter } from "react-router-dom";
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
  }
]);
export default router;
