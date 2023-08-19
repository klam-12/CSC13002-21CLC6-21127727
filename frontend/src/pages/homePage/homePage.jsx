import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navBar/navBar';
import HeroBanner from './sections/heroBanner';
import AboutUs from './sections/aboutUs';
import FeedBack from './sections/feedBack';
import Footer from '../../components/footer/footer';
import HotTours from './sections/hotTours';
import { Outlet } from 'react-router-dom';
import hotTourLoadingComponent from './sections/hotTourLoading';
import SearchBar from '../../components/searchBar/searchBar';
import './homePage.css'

import axiosInstance from '../../axios';
import axios from 'axios';
const HomePage = () => {
  const HotTourLoading = hotTourLoadingComponent(HotTours);
  const [appState, setAppState] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/tour/recommend')
      .then((res) => setAppState(res.data))
      .finally(() => setLoading(false));

    // console.log(res.data);
  }, []);
  // console.log()

   console.log(appState)

  return (
    <div>
      <NavBar></NavBar>
      <HeroBanner />
      {/* <SearchBar></SearchBar> */}
      <AboutUs></AboutUs>
      <HotTourLoading isLoading={loading} posts={appState}></HotTourLoading>
      <FeedBack></FeedBack>
      <Footer></Footer>
      <Outlet> </Outlet>
    </div>
  );
};
export default HomePage;
