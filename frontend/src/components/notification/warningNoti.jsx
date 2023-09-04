import Button from "../button/button.css";
import warning from '../../assets/icons/triangle-exclamation-solid.svg'
import './notification.css'
import React from 'react';
const WarningNotification = ({onClose}) => {
    return (
        <div className="notification">
            <img src={warning} alt="warning"></img>
            <h4>Bạn cần phải đăng nhập</h4>
            <button onClick={onClose} className="button">OK</button>
        </div>
    );
};
export default WarningNotification;