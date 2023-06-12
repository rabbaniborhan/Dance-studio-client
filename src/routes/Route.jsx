import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../layouts/DashBoard/Dashboard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import EnrollClass from "../Pages/DashBoard/EnrollClass/EnrollClass";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
           path:'/allclass',
           element:<Classes></Classes>
        },
        {
          path:'/allinstructor',
          element:<Instructor></Instructor>
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
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard/mycarts',
          element:<MyCart></MyCart>
        },
        {
          path:'/dashboard/enrollclass',
          element:<EnrollClass></EnrollClass>
        },
        {
        path:'/dashboard/paymentHistory',
        element:<PaymentHistory></PaymentHistory>
        }
      ]
    }
  ]);