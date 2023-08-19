import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import SearchTours from './sections/searchTour';
import herobanner from '../../assets/images/SearchPageHerobanner.jpg'
import SearchBar from '../../components/searchBar/searchBar';
import './searchPage.css'


const SearchPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="search-page">
                <div className="search-page-search-bar-container">
                <img className="search-page-herobanner" src={herobanner} alt="herobanner"></img>
                <div className="search-page-search-bar">
                    <SearchBar></SearchBar>
                </div>
            </div>
            <SearchTours></SearchTours>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default SearchPage;
