import React, { use } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import { NavLink } from 'react-router';




const Register = () => {
    const { createWithEmailPassword, updateUserProfile } = use(AuthContext);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const name = e.target.displayName.value;
        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password)

        // create a registation
        createWithEmailPassword(email, password)
            .then((result) => {
                console.log(result.user)
                updateUserProfile(name, photo)
                    .then(result => {

                    })
                    .catch(error => {
                        console.log(`update profile error${error}`)
                    })
            })
            .catch(error => {
                console.log(error);

            })

    };







    return (

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
                        />
                        {/* password field */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="Password"
                        />

                        <button className="btn text-white mt-4 rounded-full bg-primary">
                            Register
                        </button>
                        <p className="text-center">
                            Already have an account?
                            <NavLink className="text-blue-500 hover:text-blue-800" to={'/loginpage'}>
                                Login
                            </NavLink>
                        </p>
                    </fieldset>
                </form>

            </div>

        </div >

    );
};

export default Register;