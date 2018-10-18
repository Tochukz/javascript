import React from 'react';

const User = (props) => {
    let age = (props.age)? props.age : 'N/A';
    if(props.children){
        return ( <h3>Name: {props.children} | Age: {age}</h3> );
    }else{
         return <h3>Invalid Entry</h3>
    }
}
export default User;

