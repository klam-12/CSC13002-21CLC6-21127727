import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../axios';
import { Link } from '@material-ui/core';
import '../profile.css';

const ProfileCard = (props) => {
  
  const user = props.props
  const [isEditing, setIsEditing] = useState(false);

  const initialFormData = Object.freeze({
    full_name: user.full_name,
    phone: user.phone,
    birth_date: user.birth_date,
    gender: user.gender,
    address: user.address,
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const access_token = localStorage.getItem('access_token');

  const handleSaveClick = () => {
    if (!isEditing) return;

    axiosInstance
      .put('/user/profile/', formData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((profileRes) => {
        setIsEditing(false);
        console.log('User data updated successfully.');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
      
  };

  const handleInputChange = (e) => {
    if (!isEditing) return;

    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="profile-card">
        <h4 className="profile-title">Hồ sơ của tôi</h4>
        <p className="profile-title-info">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>

        {isEditing ? (
          <Link to="/profile/changeProfile">
            <button className="profile-change-button" onClick={handleSaveClick}>
              Lưu thay đổi
            </button>
          </Link>
        ) : (
          <Link to="/profile">
            <button className="profile-change-button" onClick={handleEditClick}>
              Chỉnh sửa
            </button>
          </Link>
        )}
        
        {/* Các trường thông tin người dùng */}
        <div className="profile-card-info-container">
          <label className="profile-label" htmlFor="profile-fullname">
            Tên profile
          </label>
          <input
            className="profile-card-info"
            type="text"
            id="profile-fullname"
            name="full_name"
            value={formData.full_name}
            readOnly={!isEditing}
            onChange={handleInputChange}
          />
          <br />
        </div>
      <div className="profile-card-info-container">
        <label className="profile-label" htmlFor="profile-email">
          Email
        </label>
        <input
          className="profile-card-info"
          type="text"
          id="profile-email"
          name="email"
          value={user.email}
          readonly
          onChange={handleInputChange}
        />
        <br />
      </div>
      
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-phone">Số điện thoại</label>
              <input className="profile-card-info" type="text" id="profile-phone" name="phone" 
              value={user.phone}
              readOnly={!isEditing}
              onChange={handleInputChange}></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-dob">Ngày sinh</label>
              <input className="profile-card-info" type="text" id="profile-dob" name="birth_date" 
              value={user.birth_date}
              readOnly={!isEditing}
              onChange={handleInputChange}></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-gender">Giới tính</label>
              <input className="profile-card-info" type="text" id="profile-gender" name="gender" 
              value={user.gender}
              readOnly={!isEditing}
              onChange={handleInputChange}></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-address">Địa chỉ</label>
              <input className="profile-card-info" type="text" id="profile-address" name="address" 
              value={user.address}
              readOnly={!isEditing}
              onChange={handleInputChange}></input> <br></br>
            </div>
        </div>
      </div>
    );
};
export default ProfileCard;