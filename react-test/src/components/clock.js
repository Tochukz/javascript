import React from 'react';
import getClockTime from '../lib/getClockTime';

class Clock extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            ...getClockTime()
        };
    }
    componentDidMount(){
        console.log("Starting Clock");            
        this.ticking = setInterval(() => this.setState(getClockTime()), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.ticking);
        console.log("Stopping Clock");
    }
    render(){
        const {hours, minutes, seconds, timeOfDay} = this.state;
        return (
            <div className="clock">
                <span>{hours}:</span>
                <span>{minutes}:</span>
                <span>{seconds} </span>
                <span>{timeOfDay} </span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }
}

export default Clock;