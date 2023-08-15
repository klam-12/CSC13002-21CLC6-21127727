import React, { useContext, useEffect,useState } from 'react';
import {  Route,Routes } from 'react-router';
import axiosInstance from './axios'; // Import the axiosInstance
import HomePage from './pages/homePage/homePage';
import DetailTour from './pages/tour/detailTour';
import SignIn from './pages/authentication/signIn';
import SignUp from './pages/authentication/signUp';
import Payment from './pages/payment/payment';
import Profile from './pages/profile/profile';
import SearchPage from './pages/searchPage/searchPage';
import NavBar from './components/navBar/navBar';
import { Outlet } from 'react-router-dom';
const App = () => {
  
  let storedUser = localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : '';
    // console.log(localStorage.getItem('user'))
    // console.log(storedUser.username)
  const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : '');
  console.log(loggedInUser)


    const handleLogin = (user) => {
        setLoggedInUser(user);
    };

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setLoggedInUser(null);
    };

  useEffect(() => {
		axiosInstance.get().then((res) => {
			console.log("app")
		});
	}, []);
	return (
		<React.StrictMode>
      <Routes>
        <Route exact path='tour/' element={<HomePage/>} />
        <Route path="/search/:tour_name" element={<DetailTour/>}/>
				<Route path="/register" element={<SignUp onRegister={handleLogin} />} />
				<Route path="/signin" element={<SignIn onRegister={handleLogin} />} />
				<Route path={`/profile/${loggedInUser.username}`} element={<Profile props = {loggedInUser}/>} />
			</Routes>
    </React.StrictMode> 
	);
};

// function App() {

//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         {loggedInUser ? (
//                             <>
//                                 <li><Link to="/profile">Profile</Link></li>
//                                 <li onClick={handleLogout}>Logout</li>
//                                 <li>Welcome, {loggedInUser.username}!</li>
//                             </>
//                         ) : (
//                             <>
//                                 <li><Link to="/register">Register</Link></li>
//                                 <li><Link to="/login">Login</Link></li>
//                             </>
//                         )}
//                     </ul>
//                 </nav>
//                 <Route path="/register" render={() => <Register onRegister={handleLogin} />} />
//                 <Route path="/login" render={() => <Login onLogin={handleLogin} />} />
//                 <Route path="/profile" component={Profile} />
//             </div>
//         </Router>
//     );
// }

export default App;
