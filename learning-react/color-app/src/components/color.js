import React from 'react';

export const Color = ({title, color}) =>
    <div className="color">        
        <button>x</button>
        <h4>{title}</h4>
        <div style={{backgroundColor:color}}> The Color </div>    
    </div>