import React from 'react';
import { Grid } from '@mui/material';
import '../payment.css'

const PaymentInfo = () => {
    const name = "Tran Minh Anh"
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
                        <p>Trần Minh Anh</p>  
                        <p>0909123456</p>    
                        <p>tranminhanh1912@gmail.com</p> 
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
                        <p>DU LỊCH HÀ NỘI - DU THUYỀN HẠ LONG 5* - NÚI THỦNG - QUẢNG YÊN</p>  
                        <p>STN084-2023-01311</p>    
                        <p>23/10/2023 - 30/10/2023</p> 
                        <p>Nguyễn Văn A</p>
                        <p>135B Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TP HCM</p>
                        <p>1</p>
                    </Grid>
                </Grid>

                </div>
                <div className="payment-price">
                    <p className="total-price-title">Tổng tiền</p>
                    <p className="total-price">5.000.000 VND</p>
                </div>    
        </section>
    </div>
    );
};
export default PaymentInfo;
