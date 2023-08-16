import '../payment.css'

const PaymentMethod = () => {
    return (
    <div>
        <section className="payment-method-section">
            <h2 className="payment-title">Chọn cách thanh toán</h2>
            <div className="payment-info-container">
            <div className="payment-choice">
                <label for="visa">
                    <input type="radio" value="visa" id="visa" name="topic"/>
                    <>  </>Thẻ quốc tế
                </label>
                <label for="bank-transfer">
                    <input type="radio" value="bank-transfer" id="bank-transfer" name="topic" />
                    <>  </>Chuyển khoản ngân hàng
                </label>
                <label for="momo">
                    <input type="radio" value="momo" id="momo" name="topic" />
                    <>  </>Ví Momo
                </label>
            </div>
            </div>
        </section>
    </div>
    );
};
export default PaymentMethod;
