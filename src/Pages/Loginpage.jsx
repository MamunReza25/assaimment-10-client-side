import React, { use, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';


const Loginpage = () => {
    const { signIn, signInWithGoogle } = use(AuthContext)
    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();


    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        const password = e.target.password.value;
        if (!email || !password) {
            toast.error("Please fill all required fields.");
            return;
        }
        // Login function

        signIn(email, password)
            .then(result => {
                const user = (result.user);
                toast.success("Login Successfully!");
                e.target.reset();
                navigate(location.state || "/");

            })
            .catch(error => {
                console.log(error.message)
                if (error.code === "auth/user-not-found") {
                    toast.error("No account found with this email");
                } else if (error.code === "auth/wrong-password") {
                    toast.error("Incorrect password.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email address");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Not found account . Please check or sign up.");
                } else if (error.code === "auth/network-request-failed") {
                    toast.error(" Please check your internet connection.");
                } else {
                    toast.error(error.message);
                }

            });
    };

    // sign in with google
    const handlegoogle = (e) => {
        signInWithGoogle()
            .then(result => {
                toast.success("Login Successfully!");
                navigate(location.state || "/");

            })
            .catch(error => {

                if (error.code === "auth/invalid-credential") {
                    toast.error("Not found account . Please check or sign up.");
                } else if (error.code === "auth/internal-error") {
                    toast.error(" Please check your internet connection.");
                } else {
                    toast.error(error.message);
                }
                console.log(error.message)
            })
    };


    return (
        <div className='bg-secondary py-10'>
            <div className='card  bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl '>
                <div className="card-body ">
                    <h1 className="text-3xl font-bold text-center">LogIn</h1>
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset text-black font-semibold text-[18px]">


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
                                    className="absolute right-[45px] top-[40px] cursor-pointer z-50"
                                >
                                    {show ? <FaEye /> : <IoEyeOff />}
                                </span>
                            </div>
                            <p>Forgot password?</p>
                            <button className="btn  text-white mt-4 rounded-full bg-primary">
                                LogIn
                            </button>
                            <span className='text-2xl font-semibold text-primary text-center'>Or</span>
                            <p type='submit' onClick={handlegoogle} className="btn  text-white mt-2 rounded-full bg-primary">
                                <span className='text-2xl'> <FcGoogle /></span> SignIn With Google
                            </p>

                            <p className="text-sm mt-3">
                                Don’t have an account?{" "}
                                <NavLink to="/register" className="text-primary font-bold text-[18px]">
                                    Register
                                </NavLink>
                            </p>

                        </fieldset>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default Loginpage;