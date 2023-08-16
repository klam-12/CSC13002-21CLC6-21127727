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
      <HomePage></HomePage>
      {/* <DetailTour></DetailTour> */}
      {/* <SearchPage></SearchPage> */}
      {/* <Payment></Payment> */}


      {/* <SuccessNotification></SuccessNotification> */}
      {/* <WarningNotification></WarningNotification> */}



      {/* <SignUp></SignUp> */}
      {/* <SignIn></SignIn> */}
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
