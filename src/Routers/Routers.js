import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";

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
                path:'appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])