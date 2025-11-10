import React from 'react';
import HeroSection from './HeroSection';
import PopularCourse from './PopularCourse';
import WhyChoice from './WhyChoice';
import Instractor from './Instractor';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <PopularCourse></PopularCourse>
            <WhyChoice></WhyChoice>
            <Instractor></Instractor>

        </div>
    );
};

export default Home;