import React, { useContext, useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import ProfileCard from "./sections/profileCard";
import Avatar from "../components/avatar";
import avatar from '../../assets/icons/avatar.jpg'
import './profile.css'
import ChangePasswordCard from "./sections/profileChangePassword";
import TakenTour from "./sections/profileTakenTour";
import image  from '/Users/user/CSC13002-21CLC6-21127727/frontend/src/avt.png'
const Profile = (props) => {
    const [userData, setUserData] = useState(null);
    const user  = props.props;
    // console.log(user.avatar)
    const imageUrl = user.avatar;
    console.log(user.avatar)
    return (
        <div>
            <NavBar></NavBar>
            <div className="profile-section">
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <div className="profile-name-section">
                            {/* <img style={{"height" : "100%", "width" : "50%"}} src={imageUrl} alt="" /> */}
                            <Avatar className="profile-avatar" image={`http://localhost:3000${user.avatar}`}></Avatar>
                            <div className="profile-name-container">
                                <h4 className="profile-name">{user.full_name}</h4>
                                <a>Đổi avatar</a>
                            </div>
                        </div>
                        <div className="profile-info-section">
                            <div className="my-account-section">
                            <h3>Tài khoản của tôi</h3>
                                <a>Hồ sơ</a> <br></br>
                                <a>Đổi mật khẩu</a>
                            </div>
                            <h3><a>Tour đã đăng ký</a></h3>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <ProfileCard props = { user }></ProfileCard>
                        {/* <ChangePasswordCard></ChangePasswordCard> */}
                        {/* <TakenTour></TakenTour> */}
                    </Grid>
                </Grid>
            </div>
            <Footer></Footer>
        </div>
    );
};
export default Profile;