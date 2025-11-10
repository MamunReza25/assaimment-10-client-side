import React from 'react';
import img1 from '../assets/fpteam.jpeg'
import img2 from '../assets/project build.jpeg'
import img3 from '../assets/suport.jpg'
import img4 from '../assets/team.jpeg'
const WhyChoice = () => {
    return (
        <div className='bg-secondary py-20 px-10'>
            <div className='header text-center'><h1>Why Choose Us</h1></div>

            <div className='md:flex justify-between items-center pt-20'>
                <div className='text-white text-[16px] font-semibold'>

                    <h1 className='text-purple-600 text-2xl font-bold'>      We provide top-quality services.</h1> <br />
                    <p>✅ Our experienced and skilled team completes projects efficiently.</p><br />
                    <p>✅ Customer satisfaction is our first priority.</p> <br />
                    <p>       ✅ We build projects using modern technology and design.</p> <br />
                    <p>                ✅ We ensure reliable support and on-time delivery.</p> <br />

                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <img src={img1} alt="img" className='w-68 h-45 rounded-md' />
                    <img src={img2} alt="img" className='w-68 h-45 rounded-md' />
                    <img src={img3} alt="img" className='w-68 h-45 rounded-md' />
                    <img src={img4} alt="img" className='w-68 h-45 rounded-md' />
                </div>
            </div>
        </div >
    );
};

export default WhyChoice;