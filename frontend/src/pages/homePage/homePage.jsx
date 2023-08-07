import React, { useState } from 'react'
import NavBar from '../../components/navBar/navBar';
import HeroBanner from './sections/heroBanner';
import AboutUs from './sections/aboutUs';
import VacationPackages from './sections/vacationPackages';
import FeedBack from './sections/feedBack';
import Footer from '../../components/footer/footer';

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroBanner/>
            {/* <SearchBar></SearchBar> */}
            <AboutUs></AboutUs>
            <VacationPackages></VacationPackages>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};
export default HomePage;
