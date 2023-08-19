import Button from "../button/button";
import success from '../../assets/icons/check-circle-solid.svg'
import './notification.css'

const SuccessNotification = () => {
    return (
        <div className="notification">
            <img src={success} alt="check"></img>
            <h4>Thanh toán thành công</h4>
            <Button content="OK"></Button>
        </div>
    );
};
export default SuccessNotification;