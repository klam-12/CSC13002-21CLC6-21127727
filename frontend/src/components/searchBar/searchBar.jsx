import searchIcon from '../../assets/icons/search-icon.svg';
import './searchBar.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [formData, updateFormData] = useState({
    search_location: '',
    search_date: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { search_location, search_date, price } = formData;
    try {
        if (!(formData.price =='' && formData.search_date == '' && formData.search_location ==''))
            {
                const apiUrl = `http://127.0.0.1:8000/tour/search?end_location=${search_location}&start_date=${search_date}&price=${price}`;
                const response = await axios.get(apiUrl);
                navigate(`/tour/search?end_location=${search_location}&start_date=${search_date}&price=${price}`);
                console.log(response.data);
                window.location.reload();}
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-bar">
      <form noValidate>
        {/* Location Input */}
        <input
          className="search-bar-item"
          type="text"
          id="search-location"
          name="search_location"
          placeholder="Bạn muốn đi đâu?"
          style={{ width: '500px' }}
          onChange={handleChange}
        />
        {/* Date Input */}
        <input
          className="search-bar-item"
          type="date"
          id="search-date"
          name="search_date"
          onChange={handleChange}
        />
        {/* Price Range Select */}
        <select className="search-bar-item" id="search-price" name="price" onChange={handleChange}>
          <option value="">Giá tiền (VND)</option>
          <option value="1M">Dưới 1.000.000 VND</option>
          <option value="1M-3M">1.000.000 - 3.000.000 VND</option>
          <option value="3M-5M">3.000.000 - 5.000.000 VND</option>
          <option value="5M-10M">5.000.000 - 10.000.000 VND</option>
          <option value="10M">Trên 10.000.000 VND</option>
        </select>
        {/* Search Icon */}
        <a onClick={handleSubmit}>
          <img src={searchIcon} alt="search icon" />
        </a>
      </form>
    </div>
  );
};

export default SearchBar;
