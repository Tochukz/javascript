import React from 'react';
import User from './user';

class Users extends React.Component{
    render(){
        return (
            <div>
                <h2>{this.props.title} </h2>
                <User age="21">Emeka</User>
                <User age="27">John</User>
                <User age="19">Tunde</User>
            </div>
        );
    }
}
export default Users;
