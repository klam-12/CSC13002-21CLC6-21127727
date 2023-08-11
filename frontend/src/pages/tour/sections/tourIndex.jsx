import Button from '../../../components/button/button';
import './tourStyles.css'

const TourIndex = () => {
    return (
      <div>
        <div className="detail-tour-index">
        <p className="detail-tour-index-title"><b>Mục lục</b></p>
        <div className="detail-tour-index-container">
            <p> 1. Thông tin tour</p>
            <p> 2. Mô tả</p>
            <p> 3. Combo có gì?</p>
        </div>
      </div>

      <div className="detail-tour-index">
        <p className="detail-tour-index-title"><b>Hỗ trợ khách hàng</b></p>
        <div className="detail-tour-index-container">
          <p>Hotline: 1900 1234</p>
          <p>Email: travelus@gmail.com </p>
        </div>
        <Button content="Call now!"></Button>
      </div>
      </div>
    );
};
export default TourIndex;