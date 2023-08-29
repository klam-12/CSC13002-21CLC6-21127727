import React from 'react';
// import SearchTourCard from "../../components/searchTourCard";
import '../searchPage.css'
// import './searchTourCard.css'
import '../../components/searchTourCard'
// import test from '../../assets/images/test.jpg'
import TourCardButton from '../../components/tourCardButton';
import { Rating } from '@mui/material';

const SearchTours = (props) => {
    const posts = props;
    const [value, setValue] = React.useState(5);

    return (

        <div className="search-tour-section">
            {posts.map((post) => {
                return (
                    <div className="search-tour-container">
                    <div className="search-tour-card">
                      <div className="search-tour-image">
                        <img src={test} alt="test image"/>
                      </div>
                      <div className="search-tour-info">
                        <h4 className="search-tour-name"> {post.tour_name} <Rating name="read-only" value={value} style={{float: 'right'}} readOnly /></h4>
                        <p className="search-tour-description"> {post.detail.substr(0,20)}...</p>
                        <p className="search-tour-description">Ngày 1: + {post.heading_activity_picture.Heading[0]} </p>
                        <p className="search-tour-description">Ngày 2: + {post.heading_activity_picture.Heading[1]} </p>
                        <p className="search-tour-description">Ngày 3:+ {post.heading_activity_picture.Heading[[2]]} </p>
                        <p className="search-tour-description">From <span className="search-tour-price">{post.price}</span> <TourCardButton></TourCardButton></p>
                      </div>
                    </div>
                   </div>
                );
            })}
       </div>
    );
};
export default SearchTours;