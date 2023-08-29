import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import avatar from '../../assets/icons/avatar.jpg'
import React, {Fragment, useState} from 'react';
import './navBar.css'
import Avatar from '../avatar/avatar';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const useImageUrl = (loggedInUser) => {
    const [imageUrl, setImageUrl] = useState('');
  
    useEffect(() => {
      if (loggedInUser) {
        const userAvatar = loggedInUser.avatar;
        const defaultAvatarUrl = 'https://social.salework.net/images/default-avatar.jpg';
        console.log('http://localhost:3000'+ userAvatar)
        setImageUrl(userAvatar ? `http://localhost:3000${userAvatar}` : defaultAvatarUrl);
      }
    }, [loggedInUser]);
  
    return imageUrl;
  };


const NavBar = () => {
    const navigate = useNavigate();
    let storedUser = localStorage.getItem("user") !== undefined ? JSON.parse(localStorage.getItem("user")) : null;
    const [loggedInUser, setLoggedInUser] = useState(storedUser ? storedUser : null);
    const handleLogout = async () => {
        try {
            localStorage.removeItem('user');
            setLoggedInUser(null);
          await axios.get('http://127.0.0.1:8000/tour/logout/blacklist/'); // Gửi yêu cầu đăng xuất đến API của Django
          // Sau khi đăng xuất, điều hướng người dùng về trang đăng nhập hoặc trang chủ
          navigate('/login'); // Hoặc '/home' tùy thuộc vào thiết lập của bạn
        } catch (error) {
          console.error('Đăng xuất không thành công:', error);
        }
      };
    
    const guestLinks = ()=>(
            <Fragment>
            <li className="item">
                    <Link to="/register" relative="path">Đăng ký</Link>
                    </li>
                    <li className="item">
                    <Link to="/signin" relative="path">Đăng nhập</Link>
                    </li>
            </Fragment>
    )
    const authLinks = ()=>
    {
        const imageUrl = useImageUrl(loggedInUser);
        console.log(loggedInUser.email)
    return (
        
        <Fragment>
             <li className="item">
             <Link to={`/profile/${loggedInUser.id}`} relative="path">
                <Avatar image={imageUrl}></Avatar>
            </Link>
        </li>
        <li className="item">
        <Link relative="path" onClick={handleLogout}>Đăng xuất</Link>
        </li>
                
        </Fragment>
    )}

    return (
            <div>
        <nav className="navbarItems">
            <div className="container">
            <div className="logo">
                    <HashLink smooth to="/#header">Travelus</HashLink>
                </div>
                    <ul className="item-list">
                    <li className="item">
                        {/* <a href="/#aboutUs">Về chúng tôi</a> */}
                        <HashLink smooth to="/#aboutUs">Về chúng tôi</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#aboutUs'}} relative="path">Về chúng tôi</Link> */}
                    </li>
                    <li className="item">
                        <Link to="/test" relative="path">Tất cả tours</Link>
                    </li>
                    <li className="item">
                        {/* <a href="/#hotTours">Hot tours</a> */}
                        <HashLink smooth to="/#hotTours">Hot tours</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#hotTours'}} relative="path">Hot tours</Link> */}
                    </li>
                    <li className="item">
                        {/* <a href="/#feedback">Feedbacks</a> */}
                        <HashLink smooth to="/#feedback">Feedbacks</HashLink>
                        {/* <Link to={{pathname: '/', hash: '#feedback'}} relative="path">Feedbacks</Link> */}
                    </li>
                    {loggedInUser ? authLinks() :  guestLinks()}
                    </ul>
            </div>
                   
 
        </nav>
            </div>
    );
};
export  default NavBar;