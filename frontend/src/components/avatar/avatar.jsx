import React from 'react';
import './avatar.css'

const Avatar = ( {image} ) => {
    return (
        <img className="avatar" src={image} alt="avatar"/>
    );
};
export default Avatar;