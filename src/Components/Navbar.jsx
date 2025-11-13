import React, { use, useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../ContextApi/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, Logout } = use(AuthContext);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };


    const handleLogout = () => {
        // logout
        Logout()
            .then(result => {


                toast.success("logout succes")
                return <Navigate to={'/'}></Navigate>

            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div>
            <header>
                <div className="navbar  bg-linear-to-r from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A]  shadow-sm">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">LearnHub</a>
                    </div>
                    <div className="flex gap-2 text-[14px] md:text-[20px] md:gap-4">
                        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/allcourse'}>Courses</NavLink>
                        {!user && <NavLink to="/loginpage">Login</NavLink>}
                        {user && <NavLink to="/dashboard">DeshBoard</NavLink>}
                        {/* <input type="checkbox" defaultChecked className="toggle toggle-info" /> */}
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle" />


                        <div>

                            {user && (<div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-52 p-2 shadow">


                                    <NavLink to={'/'}> <li type="submit" onClick={handleLogout} >Logout</li></NavLink>
                                </ul>
                            </div>)

                            }



                        </div>
                    </div>
                </div >
            </header >
        </div >

    );


};

export default Navbar;
