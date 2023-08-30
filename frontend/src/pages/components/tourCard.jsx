import './tourCard.css'
import React from 'react';
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';
import { Rating } from '@mui/material';

const TourCard = (props) => {
  const post  = props.props;
    const [value, setValue] = React.useState(5);
    return (
        <div className="tour-card">
            <img src={test} alt="Avatar" style={{width:'100%'}}/>
        <div className="tour-card-container">
          <h4 className="tour-card-name"><b> {post.from_location} - {post.to_location}</b></h4>
          <Rating name="read-only" value={post.avg_star} readOnly />
            <p className="tour-info">{post.detail.substr(0, 150)}... </p>
            <hr className="solid"/>
        </div>
        <div className="tour-price-container">
          <span><span className="tour-info-price">From <span class="tour-price">{post.price}</span><TourCardButton id = {post.id}></TourCardButton></span></span> 
        </div>
      </div>
    );
};
export default TourCard;