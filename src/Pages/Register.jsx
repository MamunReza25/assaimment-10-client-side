import React, { use, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { auth } from '../Firebase/Firebase.config';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';




const Register = () => {
    const { createWithEmailPassword, updateUserProfile, Logout, user } = use(AuthContext);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const name = e.target.displayName.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        if (!name || !email || !password) {
            toast.error("Please fill all required fields.");
            return;
        }
        //   Password validation before Firebase call
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }
        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long.");
        }

        // create a registation
        createWithEmailPassword(email, password)
            .then((result) => {
                console.log(result.user)

                updateUserProfile(name, photo)
                    .then(result => {
                        toast.success("register Successfully!");
                        Logout(auth)
                            .then((result) => {

                            });
                        navigate('/loginpage');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log("Registration error:", error.code);

                // Firebase error handling
                if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("Password should be at least 6 characters.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email address.");
                } else {
                    toast.error("Registration failed. Please try again.");
                }

            })

    };







    return (

        <div className='bg-secondary py-10'>
            <div className='card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10'>
                <div className="card-body ">
                    <h1 className="text-3xl font-bold text-center">Register</h1>
                    <form onSubmit={handleRegisterSubmit}>
                        <fieldset className="fieldset">
                            {/* name field */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name="displayName"
                                className="input rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Name"
                                required
                            />
                            {/* photo url field */}
                            <label className="label">PhotoURL</label>
                            <input
                                type="text"
                                name="photoURL"
                                className="input rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Photo URL"
                            />
                            {/* email field */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input rounded-full focus:border-0 focus:outline-gray-200"
                                placeholder="Email"
                                required
                            />
                            {/* password field */}


                            <div className="relative">
                                <label className="label">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    className="input rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="••••••••"

                                    required
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="absolute right-[45px] top-[32px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>

                            <button type='submit' className="btn text-white mt-4 rounded-full bg-primary">
                                Register
                            </button>
                            <p type="submit" className="text-center">
                                Already have an account?
                                <NavLink className="text-blue-500 hover:text-blue-800" to={'/loginpage'}>
                                    Login
                                </NavLink>
                            </p>
                        </fieldset>
                    </form>

                </div>

            </div >

        </div>
    );
};

export default Register;