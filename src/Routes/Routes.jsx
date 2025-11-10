import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout';
import ErroorPage from '../Pages/ErroorPage';
import Home from '../Pages/Home';
import Course from '../Pages/Course';
import Register from '../Pages/Register';
import Loginpage from '../Pages/Loginpage';
import PrivetRoutes from './PrivetRoutes';
import AddCourse from '../Pages/AddCourse';
import MyAddedCourse from '../Pages/MyAddedCourse';
import MyEnrolledcourse from '../Pages/MyEnrolledcourse';
import DeshBorad from '../Pages/DeshBorad';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErroorPage></ErroorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch("http://localhost:3000/allcourse")
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/loginpage',
                element: <Loginpage></Loginpage>,
            },



            // dashboard layout
            {
                path: '/dashboard',
                element: (
                    <PrivetRoutes>
                        <DeshBorad></DeshBorad>
                    </PrivetRoutes>
                ),
                children: [

                    {
                        path: 'my-enrolled-course',
                        element: <MyEnrolledcourse></MyEnrolledcourse>,

                    },

                    {
                        path: 'my-added-course',
                        element: <MyAddedCourse></MyAddedCourse>,
                    },
                    {
                        path: 'add-course',
                        element: <AddCourse></AddCourse>,
                    },

                ]

            },
        ]



    },


]);
