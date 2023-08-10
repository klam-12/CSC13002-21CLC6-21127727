import SearchTourCard from '../../components/searchTourCard';
import '../profile.css'

const TakenTour = () => {
    return (
      <div className="taken-tour-section">
        <div className="taken-tour"><SearchTourCard ></SearchTourCard></div>
        <div className="taken-tour"><SearchTourCard ></SearchTourCard></div>
        <div className="taken-tour"><SearchTourCard ></SearchTourCard></div>
      </div>
    );
};
export default TakenTour;