import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../ContextApi/AuthContext';


const ViewDetailes = () => {
    const { user } = use(AuthContext)
    const product = useLoaderData()
    const { _id, title, imageUrl, price, duration, category, description, created_at, created_by } = product
    console.log(product)
    const navigate = useNavigate();

    const handleEnrolment = () => {
        const userInputData = {
            title: title,
            category: category,
            description: description,
            imageUrl: imageUrl,
            price: price,
            duration: duration,
            created_at: new Date(),
            created_by: user.email,
        };
        fetch("https://onlinelearningplateform.vercel.app/enrollCourse", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire("Thank You!", "Enrollment successful", "success");
            })
            .catch((err) => {
                console.error(err);
                Swal.fire("Error!", "Enrollment failed", "error");
            });

    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://onlinelearningplateform.vercel.app/allcourse/${_id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        navigate('/allcourse')
                    })
                    .catch(error => {
                        console.log(error.message)
                    });



            }
        });
    }
    return (
        <div className='bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A]  py-20'>
            <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
                <div className="card bg-transparent shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                        <div className="shrink-0 w-full md:w-1/2">
                            <img
                                src={imageUrl}
                                alt=""
                                className="w-full object-cover rounded-xl shadow-md"
                            />
                        </div>

                        <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                                {title}
                            </h1>

                            <div className="flex gap-3">
                                <div className="badge badge-lg badge-outline text-black border-white font-medium">
                                    {category}
                                </div>

                            </div>

                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {description}
                            </p>

                            <p>Duration: {duration} Weeks</p>
                            <p>Price: {price} Taka</p>
                            <p>created_at:{created_at}</p>
                            <p>created_by:{created_by}</p>
                            <div className="flex gap-3 mt-6">

                                <button
                                    onClick={handleEnrolment}
                                    className="btn  rounded-full w-full"
                                >
                                    Enroll now
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailes;