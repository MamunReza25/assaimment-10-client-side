import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Course = () => {
    const data = useLoaderData();
    const [allcourse, setAllcourse] = useState(data)

    // console.log(data)
    const handlesearch = (e) => {
        e.preventDefault();
        const search_text = e.target.search.value;
        console.log(search_text)

        fetch(`http://localhost:3000/search?search=${search_text}`)
            .then(res => res.json())
            .then(data => {
                setAllcourse(data)

            })

    }



    return (
        <div className='bg-secondary'>
            <form className='flex justify-end ' onSubmit={handlesearch}>
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
                    <input name='search' type="search" className="grow" placeholder="Search" />

                    <button className='mr-2'>Search</button>
                </label>



            </form>
            <div>
                <h1 className='header text-center py-10'>All Course</h1>
            </div>
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5 px-6'>
                {
                    allcourse.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>
        </div >
    );
};

export default Course;