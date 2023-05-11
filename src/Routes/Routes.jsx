
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Signup/Singup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main /> ,
     children:[
        {
            path:'/',
            element:<Home />
        },
        {
          path:'/Login',
          element:<Login />
        },
        {
          path:"Signup",
          element:<Singup />
        }
     ]
    },
  ]);

  export default router 