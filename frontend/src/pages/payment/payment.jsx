import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import PaymentInfo from './sections/paymentInfo';
import PaymentMethod from './sections/paymentMethod';

const Payment = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="payment">
            <h1>Thanh toán</h1>
            <PaymentInfo ></PaymentInfo>
            </div>
            <br></br>
            <PaymentMethod></PaymentMethod>
            <Footer></Footer>
        </div>
    );
};
export default Payment;
