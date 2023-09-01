import './searchTourCard.css'
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';
import { Rating } from '@mui/material';
import React from 'react';

const SearchTourCard = (props) => {
  const [value, setValue] = React.useState(5);
  return (
        <div className="search-tour-container">
        <div className="search-tour-card">
          <div className="search-tour-image">
            <img src={test} alt="test image"/>
          </div>
          <div className="search-tour-info">
            <h4 className="search-tour-name">{props.name}<Rating name="read-only" value={value} style={{float: 'right'}} readOnly /></h4>
            <p className="search-tour-description">A trip 4 days to Da Lat, the city of thousands of flowers. If you are finding a place for healing your soul, Da Lat is the best place for that.</p>
            <p className="search-tour-description">Ngày 1: A trip 4 days to Da Lat, the city of thousands of flowers. If you are finding a place for healing your soul, Da Lat is the best place for that.</p>
            <p className="search-tour-description">Ngày 2: A trip 4 days to Da Lat, the city of thousands of flowers. If you are finding a place for healing your soul, Da Lat is the best place for that.</p>
            <p className="search-tour-description">Ngày 3: A trip 4 days to Da Lat, the city of thousands of flowers. If you are finding a place for healing your soul, Da Lat is the best place for that.</p>
            <p className="search-tour-description">From <span className="search-tour-price">5.000.000 VND</span> <TourCardButton></TourCardButton></p>
          </div>
        </div>
       </div>
    );
};
export default SearchTourCard;