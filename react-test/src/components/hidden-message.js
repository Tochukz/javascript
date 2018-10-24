import React from 'react';

// class HiddenMessage extends React.Component
// {
//     constructor(props){
//         super(props);
//         this.state = {
//             hidden: (props.hide)? props.hide : true
//         };
//     }

//     componentWillReceiveProps(nextProps){
//         this.setState({hidden: nextProps.hide});
//     }

//     render(){
//         const {children} = this.props;
//         const {hidden} = this.state;
//         return(
//             <p>
//                 {(hidden)? children.replace(/[a-zA-Z0-9]/g, 'x') : children}
//             </p>
//         )
//     }
// }

/*If this is all we are doing with HiddenMessage , then we should use a stateless functional component instead.*/
const HiddenMessage = ({children, hide}) => 
    <p>{(hide)? children.replace(/[a-z-A-Z0-9]/g, 'x') : children }</p>

/*The only reason we would ever add state to a child component is when we want that component to change things about itself internally.
For example, using componentWillReceiveProps to modify state would be warranted if the component required a setState call: 
...
    hide() {
        const hidden = true
        this.setState({hidden})
    }
    show() {
        const hidden = false
        this.setState({hidden})
    }
    return
        <p onMouseEnter={this.show} onMouseLeave={this.hide}>{(hidden) ? children.replace(/[a-zA-Z0-9]/g, "x") :children }</p>
...
If the component is not going to change itself, keep it stateless and manage the state from the parent only*/
export default HiddenMessage;