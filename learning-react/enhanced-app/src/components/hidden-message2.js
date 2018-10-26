import React from 'react';
import Expandable from './expandable';

const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse} style={{cursor: 'pointer'}}>
        {
            (collapsed)? children.replace(/[a-zA-Z0-9]/g, 'x') : children            
        }
    </p> 

const HiddenMessage2 = Expandable(ShowHideMessage);

export default HiddenMessage2;