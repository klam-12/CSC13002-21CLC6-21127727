import React from 'react';
import './authentication.css'
import { Grid } from "@mui/material";
import authImage from '../../assets/images/SignIn.jpg'
import SignUpCard from './sections/signUpCard';

const SignUp = ({ onRegister }) => {
    

    return (
        <div className="authentication-container">
            <Grid className="authentication" container spacing={4}>
                <Grid item xs={5}>
                    <img src={authImage} alt="auth-image"></img>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                <SignUpCard onRegister={onRegister} ></SignUpCard>
                </Grid>
            </Grid>
        </div>
    );
};
export default SignUp;
