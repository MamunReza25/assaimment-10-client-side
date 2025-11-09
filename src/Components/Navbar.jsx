import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <header className='w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 flex justify-between items-center'>
                <h1>LearnHub</h1>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/course'}>Courses</NavLink>
                    <NavLink to={'/register'}>Register</NavLink>
                    <NavLink to={'/loginpage'}>Login</NavLink>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
