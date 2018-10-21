import React  from 'react';
import PropTypes from 'prop-types';
import StarRating from './star-rating';

const Color  = ({title, color, rating = 0, onRemove = r => r, onRate = t => t}) =>     
    <section className="color">
        <button onClick={onRemove}>x</button>
        <h1>{title}</h1>
        <div className="color" style={{backgroundColor: color}}></div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate}/>
        </div>
    </section>

Color.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number
}

export default Color;