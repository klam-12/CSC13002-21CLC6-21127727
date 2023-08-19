import React from 'react';
import '../profile.css'

const ProfileCard = (props) => {
  const user = props.props
  console.log(user)
    return (
      <div>
        <form className="profile-card">
            <h4 className="profile-title">Hồ sơ của tôi</h4>
            <p className="profile-title-info">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
            
            <button className="profile-change-button">Lưu thay đổi</button>

            {/* <div className="profile-card-info-container"> */}
              {/* <label className="profile-label" for="profile-name">Tên đăng nhập</label>
                <input className="profile-card-info" type="text" id="profile-name" name="profile-name" value={user.full_name} readonly></input> <br></br>
            </div> */}

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-fullname">Tên profile</label>
              <input className="profile-card-info" type="text" id="profile-fullname" name="profile-fullname" value={user.full_name} readonly></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-email">Email</label>
              <input className="profile-card-info" type="text" id="profile-email" name="profile-email" value={user.email} readonly></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-phone">Số điện thoại</label>
              <input className="profile-card-info" type="text" id="profile-phone" name="profile-phone" value={user.phone}readonly></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-dob">Ngày sinh</label>
              <input className="profile-card-info" type="text" id="profile-dob" name="profile-dob" value={user.birth_date} readonly></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-gender">Giới tính</label>
              <input className="profile-card-info" type="text" id="profile-gender" name="profile-gender" value={user.gender} readonly></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-address">Địa chỉ</label>
              <input className="profile-card-info" type="text" id="profile-address" name="profile-address" value={user.address} readonly></input> <br></br>
            </div>
        </form>
      </div>
    );
};
export default ProfileCard;