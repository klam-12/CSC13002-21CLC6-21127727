import herobanner from '../../../assets/images/LandingPage.jpg'

const HeroBanner = () => {
    return (
      <div className="herobanner-container">
        <img className="homepage-herobanner" id="header" src={herobanner}/>
      </div>
    );
};
export default HeroBanner;