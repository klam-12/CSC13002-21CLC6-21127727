import React from 'react';
import '../payment.css'
import { useNavigate } from 'react-router-dom';

const PaymentButton = ({handle}) => {
    const navigate = useNavigate();
    const handleComeback = () =>{
        navigate(-1); 
    }
    return (
        <div className="payment-button-section">
            <button onClick = {handleComeback} className="back-button">Trở lại</button>
            <button onClick={handle} className="payment-button">Thanh toán</button>
        </div>
    );
};
export default PaymentButton;