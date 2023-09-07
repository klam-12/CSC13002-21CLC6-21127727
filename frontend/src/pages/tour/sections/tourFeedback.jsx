import * as React from 'react';
import {Input, Rating } from '@mui/material';
import avatar from '../../../assets/icons/avatar.jpg'
import './tourStyles.css'
import Avatar from '../../../components/avatar/avatar';

const ariaLabel = { 'aria-label': 'description' };

const TourFeedBack = () => {
    const [value, setValue] = React.useState(2);
    const [value1, setValue1] = React.useState(2);
    const [value2, setValue2] = React.useState(3);
    const [value3, setValue3] = React.useState(4);
    const [value4, setValue4] = React.useState(5);

    return (
        <div className="tour-feed-back-container">
            <div className="tour-feed-back-divider"></div>
            <div className="tour-feed-back">
            <form className="authentication-form">
                <div className="tour-feed-back-input">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment" name="comment" placeholder="Suy nghĩ của bạn về chuyến đi này" ></input> <br></br>
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment1" name="comment1" value="Chuyến đi rất tuyệt!" onfocus="this.blur()" readonly="readonly"></input> <br></br>
                <Rating name="read-only" value={value1} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment2" name="comment2" value="Chuyến đi rất tuyệt!" onfocus="this.blur()" readonly="readonly"></input> <br></br>
                <Rating name="read-only" value={value2} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment3" name="comment3" value="Chuyến đi rất tuyệt!" onfocus="this.blur()" readonly="readonly"></input> <br></br>
                <Rating name="read-only" value={value3} readOnly />
                </div>

                <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <input className="comment-bar" type="text" id="comment4" name="comment4" value="Chuyến đi rất tuyệt!" onfocus="this.blur()" readonly="readonly"></input> <br></br> 
                <Rating name="read-only" value={value4} readOnly />
                </div>
            </form>
            </div>
        </div>
    );
};
export default TourFeedBack;