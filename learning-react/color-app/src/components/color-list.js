import React from 'react';
import Color from 'color';

const ColorList = ({colors}) =>
    <div className="color-list">
        {
            colors.map((color, i) => 
                <Color {...color} />
            )
        }
    </div>
export default ColorList;
