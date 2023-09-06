import React from 'react';
import SearchTourCard from '../../components/searchTourCard';
import '../profile.css'
import { useEffect,useState } from 'react';
import axiosInstance from '../../../axios';
import { Grid } from "@mui/material";
const TakenTour = () => {
  const access_token = localStorage.getItem('access_token');
  const [appState, setAppState] = useState({
    posts: [],
    loading: true, // Add a loading state
  });
  useEffect(() => {
    axiosInstance
    .get('bookinglist/',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => {
      const allPosts = res.data;
      setAppState({ posts: allPosts, loading: true });
      console.log(res.data);
    })
    .catch((error) => {
      console.error('Error fetching search results:', error);
      setAppState({ posts: [], loading: false }); // Handle error by setting posts to an empty array
    });
}, []);
    return (
      <div className="taken-tour-section">
        {!(appState.loading) ? (
                <p>Loading...</p>
                ) : (
                    <Grid container spacing={4}>
                        {appState.posts.map((post)  => { 
                            return (
                                  <div className="taken-tour"><SearchTourCard post = {post}></SearchTourCard></div>
                                   
                            );
                        })}
                    </Grid>
                )}
        
{/*         
        <div className="taken-tour"><SearchTourCard ></SearchTourCard></div> */}
      </div>
    );
};
export default TakenTour;