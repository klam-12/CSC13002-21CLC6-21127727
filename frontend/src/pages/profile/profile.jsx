import React, { useContext, useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import ProfileCard from "./sections/profileCard";
import Avatar from "../../components/avatar/avatar";
import avatar from '../../assets/icons/avatar.jpg'
import './profile.css'
import ChangePasswordCard from "./sections/profileChangePassword";
import TakenTour from "./sections/profileTakenTour";
import { Routes, useLocation } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
const Profile = (props) => {
    const [userData, setUserData] = useState(null);
    const user  = props.props;
    console.log(user)
    const imageUrl = user.avatar ? `http://127.0.0.1:8000${user.avatar}` : `https://social.salework.net/images/default-avatar.jpg`;
    const location = useLocation();
    console.log(location.pathname)
    
    return (
        
        <div>
            
            <NavBar></NavBar>
            <div className="profile-section">
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <div className="profile-name-section"> 
                            
                            <Avatar className="profile-avatar" image= {imageUrl} />

                            <div className="profile-name-container">
                                <h4 className="profile-name">{user.full_name}</h4>
                                <a>Đổi avatar</a>
                            </div>
                        </div>
                        <div className="profile-info-section">
                            <div className="my-account-section">
                            <h3>Tài khoản của tôi</h3>
                                <Link to={`/profile`} className="custom-link"> Hồ sơ</Link><br></br>
                                <Link to={`/profile/changePassword`} className="custom-link"> Đổi mật khẩu</Link>
                            </div>
                            <Link to={`/profile/takenTour`} className="custom-link">
                            <h3>Tour đã đăng ký</h3>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Routes>
                        <Route path="" element={<ProfileCard props={user} />}></Route>
                        <Route path="/changePassword" element={<ChangePasswordCard props={user}/>} />
                        <Route path="/takenTour" element={<TakenTour />} />
                        </Routes>
                        
                        {/* <TakenTour></TakenTour> */}
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Profile;