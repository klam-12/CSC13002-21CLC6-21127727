import Button from "../button/button";
import warning from '../../assets/icons/triangle-exclamation-solid.svg'
import './notification.css'
import React from 'react';
const WarningNotification = () => {
    return (
        <div className="notification">
            <img src={warning} alt="warning"></img>
            <h4>Đã có lỗi xảy ra</h4>
            <Button content="OK"></Button>
        </div>
    );
};
export default WarningNotification;