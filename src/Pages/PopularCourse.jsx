import React from 'react';
import img from '../assets/react img.jpeg';

const data = [
    {
        id: 1,
        title: "React for Beginners",
        imageUrl: "https://i.ibb.co/YFT1R644/download.jpg",
        price: 85.82,
        duration: "9 weeks (82 hours)",
        category: "Frontend Development",
        description: "Learn React for Beginners through practical projects, exercises, and expert guidance. Perfect for beginners and professionals alike."
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS",
        imageUrl: "https://i.ibb.co/fVr3WfDw/download-1.jpg",
        price: 69.99,
        duration: "6 weeks (50 hours)",
        category: "Frontend Development",
        description: "Learn Tailwind CSS step-by-step with hands-on projects, responsive designs, and modern UI techniques."
    },
    {
        id: 3,
        title: "Full Stack MERN Development",
        imageUrl: "https://i.ibb.co/4ZxcZVHd/download-2.jpg",
        price: 99.99,
        duration: "12 weeks (100 hours)",
        category: "Full Stack Development",
        description: "Build complete web applications using MongoDB, Express, React, and Node.js with real-world projects."
    },
    {
        id: 4,
        title: "Python for Data Analysis",
        imageUrl: "https://i.ibb.co/pjKjKzyx/images.jpg",
        price: 59.99,
        duration: "8 weeks (60 hours)",
        category: "Data Science",
        description: "Learn Python fundamentals and data analysis using Pandas, NumPy, and Matplotlib through practical exercises."
    },
    {
        id: 5,
        title: "Next.js Complete Guide",
        imageUrl: "https://i.ibb.co/4wfbp7rg/download.png",
        price: 79.99,
        duration: "7 weeks (55 hours)",
        category: "Frontend Frameworks",
        description: "Master Next.js with server-side rendering, routing, API integration, and building production-ready apps."
    },
    {
        id: 6,
        title: "Firebase Authentication Deep Dive",
        imageUrl: "https://i.ibb.co/vCKQvjxf/download-1.png",
        price: 49.99,
        duration: "5 weeks (40 hours)",
        category: "Backend Development",
        description: "Learn to implement authentication, database management, and real-time features using Firebase."
    }
];

const PopularCourse = () => {
    return (
        <div className="bg-secondary px-2 md:px-20">
            <div className="text-2xl md:header text-center pt-10 md:pt-20">
                <h1>Popular Courses</h1>
            </div>

            <div className=" py-2 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data.map(course => (
                    <div key={course.id} className="card bg-primary w-full shadow-sm text-white">
                        <figure className="px-10 pt-10">
                            <img
                                src={course.imageUrl || img}
                                alt={course.title}
                                className="rounded-xl w-full h-64 object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold text-pink-300  ">{course.title}</h2>
                            <p className="text-[16px]">
                                <span className="font-bold">Duration:</span> {course.duration}
                            </p>
                            <p className="text-[16px]">
                                <span className="font-bold">Category:</span> {course.category}
                            </p>
                            <p className="text-[16px] px-5 py-2">
                                <span className="font-bold">Description:</span> {course.description}
                            </p>
                            <div className="card-actions flex justify-between items-center gap-10">
                                <p className="text-[16px]">
                                    <span className="font-bold">Price:</span> {course.price} $
                                </p>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourse;
