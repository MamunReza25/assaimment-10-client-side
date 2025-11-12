import React, { use } from 'react';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../ContextApi/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, Logout } = use(AuthContext);

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
            <header className='w-full bg-gradient-to-r from-blue-500 to- text-white px-6 py-3 flex justify-between items-center'>
                <div className="navbar">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">LearnHub</a>
                    </div>
                    <div className="flex gap-2">
                        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/allcourse'}>Courses</NavLink>
                        {!user && <NavLink to="/loginpage">Login</NavLink>}
                        {user && <NavLink to="/dashboard">DeshBoard</NavLink>}
                        {/* <input type="checkbox" defaultChecked className="toggle toggle-info" /> */}

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
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
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
