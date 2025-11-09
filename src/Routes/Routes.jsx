import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout';
import ErroorPage from '../Pages/ErroorPage';
import Home from '../Pages/Home';
import Course from '../Pages/Course';
import Register from '../Pages/Register';
import Loginpage from '../Pages/Loginpage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErroorPage></ErroorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/loginpage',
                element: <Loginpage></Loginpage>,
            },

        ]
    },
]);
