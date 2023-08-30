import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import '../authentication.css'
import FacebookGoogleButton from './fb_ggButton';
import gg from '../../../assets/icons/gg.svg'
import fb from '../../../assets/icons/fb.svg'

const SignInCard = () => {
    return (
    <div className="authentication-card">
        <form className="authentication-form">
            <h2 className="authentication-title">ĐĂNG NHẬP</h2> 
            {/* <p className="authentication-warning">Sai tên đăng nhập hoặc mật khẩu</p> */}
            <input className="authentication-info" type="text" id="name" name="name" placeholder="Nhập vào đây"></input> <br></br>
            <input className="authentication-info" type="text" id="password" name="password" placeholder="Mật khẩu"></input> <br></br>
            <input className="sign-in-submit" type="submit" value="Đăng nhập"></input>
            <p className="forgot-password"><a>Quên mật khẩu</a></p>
            <br></br>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FacebookGoogleButton src={fb} content="Facebook"></FacebookGoogleButton>
                </Grid>
                <Grid item xs={6}>
                    <FacebookGoogleButton src={gg} content="Google"></FacebookGoogleButton>
                </Grid>
            </Grid>
            <p>Bạn mới đến Travelus? <Link to="/signup" relative="path" className="sign-up-link">Đăng ký</Link></p>
        </form>
    </div>
    );
};
export default SignInCard;
