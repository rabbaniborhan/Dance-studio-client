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
import ManageClass from "../Pages/DashBoard/ManageClass/ManageClass";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import MyClass from "../Pages/DashBoard/MyClass/MyClass";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import UpdateClass from "../Pages/DashBoard/UpdateClass/UpdateClass";
import InstructorRoute from "./InstructorRoute";
import Payment from "../Pages/DashBoard/Payment/Payment";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import InstructorHome from "../Pages/DashBoard/InstructorHome/InstructorHome";
import StudentHome from "../Pages/DashBoard/StudentHome/StudentHome";



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

      path:"/updateclass/:id",
      element:<UpdateClass></UpdateClass>,
      loader:({params})=> fetch(`http://localhost:5000/class/${params.id}`)

    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
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
        },
        {
          path:'/dashboard/allclass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path:'/dashboard/alluser',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

        },
        {
          path:'/dashboard/myclass',
          element:<InstructorRoute><MyClass></MyClass></InstructorRoute>
        },

        {
          path:'/dashboard/addclass',
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:'/dashboard/payment/:id',
          element:<Payment></Payment>
        },
        {

          path:'/dashboard/Adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

        },
        {
          path:'/dashboard/Instructorhome',
          element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>

        },
        {
          path:'/dashboard/studenthome',
          element:<StudentHome></StudentHome>

        }
      ]
    }
  ]);