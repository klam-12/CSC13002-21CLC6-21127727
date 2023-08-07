import React, { useState } from 'react'
import NavBar from '../../components/navBar/navBar';
import TourHeroBanner from './sections/tourHeroBanner';
import Footer from '../../components/footer/footer';
import TourInfo from './sections/tourInformation';

const DetailTour = () => {
    return (
        <div>
            <NavBar></NavBar>
            <TourHeroBanner></TourHeroBanner>
            <TourInfo></TourInfo>
            <Footer></Footer>
        </div>
    );
};
export default DetailTour;
