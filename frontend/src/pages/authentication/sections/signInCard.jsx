import React, { useState } from 'react';
import '../authentication.css'
import FacebookGoogleButton from './fb_ggButton';
import axiosInstance from '../../../axios';
import {Redirect} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInCard = () => {
	
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
		email: "",
		password: "",
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

	// 	axiosInstance
	// 		.post(`/user/token/`, {
	// 			email: formData.email,
	// 			password: formData.password,
	// 		})
	// 		.then((res) => {
	// 			localStorage.setItem('access_token', res.data.access_token);
	// 			localStorage.setItem('refresh_token', res.data.refresh);
	// 			// localStorage.setItem('user', JSON.stringify(res.data.user));
	// 			// 		axiosInstance.defaults.cheaders['Authorization'] =
	// 			// 	'JWT ' + localStorage.getItem('access_token');
	// 			// console.log(localStorage.getItem('user'))
	// 			// console.log(JSON.stringify(res.data.user))
	// 			console.log(res.data.access_token)
	// 			// navigate('/tour');
	// 		});
	// };
	axiosInstance
    .post(`/user/token/`, {
      email: formData.email,
      password: formData.password,
    })
    .then(async (res) => {
      try {
        const access_token = res.data.access;
        const refresh_token = res.data.refresh;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
				axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('access_token');
        // You can perform additional actions after successful login here

        console.log(access_token);
			// 		axiosInstance
			// 			.get(`/user/profile/`
			// 			// {
			// 			// 	headers: {
			// 			// 		Authorization: `Bearer ${access_token}`,
			// 			// 	},
			// 			// }
			// 			)
			// 			.then((profileRes) => {
			// 				const profileData = profileRes.data;
			// 				console.log(profileData); // Display profile data

			// 				// Save profile data to localStorage
			// 				localStorage.setItem('user', JSON.stringify(profileData));
			// 			})
			// 			.catch((profileError) => {
			// 				console.error('Error fetching profile:', profileError);
			// 			});
			// 		// console.log(JSON.parse(localStorage.getItem("user")));
			// 		// 
        navigate('/tour');
				window.location.reload();
      } catch (error) {
        console.error('Error handling response:', error);
        // Handle response error here
      }
    })
    .catch((error) => {
      console.error('Login error:', error);
      // Handle login error here
    });
	};
    return (
    <div className="authentication-card">
        <form className="authentication-form">
            <input className="authentication-info" type="text" id="email" name="email" placeholder="Nhập vào đây" autoFocus onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="text" id="password" name="password" placeholder="Mật khẩu" autoFocus onChange={handleChange}></input> <br></br>
            <input className="sign-in-submit" type="submit" value="Đăng ký" onClick={handleSubmit}></input>
            <p className="forgot-password"><a>Quên mật khẩu</a></p>
            <FacebookGoogleButton content="Facebook"></FacebookGoogleButton>
            <FacebookGoogleButton content="Google"></FacebookGoogleButton>
            <p>Bạn mới đến Travelus? <a className="sign-up-link">Đăng ký</a></p>
        </form>
    </div>
    );
};

export default SignInCard;
