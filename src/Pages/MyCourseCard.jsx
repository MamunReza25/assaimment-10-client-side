import React from 'react';
import { Link, useNavigate } from 'react-router';

import Swal from 'sweetalert2';

const MyCourseCard = ({ product }) => {
    const { _id, title, imageUrl, price, duration, category, description, created_at, created_by } = product
    console.log(product)
    const navigate = useNavigate();



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

                    })
                    .catch(error => {
                        console.log(error.message)
                    });



            }
        });
    }

    return (
        <div className='bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A] '>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <figure className="h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                </figure>
                <div className="card-body p-2">
                    <h2 className="card-title"> {title}</h2>
                    <div className="badge text-xs badge-xs badge-secondary rounded-full">{category}</div>
                    {/* <div className="text-xs text-secondary">{created_by}</div> */}
                    <p className="line-clamp-1">
                        {description}
                    </p>

                    <div className="card-actions justify-between items-center mt-4">
                        <div className="flex gap-4 text-sm text-base-content/60">
                            <p>{duration} weeks</p>
                            <p>{price} Taka</p>
                        </div>

                    </div>
                    {/* button */}
                    <div className="flex gap-1 mt-6">
                        <Link
                            to={`/allcourse/${_id}`}
                            className="btn rounded-full bg-linear-to-r from-pink-500 to-blue-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                        >
                            View
                        </Link>
                        <Link
                            to={`/updateCourse/${_id}`}
                            className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-blue-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
                        >
                            Update Course
                        </Link>

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
    );
};

export default MyCourseCard;