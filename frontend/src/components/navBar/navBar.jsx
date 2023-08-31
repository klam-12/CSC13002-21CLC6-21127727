import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import avatar from '../../assets/icons/avatar.jpg'
import React, {Fragment, useState} from 'react';
import './navBar.css'
import Avatar from '../avatar/avatar';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';


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
        // try {
            
        //   await axios.post('http://127.0.0.1:8000/tour/user/logout'); // Gửi yêu cầu đăng xuất đến API của Django
        //   window.location.reload();
        //   navigate('/login'); 
        //   localStorage.removeItem('user');
        //   localStorage.removeItem('access_token');
        //     setLoggedInUser(null);
        // } catch (error) {
        //   console.error('Đăng xuất không thành công:', error);
        // }
        // localStorage.removeItem('user');
        // localStorage.removeItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');
        console.log(refresh_token)
        try {
            const refresh_token = localStorage.getItem('refresh_token');
            console.log(refresh_token)
            if (refresh_token) {
              // headers = {
              //   'Authorization': `Bearer ${refresh_token}`
              // }
              // const response = await axiosInstance.post('/user/logout/', { refresh_token });
              const access_token = localStorage.getItem('access_token');
              const auth = `Bearer ` + access_token
              
              console.log(access_token)
              console.log(auth)

              const response = await axiosInstance.post(
                '/user/logout/', refresh_token ,
                // {
                //   headers: {
                //     'Authorization': auth, 
                //   }
                // }
              );
              // const response = axiosInstance.post('user/logout/', refresh_token);
              if (response.status === 205) {
                // Đăng xuất thành công
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user');
                window.location.reload();
          navigate('/login'); 
               
              } else {
                // Xử lý lỗi đăng xuất không thành công
                console.error('Đăng xuất không thành công.');
              }
            }
          } catch (error) {
            console.error('Lỗi khi gửi yêu cầu đăng xuất:', error);
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
             <Link to={`/profile`} relative="path">
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
                
                    <HashLink smooth to="/tour">Travelus</HashLink>
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