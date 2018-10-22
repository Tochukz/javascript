import React from 'react';
import PropTypes from 'prop-types';
import Star from './star';


const StarRating = ({starsSelected=0, totalStars=5, onRate = p => p}) =>
        <div className="start-rating">
            {([...Array(totalStars)].map((elem, i) => 
                  <Star key={i} onClick={() => onRate(i+1)} selected={i<starsSelected} />      
                )          
            )}
            <p>&nbsp;</p>
            <p>{starsSelected} of {totalStars} stars</p>
        </div>
StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}
export default StarRating;