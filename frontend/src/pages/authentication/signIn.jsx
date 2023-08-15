import React from 'react';
import './authentication.css'
import { Grid } from "@mui/material";
import test from '../../assets/images/test.jpg'
import SignInCard from './sections/signInCard';

const SignIn = () => {

    return (
        <div className="authentication-container">
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <img src={test} alt="test"></img>
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
