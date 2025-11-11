import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const ViewDetailes = () => {
    const product = useLoaderData()
    const { _id, title, imageUrl, price, duration, category, description, created_at, created_by } = product
    console.log(product)
    const navigate = useNavigate();

    // const handleEnrolment = () = {
    //     // toast.succes("Thank You. Enrolment succesfully")
    // }

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
                fetch(`http://localhost:3000/allcourse/${_id}`, {
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
        <div className='bg-secondary py-20'>
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
                                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                    {category}
                                </div>

                                {/* <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                    Downloaded:
                                </div> */}
                            </div>

                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                {description}
                            </p>

                            <p>Duration:{duration}</p>
                            <p>Price:{price}</p>
                            <p>created_at:{created_at}</p>
                            <p>created_by:{created_by}</p>
                            <div className="flex gap-3 mt-6">
                                <Link
                                    to={`/updateCourse/${_id}`}
                                    className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                                >
                                    Update Course
                                </Link>
                                <button
                                    // onClick={handleEnrolment}
                                    className="btn btn-secondary rounded-full"
                                >
                                    Enroll now
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
                                >
                                    Delete
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