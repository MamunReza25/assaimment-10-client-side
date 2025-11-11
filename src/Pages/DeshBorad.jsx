import React from 'react';
import { NavLink, Outlet } from 'react-router';
import MainLayout from '../Layout/MainLayout';

const DeshBorad = () => {
    return (

        <div className="flex min-h-screen">
            {/* Sidebar Section */}
            <aside className="w-64 bg-gray-300 p-5">
                <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                <ul className="space-y-3">
                    <li><NavLink to="/dashboard/my-enrolled-course">My Enrolled Courses</NavLink></li>
                    <li><NavLink to="/dashboard/my-added-course">My Added Courses </NavLink></li>
                    <li><NavLink to="/dashboard/add-course"> Add Course</NavLink></li>
                </ul>
            </aside>

            {/* Dashboard Content Section */}
            <section className="flex-1 p-8 bg-secondary">

                <Outlet />
            </section>
        </div>

    );
};

export default DeshBorad;