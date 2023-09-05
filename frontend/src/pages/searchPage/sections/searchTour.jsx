import React from 'react';
// import SearchTourCard from "../../components/searchTourCard";
import SearchTourCard from "../../components/searchTourCard";
import { Link } from "react-router-dom";
import '../searchPage.css'
// import './searchTourCard.css'
import '../../components/searchTourCard'
import test from '../../../assets/images/test.jpg'

import TourCardButton from '../../components/tourCardButton';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchTours = ({props}) => {
    const posts = props;
    const [value, setValue] = React.useState(5);
    console.log(posts)
    return (
      <div className="search-tour-section">
      { posts.length === 0 ? (
        <p>No results found.</p>
      ) : (
        posts.map((post) => (
          <Link to={`/detail/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="search-tour-container" key={post.id}>

              <div className="search-tour-card">
                <div className="search-tour-image">
                <img src={`http://127.0.0.1:8000${post.main_picture}`} alt="test image" />

                </div>
                <div className="search-tour-info">
                  <h4 className="search-tour-name">
                    {post.tour_name} <Rating name="read-only" value={value} style={{ float: 'right' }} readOnly />
                  </h4>
                  <p className="search-tour-description">{post.detail.substr(0, 100)}...</p>
                  {/* {post.heading_activity_picture.Heading.map((heading, index) => (
                    <p className="search-tour-description" key={index}>
                      Ngày {index + 1}: + {heading}
                    </p>
                  ))} */}
                  <p className="search-tour-description">
                    From <span className="search-tour-price">{post.price}</span> <TourCardButton></TourCardButton>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
    
    );
};
export default SearchTours;