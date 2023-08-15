import React from 'react';
import '../payment.css'

const PaymentInfo = () => {
    const name = "Tran Minh Anh"
    return (
    <div>
        <section className="payment-info-section">
            <h2 className="payment-title">Thông tin đặt tour</h2>
            <h3 className="payment-info-title">Thông tin khách hàng</h3>
            <div className="payment-info-container">
                <div className="payment-info-items">
                <p className="payment-info-item" style={{display: 'inline'}}>Họ và tên: </p>
                <p className="payment-info-item" style={{position: 'relative',display: 'inline'}}>Tran Minh Anh</p>
                </div>
                <div>
                <p style={{display: 'inline-block'}}>Số điện thoại: </p>
                <p style={{position: 'relative',display: 'inline-block'}}>0909123456</p>
                </div>
                <div>
                <p style={{display: 'inline'}}>Email: </p>
                <p style={{position: 'relative',display: 'inline'}}>tranminhanh1912@gmail.com</p>
                </div>
            </div>
            <h3 className="payment-info-title">Thông tin tour</h3>
            <div className="payment-info-container">
                <p>Tên tour:</p>
                <p>Mã tour:</p>
                <p>Thời gian:</p>
                <p>Hướng dẫn viên:</p>
                <p>Địa điểm tập trung:</p>
                <p>Số lượng:</p> 
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
