import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import avatar from '../../assets/icons/avatar.jpg'
import React, {Fragment, useState} from 'react';
import './navBar.css'
import Avatar from '../avatar/avatar';

const id = 1
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
  const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : null);
    const handleLogout = () => {
        localStorage.removeItem('user');
        setLoggedInUser(null);
    };
    const guestLinks = ()=>(
            <Fragment>
            <li className="item">
                        {/* <a href="register">Đăng ký</a> */}
                        <Link to="/register" relative="path">Đăng nhập</Link>
                    </li>
                    <li className="item">
                    <Link to="/signin" relative="path">Đăng ký</Link>
                        {/* <a href="signin">Đăng nhập</a> */}
                    </li>
            </Fragment>
    )
    const authLinks = ()=>(
        <Fragment>
             <li className="item">
             <Link to={`/profile/${loggedInUser.id}`} relative="path"><Avatar image={loggedInUser.avatar}></Avatar></Link>
            {/* <a href={`/profile/${loggedInUser.id}`}>{loggedInUser.full_name}</a> */}
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
                    <ul className="item-list">
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