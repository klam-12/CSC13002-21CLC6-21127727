import React from 'react';
import { Grid } from "@mui/material";
import TourIndex from "./tourIndex";
import TourDetailInfo from "./tourDetailInfo";

const TourInfo = ( {props}) => {
    const post = props[0];
    console.log(post.id);
    return (
    <div>
        <section className="tour-info-section">
            <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <TourIndex></TourIndex>
                    </Grid> 
                    <Grid item xs={8}>
                        <TourDetailInfo post = {post} ></TourDetailInfo>
                    </Grid>
                </Grid>
        </section>
    </div>
    );
};
export default TourInfo;
