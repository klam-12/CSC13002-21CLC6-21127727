import * as React from 'react';
import {Input, Rating } from '@mui/material';
import avatar from '../../../assets/icons/avatar.jpg'
import './tourStyles.css'
import Avatar from '../../components/avatar';

const ariaLabel = { 'aria-label': 'description' };

const TourFeedBack = () => {
    const [value, setValue] = React.useState(2);

    return (
        <div className="tour-feed-back-container">
            <div className="tour-feed-back-divider"></div>
            <div className="tour-feed-back">
            <form className="authentication-form">
                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment" name="comment" placeholder="Suy nghĩ của bạn về chuyến đi này"></input> <br></br>
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment1" name="comment1" value="Chuyến đi rất tuyệt!" readonly></input> <br></br>
                <Rating name="read-only" value={value} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment2" name="comment2" value="Chuyến đi rất tuyệt!" readonly></input> <br></br>
                <Rating name="read-only" value={value} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment3" name="comment3" value="Chuyến đi rất tuyệt!" readonly></input> <br></br>
                <Rating name="read-only" value={value} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment4" name="comment4" value="Chuyến đi rất tuyệt!" readonly></input> <br></br> 
                <Rating name="read-only" value={value} readOnly />
                </div>
            </form>
            </div>
        </div>
    );
};
export default TourFeedBack;