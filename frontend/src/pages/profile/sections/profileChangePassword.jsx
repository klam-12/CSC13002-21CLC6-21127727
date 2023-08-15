import React from 'react';
import '../profile.css'

const ChangePasswordCard = () => {
    return (
      <div>
        <form className="profile-card">
            <h4 className="profile-title">Đổi mật khẩu</h4>
            <p className="profile-title-info">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
            
            <button className="profile-change-button">Lưu thay đổi</button>

            <div className="profile-card-info-container" style={{marginTop: '35px', marginBottom: '35px'}}>
              <label className="profile-label" for="profile-old-password">Mật khẩu cũ</label>
                <input className="profile-card-info" type="text" id="profile-old-password" name="profile-old-password" value="manhmanhmanh123" readonly></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-new-password">Mật khẩu mới</label>
              <input className="profile-card-info" type="text" id="profile-new-password" name="profile-new-password" value="Trần Minh Anh" readonly></input> <br></br>
            </div>
        </form>
      </div>
    );
};
export default ChangePasswordCard;