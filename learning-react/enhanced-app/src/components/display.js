import React from 'react';

const Display = ({truthy=true, children}) => (truthy)? React.Children.only(children) : null;

export default Display;

/*We can also use React.Children to convert the children property to an array
    ...
    const findChild = (children, child) =>
            React.Children.toArray(children).filter(c => c.type === child )[0]
    ...
*/