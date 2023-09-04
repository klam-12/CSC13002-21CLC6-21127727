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
	const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

        console.log(access_token);
        navigate('/tour');
				window.location.reload();
      } catch (error) {
        console.error('Error handling response:', error);
      }
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status === 400) {
          setError('Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu của bạn.');
        } else if (err.response.status === 401) {
          setError('Đăng nhập không thành công. Tài khoản của bạn không hợp lệ.');
        } else if (err.response.status === 403) {
          setError('Đăng nhập không thành công. Tài khoản của bạn đã bị khoá.');
        } else {
          setError('Đăng nhập không thành công. Có lỗi xảy ra.');
        }
      } else {
        setError('Đăng nhập không thành công. Có lỗi kết nối đến máy chủ.');
      }
		})
	};
    return (
    <div className="authentication-card">
        <form className="authentication-form">
            <input className="authentication-info" type="text" id="email" name="email" placeholder="Nhập vào đây" autoFocus onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="text" id="password" name="password" placeholder="Mật khẩu" autoFocus onChange={handleChange}></input> <br></br>
						{error && <p style={{ color: 'red' }}>{error}</p>}
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
