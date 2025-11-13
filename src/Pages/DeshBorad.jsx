import React from 'react';
import { NavLink, Outlet } from 'react-router';
import MainLayout from '../Layout/MainLayout';

const DeshBorad = () => {
    return (

        <div className="flex flex-col md:flex-row min-h-screen">
            <title>onlinelearningplatform-dashboard</title>
            {/* Sidebar Section */}
            <aside className="w-full md:w-64 bg-gray-300 dark:bg-[#1D232A] dark:text-white p-5">
                <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                <ul className="space-y-3">
                    <li><NavLink to="/dashboard/my-enrolled-course">My Enrolled Courses</NavLink></li>
                    <li><NavLink to="/dashboard/my-added-course">My Added Courses </NavLink></li>
                    <li><NavLink to="/dashboard/add-course"> Add Course</NavLink></li>
                </ul>
            </aside>

            {/* Dashboard Content Section */}
            <section className="flex-1 p-8 bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A] ">

                <Outlet />
            </section>
        </div>

    );
};

export default DeshBorad;