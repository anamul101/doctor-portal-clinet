import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManagedDoctors from "../Pages/Dashboard/ManagedDoctors/ManagedDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Signup from "../Pages/Signup/Signup";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<LogIn></LogIn>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'appointment',
                element:<Appointment></Appointment>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/alluser',
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/manageddoctor',
                element:<AdminRoute><ManagedDoctors></ManagedDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader: ({params})=>fetch(`http://localhost:5000/bookings/${params.id}`),
                element:<AdminRoute><Payment></Payment></AdminRoute>
            }
        ]
    }
])