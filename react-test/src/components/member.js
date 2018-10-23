import React from 'react';
import PropTypes from 'prop-types';

const Member  = ({email, picture, name, location}) => 
    <div className="member" style={{border: 'solid #ccc 1px', width: '300px', display: 'inline-block'}}>
        <img src={picture.thumbnail} alt="" />
        <h4>{name.first} {name.last}</h4>
        <p><a href={`mailto:${email}`}>{email}</a></p>
        <p>{location.city} {location.state}</p>
    </div>

Member.propTypes = {
    email:PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default Member;
