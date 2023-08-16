import searchIcon from '../../assets/icons/search-icon.svg'
import './searchBar.css'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <form>
                <input className="search-bar-item" type="text" id="search-location" name="search-location" placeholder="Bạn muốn đi đâu?" style={{width: '500px'}}></input>
                <input className="search-bar-item" type="date" id="search-date" name="search-date"></input>
                <select className="search-bar-item" id="search-price">
                    <option className="price-option" value="">Giá tiền (VND)</option>
                    <option className="price-option" value="price-1">Dưới 1.000.000 VND</option>
                    <option className="price-option" value="price-2">1.000.000 - 3.000.000 VND</option>
                    <option className="price-option" value="price-3">3.000.000 - 5.000.000 VND</option>
                    <option className="price-option" value="price-4">5.000.000 - 10.000.000 VND</option>
                    <option className="price-option" value="price-5">Trên 10.000.000 VND</option>
                </select>
                <a><img src={searchIcon} alt="search icon"></img></a>
            </form>
        </div>
    );
};
export default SearchBar;