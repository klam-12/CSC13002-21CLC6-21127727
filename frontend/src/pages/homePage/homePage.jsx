import React, { useState } from 'react'
import NavBar from '../../components/navBar/navBar';
import HeroBanner from './sections/heroBanner';
import AboutUs from './sections/aboutUs';
import FeedBack from './sections/feedBack';
import Footer from '../../components/footer/footer';
import HotTours from './sections/hotTours';
import SearchBar from '../../components/searchBar/searchBar';
import './homePage.css'

const HomePage = () => {
    return (
        <div className='home'>
            <NavBar></NavBar>
            <div className='all'>
            <HeroBanner/>
            <div className="home-page-search">
            <SearchBar></SearchBar>
            </div>
            <AboutUs></AboutUs>
            <HotTours></HotTours>
            <FeedBack></FeedBack>
            
            <Footer></Footer>
            </div>
        </div>
    );
};
export default HomePage;
