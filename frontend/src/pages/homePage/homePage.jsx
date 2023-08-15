import React from 'react'
import NavBar from '../../components/navBar/navBar';
import HeroBanner from './sections/heroBanner';
import AboutUs from './sections/aboutUs';
import FeedBack from './sections/feedBack';
import Footer from '../../components/footer/footer';
import HotTours from './sections/hotTours';
import { Outlet } from 'react-router-dom'; 
const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <HeroBanner/>
            {/* <SearchBar></SearchBar> */}
            <AboutUs></AboutUs>
            <HotTours></HotTours>
             <FeedBack></FeedBack>
            <Footer></Footer>
            <Outlet> </Outlet>
        </div>
    );
};
export default HomePage;
