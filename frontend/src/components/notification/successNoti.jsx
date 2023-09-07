import Button from "../button/button";
import success from '../../assets/icons/check-circle-solid.svg'
import './notification.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../button/button.css'
const SuccessNotification = () => {
    const navigate = useNavigate();

    const handleOKClick = () => {
        return navigate(-1) ? window.location.reload() : null;
    };
    return (
        <div className="notification">
            <img src={success} alt="check"></img>
            <h4>Thanh toán thành công</h4>
            <button onClick={handleOKClick} className="button">
                OK
            </button>
        </div>
    );
};
export default SuccessNotification;