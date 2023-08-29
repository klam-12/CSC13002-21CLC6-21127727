import searchIcon from '../../assets/icons/search-icon.svg'
import './searchBar.css'
import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
    const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [formData, updateFormData] = useState(initialFormData);

	
		const initialFormData = Object.freeze({
			search_location: '',
            search_date: '',
            price: '',
			
		});

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
	
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = axiosInstance.get('/search' + '?search=' + formData.search_location, { 
                search_location: formData.search_location,
                search_date: formData.search_date,
                price: formData.price,
            }).then((res) => {
                navigate({
                    pathname: '/search',
                    search: '?search=' + formData.search_location + '/'+ formData.search_date+'/'+ formData.price,
                  });
                    console.log(res);
                console.log(res.data);
                window.location.reload();
            });
        
            // You can redirect to the user's dashboard or perform other actions
        } catch (error) {
            console.error(error);
            
        }
    }

	
    return (
        // value={data.search}
		// 				onChange={(newValue) => setData({ search: newValue })}
		// 				onRequestSearch={() => goSearch(data.search)}
        <div className="search-bar">
            <form noValidate >
                <input className="search-bar-item" type="text" id="search-location" name="search_location" placeholder="Bạn muốn đi đâu?" style={{width: '500px'}} onChange={handleChange}></input>
                <input className="search-bar-item" type="date" id="search-date" name="search_date" onChange={handleChange}></input>
                <select className="search-bar-item" id="search-price" onChange={handleChange}>
                    <option className="price-option" name="price">Giá tiền (VND)</option>
                    <option className="price-option" value="price-1">Dưới 1.000.000 VND</option>
                    <option className="price-option" value="price-2">1.000.000 - 3.000.000 VND</option>
                    <option className="price-option" value="price-3">3.000.000 - 5.000.000 VND</option>
                    <option className="price-option" value="price-4">5.000.000 - 10.000.000 VND</option>
                    <option className="price-option" value="price-5">Trên 10.000.000 VND</option>
                </select>
                <a  onClick={handleSubmit} ><img src={searchIcon} alt="search icon"></img></a>
            </form>
        </div>
    );
};
export default SearchBar;