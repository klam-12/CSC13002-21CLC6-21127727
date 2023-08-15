import React from 'react';
import SearchTourCard from "../../components/searchTourCard";
import '../searchPage.css'


const SearchTours = () => {
    return (
        <div className="search-tour-section">
            <div className="search-tour"><SearchTourCard></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard></SearchTourCard></div>
            <div className="search-tour"><SearchTourCard></SearchTourCard></div>
       </div>
    );
};
export default SearchTours;