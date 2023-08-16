import React, {Fragment, useState} from 'react';
import './navBar.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import {useAlert} from 'react-alert'
import SignIn from '../../pages/authentication/signIn';
import SignUp from '../../pages/authentication/signUp';
import Profile from '../../pages/profile/profile';
import {   BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
const NavBar = () => {
    let storedUser = localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null;
    // console.log(localStorage.getItem('user'))
    // console.log(storedUser.username)
  const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : null);
  console.log(loggedInUser)


    const handleLogout = () => {
        localStorage.removeItem('user');
        setLoggedInUser(null);
    };
    const guestLinks = ()=>(
            <Fragment>
            <li className="item">
                        <a href="register">Đăng ký</a>
                    </li>
                    <li className="item">
                        <a href="signin">Đăng nhập</a>
                    </li>
            </Fragment>
    )
    const authLinks = ()=>(
        <Fragment>
             <li className="item">
            <a href={`/profile/${loggedInUser.username}`}>{loggedInUser.username}</a>
        </li>
        <li className="item">
            <a onClick={handleLogout} >Đăng xuất</a>
        </li>
                
        </Fragment>
    )


    return (
            <div>
        <nav className="navbarItems">
            <div className="container">
                <div className="logo">
                    
                    <a href="#header"><> </>Travelus</a>
                </div>
                    <ul className="itemList">
                    <li className="item">
                        <a href="feedback">Feedbacks</a>
                    </li>
                    <li className="item">
                        <a href="hotTours">Hot tours</a>
                    </li>
                    <li className="item">
                        <a href="vacationPackages">Tất cả tours</a>
                    </li>
                    <li className="item">
                        <a href="aboutUs">Về chúng tôi</a>
                    </li>
                    {loggedInUser ? authLinks() :  guestLinks()}
                    </ul>
            </div>
        </nav>
            </div>
    );
};
export  default NavBar;