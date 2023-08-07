import '../payment.css'

const PaymentInfo = () => {
    return (
    <div>
        <section className="payment-info-section">
            <h2 className="payment-title">Thông tin đặt tour</h2>
            <h3 className="payment-info-title">Thông tin khách hàng</h3>
            <div className="payment-info-container">
                <p>Họ và tên:</p>
                <p>Số điện thoại:</p>
                <p>Email</p>
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
