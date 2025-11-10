import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Course = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='bg-secondary'>
            <div className='flex justify-end '>
                <label className="input bg-transparent text-black font-bold">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                    <kbd className="kbd kbd-sm">⌘</kbd>
                    <kbd className="kbd kbd-sm">K</kbd>
                </label>


            </div>
            <div>
                <h1 className='header text-center py-10'>All Course</h1>
            </div>
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5 px-6'>
                {
                    data.map(product => <Card product={product}></Card>)
                }
            </div>
        </div>
    );
};

export default Course;