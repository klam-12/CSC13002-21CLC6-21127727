import React, { useState } from 'react';
import '../profile.css'
import axios from 'axios';
import axiosInstance from '../../../axios'
const ChangePasswordCard = ({props}) => {
  const user =  props.props
  const initialFormData = Object.freeze({
    profile_old_password: '',
    profile_new_password: '',
    
  })
  // http://127.0.0.1:8000/tour/user/changePassword/
  const [formChangePassword, updateformChangePassword] = useState(initialFormData);

	
		


    const handleChange = (e) => {
      updateformChangePassword({
        ...formChangePassword,
        [e.target.name]: e.target.value.trim(),
      });
    };

    const handleSubmit = async (e) => {

			e.preventDefault();
			// console.log(formData);
      // const refresh_token = localStorage.getItem('refresh_token');
      //       // console.log(refresh_token)
      //       if (refresh_token) {
              // headers = {
              //   'Authorization': `Bearer ${refresh_token}`
              // }
              // const response = await axiosInstance.post('/user/logout/', { refresh_token });
              const access_token = localStorage.getItem('access_token');
              const auth = `Bearer ` + access_token
              
              console.log(access_token)
              console.log(auth)
              try {
                const res =	axiosInstance.post(`/user/changePassword/`, { 
                  old_password: formChangePassword.profile_old_password,
                  new_password: formChangePassword.profile_new_password,
                },
                {
                    headers: {
                      'Authorization': auth, 
                    }
                  }).then((res) => {
                  window.location.reload();
                    console.log(res);
                  console.log(res.data);
                });
              } catch (error) {
                console.error(error);
              }
              // const response = await axiosInstance.post(
              //   '/user/logout/', refresh_token ,
              //   {
              //     headers: {
              //       'Authorization': auth,  // Thêm access token vào header
              //       // 'Content-Type': 'application/json'
              //     }
              //   }
              // );
            // }
			
			}
  return (
      <div>
        <form className="profile-card">
            <h4 className="profile-title">Đổi mật khẩu</h4>
            <p className="profile-title-info">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
            
            <button className="profile-change-button" onClick = {handleSubmit}>Lưu thay đổi</button>

            <div className="profile-card-info-container" style={{marginTop: '35px', marginBottom: '35px'}}>
              <label className="profile-label" for="profile_old_password">Mật khẩu cũ</label>
                <input className="profile-card-info" type="password" id="profile_old_password" name="profile_old_password" required onChange={handleChange}></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile_new_password">Mật khẩu mới</label>
              <input className="profile-card-info" type="password" id="profile_new_password" name="profile_new_password" required onChange={handleChange}></input> <br></br>
            </div>
        </form>
      </div>
    );
};
export default ChangePasswordCard;