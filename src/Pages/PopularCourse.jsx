import React from 'react';
import ScrollAnimation from '../Animation/ScrollAnimation';
import Card from './Card';


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

        <div className='bg-linear-to-t from-[#5E4AF1] to-[#BA0BF9] dark:to-[#1D232A] dark:from-[#1D232A] '>

            <div>
                <h1 className='header text-center py-10'>Popular Courses </h1>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 backdrop-blur-lg bg-white/10 rounded-2xl p-4">

                {
                    data.map(product => <ScrollAnimation><Card key={product._id} product={product}></Card></ScrollAnimation>)
                }
            </div>

        </div >


    );
};

export default PopularCourse;
