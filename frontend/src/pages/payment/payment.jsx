import React, { useEffect,useState } from 'react';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/footer';
import PaymentInfo from './sections/paymentInfo';
import PaymentMethod from './sections/paymentMethod';
import PaymentButton from './sections/paymentButton';
import axiosInstance from '../../axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import SuccessNotification from '../../components/notification/successNoti';
import WarningNotification from '../../components/notification/warningNoti';

const Payment = () => {
    const navigate = useNavigate();
    const access_token = localStorage.getItem('access_token');
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
    const [showSuccess, setShowSuccess] = useState('');
    
    const id_start_date = queryParams.get('id_start_date')
    const id_user = queryParams.get('id_user')

    const apiUrl = `detail/${id}/payment?id_start_date=${id_start_date}&id_user=${id_user}`;
    useEffect(() => {
   
    const res =  axiosInstance.get(apiUrl,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
      )
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
        
        
        try {
            const response = await axiosInstance.post(apiUrl,
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              }, {
              id_user: infPayment.posts['user_data'][0]['email'],
              id_start_date: infPayment.posts['tour_data'][0]['start_date'],
              id_tour: infPayment.posts['tour_data'][0]['tour_id'],
            });
          
            console.log(response);
            console.log(response.data);
          
            if (response.status === 201) {
              setShowSuccess('success');
            } else if (response.status === 401) {
              // Handle a 401 Unauthorized response if needed
              console.error('Error:', response.data.error); // Access the error message
              setShowSuccess('fail'); // Set your failure state/message
            }
          
            console.log(response.status); // This will work correctly inside the `then` block
          } catch (err) {
            if (err.response) {
              if (err.response.status === 401) {
                // Handle a 401 Unauthorized response if needed
                console.error('Error:', err.response.data.error); // Access the error message
                setShowSuccess('fail'); // Set your failure state/message
              }
            } else {
              // Handle other errors (e.g., network issues)
              console.error('Unexpected Error:', err);
            }
          } finally {
            // Render the NotificationComponent conditionally based on your state or logic
            // For example:
            // {showSuccess === 'success' && <NotificationComponent />}
            console.log(showSuccess)
          }
        }          
    infPayment.loading ? console.log(null): console.log(infPayment.posts['user_data'][0])
    const handleOKClick = () => {
        return navigate(-1) ? window.location.reload() : null;
        
      };

    function NotificationComponent() {
    if (showSuccess === 'success') {
        return 
    } else if (showSuccess !== '') {
        // return <WarningNotification content="Bạn đã đăng kí tour này rồi" onClose={handleOKClick} />;
    } else {
        return <WarningNotification content="Bạn đã đăng kí tour này rồi" onClose={handleOKClick} />;
    }
    console.log(showSuccess)
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
            {showSuccess === 'success' ? <SuccessNotification /> : null}
            {showSuccess === 'fail' ? <WarningNotification content="Bạn đã đăng kí tour này rồi" onClose={handleOKClick} /> : null}
            
            <Footer></Footer>
        </div>
    );
};
export default Payment;
