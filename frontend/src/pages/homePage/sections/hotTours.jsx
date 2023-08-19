import React,  { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import './sectionStyles.css'
import TourCard from "../../components/tourCard";
import axiosInstance from '../../../axios';
const HotTours = ({ posts }) => {
    // const posts  = props;
    
	// if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
    return (
            <section className="homepage-section" id="hotTours">
                <h1>Hot tours</h1>
                {!posts ? (
                <p>Loading...</p>
                ) : (
                    <Grid container spacing={4}>
                        {posts.map((post)  => { //zalo đi kau
                            return (
                                <Grid item key={post.id} xs={3}>
                                    <TourCard props ={post}></TourCard>
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </section>
 
    );
};
export default HotTours;