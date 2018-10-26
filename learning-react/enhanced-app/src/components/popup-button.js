import React from 'react';
import Expandable from './expandable';

class MenuButton extends React.Component
{
    componentWillReceiveProps(nextProps){
        const collapsed = (nextProps.collapsed && nextProps.collapsed === true)? true : false;
        this.setState = ({collapsed});
    }
    render(){
        const {children, collapsed, txt, expandCollapse} = this.props;
        return (
            <div className = "pop-button">
                <button onClick={expandCollapse}>{txt}</button>
                {
                    (!collapsed)? <div className="pop-up">{children}</div> : ' '
                 }
            </div>
        )
    }
}

const PopupButton = Expandable(MenuButton);
export default PopupButton; 