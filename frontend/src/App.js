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
import ChangePasswordCard from './pages/profile/sections/profileChangePassword';
import Logout from './pages/authentication/logout';

import DetailTour from './pages/tour/detailTour';
import ToursTakenList from './pages/tour/sections/toursTakenList';
const App = () => {
  // localStorage.removeItem('access_token');
  //               localStorage.removeItem('refresh_token');
  //               localStorage.removeItem('user');
  const access_token = localStorage.getItem('access_token');
  if (access_token) {
    try {
      axiosInstance
        .get(`/user/profile/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
        )
        .then((profileRes) => {
          const profileData = profileRes.data;
          console.log(profileData);
          localStorage.setItem('user', JSON.stringify(profileData));
        })
        .catch((profileError) => {
          console.error('Error fetching profile:', profileError);
        });
      }
      catch (error) {
        console.error('Error handling response:', error);
        
      }  
    if (!localStorage.getItem('user')){
      window.location.reload()
    }
    }
    else{
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      // window.location.reload();
    } 

  let storedUser = localStorage.getItem("user") !== undefined  && localStorage.getItem("user") !== '' ? JSON.parse(localStorage.getItem("user")) : '';
  const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : '');



  const handleLogin = (user) => {
      setLoggedInUser(user);
  };


  useEffect(() => {
		axiosInstance.get().then((res) => {
		});
	}, []);
	return (
		<React.StrictMode>
      <Routes>
        <Route exact path='tour/' element={<HomePage/>} />
        <Route path="/search/:tour_name" element={<DetailTour/>}/>
				<Route path="/register" element={<SignUp onRegister={handleLogin} />} />
				<Route path="/signin" element={<SignIn onRegister={handleLogin} />} />
				<Route path={`/profile/*`} element={<Profile props = {loggedInUser}/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/detail/:id/*" element={<DetailTour/>} />
        {/* <Route path="/detail/:id/payment" element={<Payment/>} /> */}
        <Route path="/tour/search" element={<SearchPage/>} />
        <Route path="/detail/:id/payment" element={<Payment/>} />
        {/* <Route path={`/profile/${loggedInUser.email}/changePassword`} element={<ChangePasswordCard />} /> */}
			</Routes>
    </React.StrictMode> 
	);
};
export default App;