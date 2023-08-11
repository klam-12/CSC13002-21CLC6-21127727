import '../authentication.css'
import FacebookGoogleButton from './fb_ggButton';

const SignInCard = () => {
    return (
    <div className="authentication-card">
        <h2 className="authentication-title">ĐĂNG NHẬP</h2>
        <form className="authentication-form">
            {/* <p className="authentication-warning">Sai tên đăng nhập hoặc mật khẩu</p> */}
            <input className="authentication-info" type="text" id="name" name="name" placeholder="Nhập vào đây"></input> <br></br>
            <input className="authentication-info" type="text" id="password" name="password" placeholder="Mật khẩu"></input> <br></br>
            <input className="sign-in-submit" type="submit" value="Đăng ký"></input>
            <p className="forgot-password"><a>Quên mật khẩu</a></p>
            <FacebookGoogleButton content="Facebook"></FacebookGoogleButton>
            <FacebookGoogleButton content="Google"></FacebookGoogleButton>
            <p>Bạn mới đến Travelus? <a className="sign-up-link">Đăng nhập</a></p>
        </form>
    </div>
    );
};
export default SignInCard;
