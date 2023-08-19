import '../authentication.css'
import FacebookGoogleButton from './fb_ggButton';

const SignUpCard = () => {
    return (
    <div className="authentication-card">
        <form className="authentication-form">
            <h2 className="authentication-title">ĐĂNG KÝ LÀM THÀNH VIÊN TRAVELUS THÔI!</h2>
            {/* <p className="authentication-warning">Thông tin đăng ký không hợp lệ</p> */}
            <input className="authentication-info" type="text" id="fullname" name="fullname" placeholder="Họ và tên"></input> <br></br>
            <input className="authentication-info" type="email" id="email" name="email" placeholder="Email"></input> <br></br>
            <input className="authentication-info" type="password" id="password" name="password" placeholder="Mật khẩu"></input> <br></br>
            <input className="authentication-info" type="tel" id="phone" name="phone" placeholder="Số điện thoại"></input> <br></br>
            <input className="authentication-info" type="date" id="dob" name="dob" placeholder="Ngày sinh"></input> <br></br>
            <select className="authentication-info" name="gender" id="gender">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
            </select>
            <input className="authentication-info" type="text" id="address" name="address" placeholder="Địa chỉ nhà"></input> <br></br>
            <input className="sign-up-submit" type="submit" value="Đăng ký"></input> <br></br>
            <FacebookGoogleButton content="Facebook"></FacebookGoogleButton>
            <FacebookGoogleButton content="Google"></FacebookGoogleButton>
            <p>Bạn đã có tài khoản? <a className="sign-in-link">Đăng nhập</a></p>
        </form>
    </div>
    );
};
export default SignUpCard;
