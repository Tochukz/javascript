import React from 'react';
import PropTypes from 'prop-types';
import Member from './member';
import getMembers from '../lib/getMembers';

class MemberList extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            member:[],
            loading: false,
            error: null
        }
    }
    componentWillMount(){
        this.setState({loading: true});
        getMembers(this.props.count).then( 
            members => this.setState({members, loading:false}),
            error => this.setState({error, loading: false})
        );
    }
    componentWillUpdate(){
        console.log('Updating life cylcle');
    }
    render(){
        const {members, loading, error} = this.state;
        return (
            <div className="member-list">
                <h2>Member List</h2>
                {
                    (loading)? <span>Loading members...</span> : (members.length)? 
                        members.map((member, i) => 
                            <Member key={i} {...member} />
                        ) : <p>0 members loaded</p>
                }
                {(error)? <p>Error loading members: {error}</p>: " "}
            </div>
        )
    }
}

MemberList.propTypes = {
    count: PropTypes.number
}
export default MemberList;