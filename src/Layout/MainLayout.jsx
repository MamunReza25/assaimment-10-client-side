import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='w-scree'>
            <div className=' '>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;