import React from 'react';
import herobanner from '../../../assets/images/test.jpg'
import './tourStyles.css'

const TourHeroBanner = () => {
    return (
      <div>
          <img className="detail-tour-herobanner" src={herobanner}/>
          <div className="detail-tour-herobanner-text-container">
            <h2 className="detail-tour-herobanner-text">
              DU LỊCH HÀ NỘI - DU THUYỀN HẠ LONG 5* - NÚI THỦNG - QUẢNG YÊN
            </h2>
          </div>
      </div>

    );
};
export default TourHeroBanner;