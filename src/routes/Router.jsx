import NavBar from "../components/NavBar";
import Notes from "../components/Notes";
import Sider from "../components/Sider";
import Wellcomepage from "../components/welcomepage";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar /> <Sider /> <Wellcomepage />{" "}
      </>
    ),
  },
  {
    path: "/newnote",
    element: (
      <>
         <NavBar /> <Sider />
        <div className="text-black">hello i am new Note</div>
      </>
    ),
  },
  {
    path:'/privatenote',
    element: (
      <>
         <NavBar /> <Sider />
        <div className="text-black">hello i am private Note</div>
      </>
    ),
  },
  {
    path:'/notesecurity',
    element:<>
         <NavBar /> <Sider />
        <div className="text-black">hello i am securing your Note</div>
      </>
  },
  {
    path:'/notemanagement',
    element:<>
       <NavBar /> <Sider />
        <div className="text-black">hello i am managing your Note</div>
      </>
  },
  {
    path:'/Mynotes',
    element:<><NavBar/> <Sider/> <Wellcomepage/></>
  }
]);
export default router;
