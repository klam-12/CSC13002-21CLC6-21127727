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

		axiosInstance
			.post(`/user/signin/`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				console.log('API response:', res.data);
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				localStorage.setItem('user', JSON.stringify(res.data.user));
						axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
					console.log(localStorage.getItem('user'))
					console.log(JSON.stringify(res.data.user))
				navigate('/tour');
			});
	};

    return (
    <div className="authentication-card">
        <form className="authentication-form">
            <h2 className="authentication-title">ĐĂNG NHẬP</h2> 
						{/* <p className="authentication-warning">Sai tên đăng nhập hoặc mật khẩu</p> */}
            <input className="authentication-info" type="text" id="email" name="email" placeholder="Nhập vào đây" autoFocus onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="password" id="password" name="password" placeholder="Mật khẩu" autoFocus onChange={handleChange}></input> <br></br>
            <input className="sign-in-submit" type="submit" value="Đăng nhập" onClick={handleSubmit}></input>
            <p className="forgot-password"><a>Quên mật khẩu</a></p>
            <FacebookGoogleButton content="Facebook"></FacebookGoogleButton>
            <FacebookGoogleButton content="Google"></FacebookGoogleButton>
            <p>Bạn mới đến Travelus? <a className="sign-up-link">Đăng ký</a></p>
        </form>
    </div>
    );
};

export default SignInCard;
