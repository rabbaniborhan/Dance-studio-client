import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/singup',
        element:<SingUp></SingUp>
    }
  ]);