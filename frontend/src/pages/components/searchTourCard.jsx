import React from 'react';
import './searchTourCard.css'
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';
import { Rating } from '@mui/material';
import { Grid } from "@mui/material";

const split = (content) => {
  const paragraphs = content.split('\\n');
  return (
      <div>
          {paragraphs.map((paragraph, index) => (
              <p key={index}>
                  {paragraph}
                  <br />
              </p>
          ))}
      </div>
  );
}

const SearchTourCard = ({post}) => {
  const [value, setValue] = React.useState(5);
  const urlImage = `http://127.0.0.1:8000${post.main_picture}`
  return (
        <div className="search-tour-container">
        <div className="search-tour-card">
          <div className="search-tour-image">
            <img src={urlImage} alt="test image"/>
          </div>
          <div className="search-tour-info">
            <h4 className="search-tour-name">{post.tour_name}<Rating name="read-only" value={value} style={{float: 'right'}} readOnly /></h4>
            <p className="search-tour-description">{post.detail}</p>
            {post.heading_activity_picture.map((headingActivity, index) => (
                <div key={index}>
                <p><b>NGÀY {index + 1 }: {split(headingActivity.Activity.substr(0,100))}</b></p>
                </div>
            ))}
           
           
            <p className="search-tour-description">From <span className="search-tour-price">5.000.000 VND</span> 
            <TourCardButton id = {post.id}></TourCardButton></p>
          </div>
        </div>
       </div>
    );
};
export default SearchTourCard;