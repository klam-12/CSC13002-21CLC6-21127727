import React from 'react';
import { Grid } from '@mui/material';
import '../payment.css'

const PaymentInfo = ({inf}) => {
    console.log(inf)
    const user = inf['user_data'][0]
    const tour = inf['tour_data'][0]
    return (
    <div>
        <section className="payment-info-section">
            <h2 className="payment-title">Thông tin đặt tour</h2>
            <h3 className="payment-info-title">Thông tin khách hàng</h3>
            <div className="payment-info-container">
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <p>Họ và tên:</p>  
                        <p>Số điện thoại:</p>    
                        <p>Email:</p>                  
                    </Grid>
                    <Grid item xs={9}>
                        <p>{user['full_name']}</p>  
                        <p>{user['phone']}</p>    
                        <p>{user['email']}</p> 
                    </Grid>
                </Grid>
            </div>
            <h3 className="payment-info-title">Thông tin tour</h3>
            <div className="payment-info-container">
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <p>Tên tour:</p>
                        <p>Mã tour:</p>
                        <p>Thời gian:</p>
                        <p>Hướng dẫn viên:</p>
                        <p>Địa điểm tập trung:</p>
                        <p>Số lượng:</p>                  
                    </Grid>
                    <Grid item xs={9}>
                        <p>{tour['name_tour']}</p>  
                        <p>{tour['tour_id']}</p>    
                        <p>{tour['start_date']}</p> 
                        <p>{tour['guide']}</p>
                        <p>{tour['from_location']}</p>
                        <p>1</p>
                    </Grid>
                </Grid>

                </div>
                <div className="payment-price">
                    <p className="total-price-title">Tổng tiền</p>
                    <p className="total-price">{tour['price']} VND</p>
                </div>    
        </section>
    </div>
    );
};
export default PaymentInfo;
