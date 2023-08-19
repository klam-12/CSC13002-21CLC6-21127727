import './authentication.css'
import { Grid } from "@mui/material";
import authImage from '../../assets/images/SignIn.jpg'
import SignInCard from './sections/signInCard';

const SignIn = () => {
    return (
        <div className="authentication-container">
            <Grid className="authentication" container spacing={4}>
                <Grid className="authentication-image" item xs={5}>
                    <img src={authImage} alt="auth-image"></img>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                <SignInCard></SignInCard>
                </Grid>
            </Grid>
        </div>
    );
};
export default SignIn;
