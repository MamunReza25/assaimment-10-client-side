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
import ViewDetailes from '../Pages/ViewDetailes';
import UpdateCourse from '../Pages/UpdateCourse';


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
                path: '/allcourse',
                element: <Course></Course>,
                loader: () => fetch("https://onlinelearningplateform.vercel.app/allcourse")
            },
            {
                path: '/allcourse/:id',
                element: <PrivetRoutes><ViewDetailes></ViewDetailes></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://onlinelearningplateform.vercel.app/allcourse/${params.id}`)

            },
            {
                path: '/updateCourse/:id',
                element: <PrivetRoutes><UpdateCourse></UpdateCourse></PrivetRoutes>,
                loader: ({ params }) => fetch(`https://onlinelearningplateform.vercel.app/allcourse/${params.id}`)

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
                        element: <PrivetRoutes> <MyEnrolledcourse></MyEnrolledcourse></PrivetRoutes>,

                    },

                    {
                        path: 'my-added-course',
                        element: <PrivetRoutes><MyAddedCourse></MyAddedCourse></PrivetRoutes>,
                    },
                    {
                        path: 'add-course',
                        element: <PrivetRoutes><AddCourse></AddCourse></PrivetRoutes>,
                    },

                ]

            },
        ]



    },


]);
