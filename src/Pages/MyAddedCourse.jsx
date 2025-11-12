import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../ContextApi/AuthContext';
import Card from './Card';

const MyAddedCourse = () => {
    const { user } = use(AuthContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    console.log(data)
    useEffect(() => {
        fetch(`http://localhost:3000/myAdedCourse?email=${user.email}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                setLoading(false)
            })
    }, []);
    if (loading) {
        return <div>
            <dive>
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
            </dive>
        </div>
    }

    return (
        <div className='bg-secondary'>

            <div>
                <h1 className='header text-center py-10'>My Added Course</h1>
            </div>
            <div className='grid  md:grid-cols-3 lg:grid-cols-4 gap-5 px-6'>
                {
                    data?.map(product => <Card key={product._id} product={product}></Card>)
                }
            </div>
        </div >
    );
};

export default MyAddedCourse;