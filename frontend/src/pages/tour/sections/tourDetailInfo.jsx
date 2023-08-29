import React from 'react';
import './tourStyles.css'
import test from '../../../assets/images/test.jpg'
import { Grid } from '@mui/material';
import Button from '../../../components/button/button';

const TourDetailInfo = ({ post }) => {
    console.log(post);
    return (
        <div className="tour-info-container">
            <h2 className="tour-info-title">Thông tin tour</h2>
            <Grid container spacing={4}>
                <Grid item xs={5}>
                    <p>THỜI GIAN: {post.time} ngày</p>
                    <br></br>
                    <p>ĐIỂM XUẤT PHÁT: {post.from_location}</p>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6}>
                    <p>PHƯƠNG TIỆN: {post.vehicle_name}</p>
                    <br></br>
                    <p>ĐIỂM ĐẾN: {post.to_location}</p>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>NGÀY KHỞI HÀNH</p>
                    <br></br>
                    <p>{post.start_date}</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>GIÁ VÉ (VND)</p>
                    <br></br>
                    <p>{post.price}</p>
                </Grid>
                <Grid item xs={3}>
                    <br></br>
                    <br></br>
                    <Button content="Đặt ngay"></Button>
                </Grid>
            </Grid>
            <h2 className="tour-info-title">Mô tả</h2>
            <p>{post.detail}</p>
            <br></br>
            <p></p>
            <h2 className="tour-info-title">Combo có gì?</h2>
            {post.heading_activity_picture.map((headingActivity, index) => (
                <div key={index}>
                <p><b>NGÀY {index}: {headingActivity.Heading}</b></p>
                <p>Activity: {headingActivity.Activity}</p>
                <img src={test} alt="test"></img>
                </div>
            ))}
        </div>
    );
};
export default TourDetailInfo;