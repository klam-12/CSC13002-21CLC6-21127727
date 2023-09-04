import React from 'react';
import './tourStyles.css'
import test from '../../../assets/images/test.jpg'
import { Grid } from '@mui/material';
import '../../../components/button/button.css';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import WarningNotification from '../../../components/notification/warningNoti';
const split = (content) =>{
    const paragrahs = content.split('\\n')
    return (
        
            paragrahs.map((index,paragrah) =>(
                <p>{index}</p>
            ))
        
    )
}
const TourDetailInfo = ({ post }) => {
    const storedUser = JSON.parse(localStorage.getItem("user")) 
    const {id } = useParams();
    storedUser ? console.log(storedUser.email): console.log(null)

    const [showWarning, setShowWarning] = useState(false);
    const handleBooking = () => {
        if (storedUser) {
          // Người dùng đã đăng nhập, chuyển hướng đến trang payment
          const paymentLink = `/detail/${id}/payment?id_start_date=${post.start_date[0]}&id_user=${storedUser.email}`;
          window.location.href = paymentLink;
        } else {
          // Người dùng chưa đăng nhập, hiển thị thông báo
          setShowWarning(true);
        }
      };
      const closeWarning = () => {
        setShowWarning(false);
      };
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
                    <p>{post.start_date[0]}</p><br></br>
                    <p>{post.start_date[1]}</p>
                </Grid>
                <Grid item xs={3}>
                    <p className="tour-info-title" style={{fontWeight: '600'}}>GIÁ VÉ (VND)</p>
                    <br></br>
                    <p>{post.price}</p>
                </Grid>
                <Grid item xs={3}>
                    <br></br>
                    <br></br>
                    {/* <Link to={`/detail/${id}/payment?id_start_date=${post.start_date[0]}&id_user=${storedUser.email}`} state={{ data: post }}> */}
                    <button onClick={handleBooking} className="button">Đặt ngay</button>
                    {showWarning && <WarningNotification  onClose={closeWarning} />}
                    {/* </Link> */}
                </Grid>
            </Grid>
            <h2 className="tour-info-title">Mô tả</h2>
            <p>{split(post.detail)}</p>
            <br></br>
            <p></p>
            <h2 className="tour-info-title">Combo có gì?</h2>
            {post.heading_activity_picture.map((headingActivity, index) => (
                <div key={index}>
                <p><b>NGÀY {index + 1 }: {headingActivity.Heading}</b></p>
                <p>Activity: {split(headingActivity.Activity)}</p>
                <img src={`http://127.0.0.1:8000${headingActivity.Image}`} alt="test"></img>
                </div>
            ))}
           
        </div>
        
    );
};
export default TourDetailInfo;
