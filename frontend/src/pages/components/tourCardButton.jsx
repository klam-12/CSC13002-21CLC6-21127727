import React from 'react';
import './tourCardButton.css'
import { Link } from 'react-router-dom';

const TourCardButton = ( {id}) => {
    return (
        <Link to={`/detail/${id}`}>
        <button className="tour-card-button">
            Chi tiết
        </button>
        </Link>
    );
};
export default TourCardButton;