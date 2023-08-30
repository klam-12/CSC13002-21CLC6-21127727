import '../profile.css'

const ProfileCard = () => {
    return (
      <div>
        <form className="profile-card">
            <h4 className="profile-title">Hồ sơ của tôi</h4>
            <p className="profile-title-info">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
            
            <button className="profile-change-button">Lưu thay đổi</button>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-name">Tên đăng nhập</label>
                <input className="profile-card-info" type="text" id="profile-name" name="profile-name" value="manhmanhmanh123" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-fullname">Tên profile</label>
              <input className="profile-card-info" type="text" id="profile-fullname" name="profile-fullname" value="Trần Minh Anh" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-email">Email</label>
              <input className="profile-card-info" type="text" id="profile-email" name="profile-email" value="tranminhanh1912@gmail.com" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-phone">Số điện thoại</label>
              <input className="profile-card-info" type="text" id="profile-phone" name="profile-phone" value="0909123456" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-dob">Ngày sinh</label>
              <input className="profile-card-info" type="text" id="profile-dob" name="profile-dob" value="17/12/2003" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>
            
            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-gender">Giới tính</label>
              <input className="profile-card-info" type="text" id="profile-gender" name="profile-gender" value="Nữ" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>

            <div className="profile-card-info-container">
              <label className="profile-label" for="profile-address">Địa chỉ</label>
              <input className="profile-card-info" type="text" id="profile-address" name="profile-address" value="21 Trương Công Định, phường 14, Tân Bình" onfocus="this.blur()" readonly="readonly"></input> <br></br>
            </div>
        </form>
      </div>
    );
};
export default ProfileCard;