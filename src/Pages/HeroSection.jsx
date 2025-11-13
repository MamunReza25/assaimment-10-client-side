import React from 'react';
import FremarMotion from '../FremarMotion';

const HeroSection = () => {
    return (
        <FremarMotion>
            <div className='bg-imgs opacity-90 dark:opacity-100 h-screen flex justify-center items-center flex-col '>

                <div className='text-gray-100'>
                    <h1 className='text-center text-2xl md:text-5xl font-bold md:font-extrabold p-5'>Learn New Skills, Advance Your Career</h1>
                    <p className='px-5 md:px-100 py-2 md:py-10 text-[18px] font-medium md:font-semibold'>Learn anytime, anywhere with the world's best courses on our online learning platform. All courses are crafted by skilled experts to help you achieve your goals.</p>
                </div>
                <div className='flex justify-center items-center gap-20 mt-5'>
                    <button className="btn btn-primary">View Course</button>
                    <button className='btn btn-primary'>Join Now</button>
                </div>

            </div>
        </FremarMotion>

    );
};

export default HeroSection;