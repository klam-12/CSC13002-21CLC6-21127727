import React, { useEffect,useState } from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import PaymentInfo from './sections/paymentInfo';
import PaymentMethod from './sections/paymentMethod';
import PaymentButton from './sections/paymentButton';
import axiosInstance from '../../axios';
import { useLocation, useParams } from 'react-router-dom';
import SuccessNotification from '../../components/notification/successNoti';

const Payment = () => {
    var currentURL = window.location.href;
    const parts = currentURL.split('/')
    const id = parts[4]
    console.log(id)
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [infPayment, setInfPayment] = useState({
        posts: [],
        loading: true,
      });
    const [showSuccess, setShowSuccess] = useState(false);
    const id_start_date = queryParams.get('id_start_date')
    const id_user = queryParams.get('id_user')

    const apiUrl = `detail/${id}/payment?id_start_date=${id_start_date}&id_user=${id_user}`;
    useEffect(() => {
        
    const res =  axiosInstance.get(apiUrl)
        .then((data) =>{
            const inf = data.data;
            console.log(inf)
            setInfPayment({posts: inf, loading: false });
            const  user = inf['user_data'][0]
            console.log(user['id']);      
            console.log(infPayment.posts)
        })
        .catch((error) =>{
            console.error('Error fetching search results:', error);
            setInfPayment({ posts: [], loading: false  });
        });
    },[]);
    const handlePayment = async(e)=>{
        e.preventDefault();
        setShowSuccess(true);
        console.log(showSuccess)
        try {
            
            const response = await axiosInstance.post(apiUrl, {
                id_user : infPayment.posts['user_data']['id'],
                id_start_date: infPayment.posts['tour_data']['tour_id']
              }).then((res) => {
                console.log(res);
                console.log(res.data);
              });
              console.log('Signup successful');
            } catch (error) {
                    console.error('Signup failed', error);
        }
        
    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="payment">
            <h1>Thanh toán</h1>
            {infPayment.loading ? (
                <p>Loading</p>
            ): (<PaymentInfo inf = {infPayment.posts}></PaymentInfo> )}
            
            </div>
            <br></br>
            <PaymentMethod></PaymentMethod>
            <PaymentButton handle ={handlePayment}></PaymentButton>
            {showSuccess ? <SuccessNotification /> : console.log(null)}
            <Footer></Footer>
        </div>
    );
};
export default Payment;
