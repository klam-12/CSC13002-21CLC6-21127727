import React from 'react'
import NavBar from '../../components/navBar/navBar';
import TourHeroBanner from './sections/tourHeroBanner';
import Footer from '../../components/footer/footer';
import TourInfo from './sections/tourInformation';
import TourFeedBack from './sections/tourFeedback';

const DetailTour = () => {
    return (
        <div>
            <NavBar></NavBar>
            <TourHeroBanner></TourHeroBanner>
            <TourInfo></TourInfo>
            <TourFeedBack></TourFeedBack>
            <Footer></Footer>
        </div>
    );
};
export default DetailTour;
