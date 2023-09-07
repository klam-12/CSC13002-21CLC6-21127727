import React from 'react';
import herobanner from '../../../assets/images/test.jpg'
import './tourStyles.css'

const TourHeroBanner = ({image}) => {
  console.log(image)
  const imageUrl =  `http://127.0.0.1:8000${image.main_picture}`;
  console.log(imageUrl)
    return (
      <div style={{ position: 'relative' }}>
          <img className="detail-tour-herobanner" src={imageUrl}/>
          <div className="detail-tour-herobanner-text-container">
            <h2 className="detail-tour-herobanner-text">
              {image.tour_name}
            </h2>
          </div>
      </div>

    );
};
export default TourHeroBanner;