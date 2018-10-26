import React from 'react';

const User = (props) => {
    let age = (props.age)? props.age : 'N/A';
    if(props.children){
        return ( <p>Name: {props.children} | Age: {age}</p> );
    }else{
         return <p>Invalid Entry</p>
    }
}
export default User;

