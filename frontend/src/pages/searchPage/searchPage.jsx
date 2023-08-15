import React from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import SearchTours from './sections/searchTour';

const SearchPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="search-page">
            <SearchTours></SearchTours>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default SearchPage;
