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
import image  from '/Users/user/CSC13002-21CLC6-21127727/frontend/src/avt.png'
// import { Link } from 'react-router-dom';
import { Routes, useLocation } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
const Profile = (props) => {
    const [userData, setUserData] = useState(null);
    const user  = props.props;
    console.log(user)
    const imageUrl = user.avatar ? `http://localhost:3000${user.avatar}` : `https://social.salework.net/images/default-avatar.jpg`;
    const location = useLocation();
    console.log(location.pathname)
    
    return (
        <div>
            {/* <Routes>
                <Route path="/profile/changePassword" element={<ChangePasswordCard/>} />
                <Route path="/profile/takenTour" component={TakenTour} />
                <Route path="/profile" render={() => <ProfileCard props={user} />} />
            </Routes> */}
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
                                <a>Hồ sơ</a> <br></br>
                                <Link to={`/profile/changePassword`}> Đổi mật khẩu</Link>
                            </div>
                            <h3><a>Tour đã đăng ký</a></h3>
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