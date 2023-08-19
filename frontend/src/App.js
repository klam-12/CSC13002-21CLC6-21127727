import { Route, Routes } from 'react-router-dom';
import SuccessNotification from './components/notification/successNoti';
import WarningNotification from './components/notification/warningNoti';
import './globalStyle.css';
import SignIn from './pages/authentication/signIn';
import SignUp from './pages/authentication/signUp';
import HomePage from './pages/homePage/homePage';
import Payment from './pages/payment/payment';
import Profile from './pages/profile/profile';
import SearchPage from './pages/searchPage/searchPage';
import DetailTour from './pages/tour/detailTour';

function App() {
  return (
    <div >
      
      {/* <DetailTour></DetailTour> */}
      {/* <SearchPage></SearchPage> */}
      {/* <Payment></Payment> */}


      {/* <SuccessNotification></SuccessNotification> */}
      {/* <WarningNotification></WarningNotification> */}



      {/*  */}
      {/*  */}
      {/* <Profile></Profile> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/test" element={<SearchPage></SearchPage>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
