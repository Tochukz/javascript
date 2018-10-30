import React from 'react';
import Star from './star';

export const Stars = ({stars}) => 
    <div className="stars">
       {
           stars.map((star, i) => 
               <Star key={i}> </Star>
           )S
       }
    </div>