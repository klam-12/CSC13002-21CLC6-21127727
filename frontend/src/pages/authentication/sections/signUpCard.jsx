import React, { useState } from 'react';
import '../authentication.css'
import FacebookGoogleButton from './fb_ggButton';
import axiosInstance from '../../../axios'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import defaultImage from './ech.png'
const GENDER_CHOICES = [
	["M", "Nam"],
	["W", "Nữ"]
];

const SignUpCard = ({onRegister}) => {
  const navigate = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
		full_name:'',

		birth_date: '',
		address: '',
		gender:'',
		phone:'',
		avatar: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};
		const handleSubmit = async (e) => {
			e.preventDefault();
			console.log(formData);
			try {
				axiosInstance.post(`/user/register/`, { 
					email: formData.email,
					username: formData.username,
					password: formData.password,
					full_name: formData.full_name,
					birth_date: formData.birth_date,
					address: formData.address,
					gender: formData.gender,
					phone: formData.phone,
					avatar: defaultImage
				}).then((res) => {
					navigate('/signin');
					window.location.href = '/';
						console.log(res);
					console.log(res.data);
				});
				// const token = response.data.access;
				// localStorage.setItem('token', token);
				console.log('Signup successful');
				// You can redirect to the user's dashboard or perform other actions
			} catch (error) {
				console.error(error);
				// Handle error (display error message, validation messages, etc.)
			}
		};
	
    
    return (
    <div className="authentication-card">
        <h2 className="authentication-title">ĐĂNG KÝ LÀM THÀNH VIÊN TRAVELUS THÔI!</h2>
        <form className="authentication-form" noValidate>
            {/* <p className="authentication-warning">Thông tin đăng ký không hợp lệ</p> */}
            <input className="authentication-info" type="text" id="name" name="username" placeholder="username" required onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="password" id="password" name="password" placeholder="Mật khẩu" required onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="text" id="full_name" name="full_name" placeholder="Họ và tên" required onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="email" id="email" name="email" placeholder="Email" required onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="number" id="phone" name="phone" placeholder="Số điện thoại"onChange={handleChange}></input> <br></br>
            <input className="authentication-info" type="date" id="birth_date" name="birth_date" placeholder="Ngày sinh" onChange={handleChange}></input> <br></br>
            {/* <input className="authentication-info" type='radio' id="gender" name="gender" placeholder="Giới tính" onChange={handleChange} required></input> <br></br> */}
            <select name="gender" value={formData.gender} onChange={handleChange}>
                {GENDER_CHOICES.map(([value, label]) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
						<input className="authentication-info" type="text" id="address" name="address" placeholder="Địa chỉ nhà" onChange={handleChange}></input> <br></br>
            <input className="sign-up-submit" type="submit" value="Đăng ký" onClick={handleSubmit}></input> <br></br>
            <FacebookGoogleButton content="Facebook"></FacebookGoogleButton>
            <FacebookGoogleButton content="Google"></FacebookGoogleButton>
            <p>Bạn đã có tài khoản? <a className="sign-in-link">Đăng nhập</a></p>
        </form>
    </div>
    );
};
export default SignUpCard;
