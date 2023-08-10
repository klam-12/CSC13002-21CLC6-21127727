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
                <Avatar image={avatar}/>
                <Input placeholder="Suy nghĩ của bạn về chuyến đi này" inputProps={ariaLabel} style={{width: '1000px'}}/>
                {/* <TextField id="comment" label="Suy nghĩ của bạn về chuyến đi này" variant="outlined"></TextField> */}
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
            </div>
            <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <Input placeholder="Suy nghĩ của bạn về chuyến đi này" inputProps={ariaLabel} style={{width: '1000px'}}/>
                {/* <TextField id="comment" label="Suy nghĩ của bạn về chuyến đi này" variant="outlined"></TextField> */}
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
            </div>
            <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <Input placeholder="Suy nghĩ của bạn về chuyến đi này" inputProps={ariaLabel} style={{width: '1000px'}}/>
                {/* <TextField id="comment" label="Suy nghĩ của bạn về chuyến đi này" variant="outlined"></TextField> */}
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
            </div>
            <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <Input placeholder="Suy nghĩ của bạn về chuyến đi này" inputProps={ariaLabel} style={{width: '1000px'}}/>
                {/* <TextField id="comment" label="Suy nghĩ của bạn về chuyến đi này" variant="outlined"></TextField> */}
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
            </div>
            <div className="tour-feed-back">
                <Avatar image={avatar}/>
                <Input placeholder="Suy nghĩ của bạn về chuyến đi này" inputProps={ariaLabel} style={{width: '1000px'}}/>
                {/* <TextField id="comment" label="Suy nghĩ của bạn về chuyến đi này" variant="outlined"></TextField> */}
                <Rating name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}>
                </Rating>
            </div>
        </div>
    );
};
export default TourFeedBack;