
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Signup/Singup";
import Checkout from "../Page/Checkout/Checkout";
import Bookings from "../Page/Bookings/Bookings";
import Privetrout from "./Privetrout";


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
        element: <Bookings />
      },
      {
        path: '/checkout/:id',
        element: <Privetrout>
          <Checkout />
        </Privetrout>,
        loader: ({ params }) =>
          fetch(`https://doctor-curd-server.vercel.app/services/${params.id}`)
      }
    ]
  },
]);

export default router 