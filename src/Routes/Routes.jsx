
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Signup/Singup";
import Checkout from "../Page/Checkout/Checkout";
import Bookings from "../Page/Bookings/Bookings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: "Signup",
        element: <Singup />
      },
      {
        path: "Bookings",
        element:<Bookings />
      },
      {
        path: '/checkout/:id',
        element: <Checkout />,
        loader: ({ params }) => 
          fetch(`http://localhost:5000/services/${params.id}`)
      }
    ]
  },
]);

export default router 