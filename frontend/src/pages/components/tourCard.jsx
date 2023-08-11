import './tourCard.css'
import React from 'react';
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';
import { Rating } from '@mui/material';

const TourCard = () => {
    const [value, setValue] = React.useState(5);
    return (
        <div className="tour-card">
            <img src={test} alt="Avatar" style={{width:'100%'}}/>
        <div className="tour-card-container">
          <h4 className="tour-card-name"><b>TP HỒ CHÍ MINH - ĐÀ LẠT</b></h4>
          <Rating name="read-only" value={value} readOnly />
            <p className="tour-info">A trip 4 days to Da Lat, the city of thousands of flowers. If you are finding a place for healing your soul, Da Lat is the best place for that.</p>
            <hr className="solid"/>
        </div>
        <div className="tour-price-container">
          <span><span className="tour-info-price">From <span class="tour-price">5.000.000 VND</span><TourCardButton></TourCardButton></span></span> 
        </div>
      </div>
    );
};
export default TourCard;