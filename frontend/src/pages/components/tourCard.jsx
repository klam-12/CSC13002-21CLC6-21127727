import './tourCard.css'
import test from '../../assets/images/test.jpg'
import TourCardButton from './tourCardButton';

const TourCard = () => {
    return (
        <div className="tour-card">
            <img src={test} alt="Avatar" style={{width:'100%'}}/>
        <div className="tour-card-container">
          <h4><b>TP HỒ CHÍ MINH - ĐÀ LẠT</b></h4>
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