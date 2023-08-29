import React from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import SearchTours from './sections/searchTour';
import herobanner from '../../assets/images/SearchPageHerobanner.jpg'
import SearchBar from '../../components/searchBar/searchBar';
import './searchPage.css'
import { useEffect,useState } from 'react';
import axiosInstance from '../../axios';


const SearchPage = () => {
    const search = 'search';
	const [appState, setAppState] = useState({
		search: '',
		posts: [],
	});

	useEffect(() => {
		axiosInstance.get(search + '/' + window.location.search).then((res) => {
			const allPosts = res.data;
			setAppState({ posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

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
            <SearchTours props = {appState.posts}></SearchTours>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default SearchPage;
