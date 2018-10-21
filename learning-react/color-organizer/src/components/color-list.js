import React from 'react';
import PropTypes from 'prop-types';
import Color from './color';

const ColorList = ({colors = [], onRate = r => r, onRemove = p => p}) => 
    <div className="color-list">
        {
          (colors.length === 0)? <p>No Colors Listed. (Add a Color)</p> :colors.map((color, i) =>           
            <Color key={color.id} {...color} onRate={(rating) => onRate(color.id, rating)} onRemove={() => onRemove(color.id) } />
          )
        }
    </div>

ColorList.protoType = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}
export default ColorList;
