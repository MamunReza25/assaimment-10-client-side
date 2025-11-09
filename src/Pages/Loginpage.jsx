import React, { use } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useLocation, useNavigate } from 'react-router';


const Loginpage = () => {
    const { signIn, signInWithGoogle } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();


    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // Login function
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful!");
                event.target.reset();
                navigate(location.state || "/");

            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    };

    // sign in with google
    const handlegoogle = () => {
        signInWithGoogle()
            .then(result => {
                navigate("/");
                toast.success("google succesfully")

            })
            .catch(error => {
                toast.error(error.message)
            })
    };


    return (
        <div className='card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-20'>
            <div className="card-body ">
                <h1 className="text-3xl font-bold text-center">LogIn</h1>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">


                        {/* email field */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Email"
                        />
                        {/* password field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />

                        <button className="btn  text-white mt-4 rounded-full bg-primary">
                            LogIn
                        </button>
                        <span>Or</span>
                        <button type='submit' onClick={handlegoogle} className="btn  text-white mt-4 rounded-full bg-primary">
                            SignIn With Google
                        </button>

                        <p className="text-sm mt-3">
                            Don’t have an account?{" "}
                            <NavLink to="/register" className="text-blue-600 font-medium">
                                Register
                            </NavLink>
                        </p>

                    </fieldset>
                </form>

            </div>

        </div>

    );
};

export default Loginpage;