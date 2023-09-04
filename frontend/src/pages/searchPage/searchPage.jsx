import React from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import SearchTours from './sections/searchTour';
import herobanner from '../../assets/images/SearchPageHerobanner.jpg'
import SearchBar from '../../components/searchBar/searchBar';
import './searchPage.css'
import { useEffect,useState } from 'react';
import axiosInstance from '../../axios';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [appState, setAppState] = useState({
    posts: [],
    loading: true, // Add a loading state
  });

  useEffect(() => {
    const end_location = queryParams.get('end_location');
    const start_date = queryParams.get('start_date');
    const price = queryParams.get('price');
    const apiUrl = `http://127.0.0.1:8000/tour/search?end_location=${end_location}&start_date=${start_date}&price=${price}`;
    
  axiosInstance
  .get(apiUrl)
  .then((res) => {
    const allPosts = res.data;
    setAppState({ posts: allPosts, loading: false });
    console.log(res.data);
  })
  .catch((error) => {
    console.error('Error fetching search results:', error);
    setAppState({ posts: [], loading: false }); // Handle error by setting posts to an empty array
  });
}, []);
    return (
        <div>
            <NavBar></NavBar>
            <div className="search-page">
                <div className="search-page-search-bar-container">
                <img className="search-page-herobanner" src={herobanner} alt="herobanner"></img>
                <div className="search-page-search-bar">
                    <SearchBar></SearchBar>
                </div>
            </div>
            {appState.loading ? (
          <p>Loading...</p> // Display a loading message when data is being fetched
        ) : (
          <SearchTours props={appState.posts}></SearchTours>
        )}
            </div>
            <Footer></Footer>
        </div>
    );
};
export default SearchPage;
