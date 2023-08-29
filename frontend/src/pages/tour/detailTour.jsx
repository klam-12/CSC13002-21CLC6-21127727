import React from 'react'
import NavBar from '../../components/navBar/navBar';
import TourHeroBanner from './sections/tourHeroBanner';
import Footer from '../../components/footer/footer';
import TourInfo from './sections/tourInformation';
import TourFeedBack from './sections/tourFeedback';
import axios from 'axios';
import { useEffect,useState } from 'react';
import axiosInstance from '../../axios';
import { useParams } from 'react-router-dom';

const DetailTour = () => {
    const { id } = useParams(); // Lấy tham số id từ URL
    console.log(id); // In ra giá trị của id

    const [post, setPost] = useState(null);

    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/tour/detail/${id}`).then((res) => {
        console.log(id); // In ra giá trị của id
        setPost(res.data); 
        // console.log(res.data); // In ra dữ liệu tour từ API
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
  });
    }, [id, setPost]); 
    // Thêm id vào dependency array để useEffect re-run khi id thay đổi

    // console.log(post);x // In ra giá trị của post state sau khi được cập nhật
    if (!post) {
        return <div>Loading...</div>;
      }
    // console.log(post.tour_name)
    return (
        <div>
            <NavBar></NavBar>
            <TourHeroBanner></TourHeroBanner>
            <TourInfo props = { post } ></TourInfo>
            <TourFeedBack></TourFeedBack>
            <Footer></Footer>
        </div>
    );
};
export default DetailTour;
