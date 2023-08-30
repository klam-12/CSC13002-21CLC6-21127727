import { Route, Routes } from 'react-router-dom';
import SuccessNotification from './components/notification/successNoti';
import WarningNotification from './components/notification/warningNoti';
import React, { useContext, useEffect,useState } from 'react';
import axiosInstance from './axios'; // Import the axiosInstance
import HomePage from './pages/homePage/homePage';
import DetailTour from './pages/tour/detailTour';
import SignIn from './pages/authentication/signIn';
import SignUp from './pages/authentication/signUp';
import Payment from './pages/payment/payment';
import Profile from './pages/profile/profile';
import SearchPage from './pages/searchPage/searchPage';
// import DetailTour from './pages/tour/detailTour';

const App = () => {
  
  let storedUser = localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : '';
    // console.log(localStorage.getItem('user'))
    // console.log(storedUser.username)
  const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : '');
    const handleLogin = (user) => {
        setLoggedInUser(user);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setLoggedInUser(null);
    };

  useEffect(() => {
		axiosInstance.get().then((res) => {
		});
	}, []);
  console.log(loggedInUser)
	return (
		<React.StrictMode>
      <Routes>
        <Route exact path='tour/' element={<HomePage/>} />
        <Route path="/search/:tour_name" element={<DetailTour/>}/>
				<Route path="/register" element={<SignUp onRegister={handleLogin} />} />
				<Route path="/signin" element={<SignIn onRegister={handleLogin} />} />
				<Route path={`/profile/${loggedInUser.email}`} element={<Profile props = {loggedInUser}/>} />
        <Route path="/detail/:id" element={<DetailTour/>} />
        <Route path="/tour/search" element={<SearchPage/>} />
			</Routes>
    </React.StrictMode> 
	);
};
export default App;