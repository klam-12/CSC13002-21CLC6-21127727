import './authentication.css'
import { Grid } from "@mui/material";
import test from '../../assets/images/test.jpg'
import SignUpCard from './sections/signUpCard';

const SignUp = () => {
    return (
        <div className="authentication-container">
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <img src={test} alt="test"></img>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                <SignUpCard></SignUpCard>
                </Grid>
            </Grid>
        </div>
    );
};
export default SignUp;
